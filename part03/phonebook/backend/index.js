const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
//app.use(morgan('tiny'));
morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122"
  }
];

const personNotFound = (response) => {
  response.statusMessage = "That person does not exist";
  response.status(404).json({ "error": "That person does not exist" });
};

const randomId = () => Math.floor(Math.random() * 1000000);

app.use(express.static('gui'))

app.get('/info', (request, response) => {
  const info = `<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`;
  response.send(info);
});

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(p => p.id === id);
    
  if (!person) {
    personNotFound(response);
    return;
  }

  response.json(person);
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  
  if (!persons.find(p => p.id === id)) {
    personNotFound(response);
    return;
  }
  
  persons = persons.filter(p => p.id !== id);

  response.status(204).end();
});

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    response.statusMessage = "Name or number is missing";
    response.status(400).json({ "error": "Name or number is missing" });
    return;
  }

  if (persons.find(p => p.name === body.name)) {
    response.statusMessage = "Name must be unique";
    response.status(400).json({ "error": "Name must be unique" });
    return;
  }

  const newPerson = {
    id: randomId(),
    name: body.name,
    number: body.number
  };

  persons.push(newPerson);
  response.status(201).json(newPerson);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}: http://localhost:${PORT}`);
});