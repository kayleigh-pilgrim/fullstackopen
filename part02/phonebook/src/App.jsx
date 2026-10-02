import { useState } from 'react'
import Title from './components/Title'
import AddPersonForm from './components/AddPersonForm'
import DisplayNumbers from './components/DisplayNumbers'
import FilterInput from './components/FilterInput'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filter, setFilter] = useState('')

  const filteredPersons = persons.filter(
    person => person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <Title text="Phonebook" />
      <FilterInput filter={filter} setFilter={setFilter} />
      
      <Title text="Add a new" />
      <AddPersonForm persons={persons} setPersons={setPersons} />

      <Title text="Numbers" />
      <DisplayNumbers persons={filteredPersons} />
    </div>
  )
}

export default App
