const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const Person = require('./models/person');

const app = express();

app.use(express.json());
//app.use(morgan('tiny'));
morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

const personNotFound = (response) => {
  response.statusMessage = "That person does not exist";
  response.status(404).json({ "error": "That person does not exist" });
};

//const randomId = () => Math.floor(Math.random() * 1000000);

app.use(express.static('gui'))

app.get('/info', (request, response) => {
  Person.countDocuments({}).then(count => {
    const info = `<p>Phonebook has info for ${count} people</p><p>${new Date()}</p>`;
    response.send(info);
  }); 
  return;
});

app.get('/api/persons', (request, response) => {
  //response.json(persons);
  Person.find({}).then(persons => {
    response.json(persons);
  });
});

app.get('/api/persons/:id', (request, response, next) => {
  /*
  const id = Number(request.params.id);
  const person = persons.find(p => p.id === id);
    
  if (!person) {
    personNotFound(response);
    return;
  }

  response.json(person);
  */
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person);
      } else {
        personNotFound(response);
      }
    })
    .catch(error => next(error));
});

app.delete('/api/persons/:id', (request, response, next) => {
  /*
  const id = Number(request.params.id);
  
  if (!persons.find(p => p.id === id)) {
    personNotFound(response);
    return;
  }
  
  persons = persons.filter(p => p.id !== id);

  response.status(204).end();
  */
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      if (result) {
        response.status(204).end();
      } else {
        personNotFound(response);
      }
    })
    .catch(error => next(error));
});

app.post('/api/persons', (request, response, next) => {
  const body = request.body;

  if (!body.name || !body.number) {
    response.statusMessage = "Name or number is missing";
    response.status(400).json({ "error": "Name or number is missing" });
    return;
  }

  /*
  if (persons.find(p => p.name === body.name)) {
    response.statusMessage = "Name must be unique";
    response.status(400).json({ "error": "Name must be unique" });
    return;
  }
  */
  
  /*
  const newPerson = {
    id: randomId(),
    name: body.name,
    number: body.number
  };
  persons.push(newPerson);
  response.status(201).json(newPerson);
  */
  const person = new Person({
    name: body.name,
    number: body.number
  });

  person.save().then(savedPerson => {
    response.status(201).json(savedPerson);
  }).catch(error => next(error));
});

app.put('/api/persons/:id', (request, response, next) => {
  const { name, number } = request.body;

  Person.findById(request.params.id)
    .then(person => {
      if (!person) {
        personNotFound(response);
        return;
      }

      person.name = name;
      person.number = number;

      return person.save()
        .then(updatedPerson => {
          response.json(updatedPerson);
        })
        .catch(error => next(error));
    })
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    response.statusMessage = "Malformatted ID";
    response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    response.statusMessage = "Validation error";
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}: http://localhost:${PORT}`);
});