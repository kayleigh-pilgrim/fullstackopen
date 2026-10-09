const express = require('express');
require('dotenv').config();
const Note = require('./models/note');

const app = express();

const requestLogger = (request, response, next) => {
  console.log(`Method: ${request.method}`);
  console.log(`Path: ${request.path}`);
  console.log(`Body: ${request.body}`);
  console.log('---');
  next();
};

app.use(express.static('gui'))
app.use(express.json());
app.use(requestLogger);


app.get('/hello', (request, response) => {
  response.send('<h1>Hello World</h1>');
});

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes);
  });
});

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note);
      } else {
        response.statusMessage = "That note does not exist";
        response.status(404).end();
      }
    })
    /*
    .catch(error => {
      console.error(error);
      response.statusMessage = "Invalid ID";
      response.status(400).json({ error: "malformatted id" });
    });
    */
    .catch(error => next(error));
});

app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

app.post('/api/notes', (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: 'Content missing'
    });
  }
  
  const note = {
    content: body.content,
    important: body.important || false,
  };

  Note.create(note).then(savedNote => {
    response.json(savedNote);
  });
});

app.put('/api/notes/:id', (request, response, next) => {
  const { content, important } = request.body;

  Note.findById(request.params.id)
    .then(note => {
      if (!note) {
        response.statusMessage = "That note does not exist";
        response.status(404).end();
      }

      note.content = content;
      note.important = important || false;

      return note.save().then(updatedNote => {
        response.json(updatedNote);
      });
    })
    .catch(error => next(error));
});

const unknownEndpoint = (request, response) => {
  response.statusMessage = "Unknown endpoint";
  response.status(404).json({ error: 'Unknown endpoint' });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  if (error.name === 'CastError') {
    response.statusMessage = "Invalid ID";
    return response.status(400).json({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    response.statusMessage = "Validation error";
    return response.status(400).json({ error: error.message });
  }
  
  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
