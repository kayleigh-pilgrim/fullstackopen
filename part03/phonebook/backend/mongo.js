const { argv } = require('process')
const mongoose = require('mongoose')
require('dotenv').config()

if (!argv[2]) {
  console.log('Please provide the MongoDB password as an argument')
  process.exit(1)
}

const MONGO_PASSWORD = argv[2]
const MONGO_USER = process.env.MONGODB_USERNAME
const MONGODB_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.bhumllb.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(MONGODB_URI, { family: 4 })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (argv[3] && argv[4]) {
  const name = argv[3]
  const number = argv[4]

  const person = new Person({
    name,
    number,
  })

  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  Person.find({}).then(persons => {
    console.log('phonebook:')
    persons.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}