import { useState, useEffect } from 'react'
import personsService from './services/persons'
import Title from './components/Title'
import AddPersonForm from './components/AddPersonForm'
import DisplayNumbers from './components/DisplayNumbers'
import FilterInput from './components/FilterInput'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
      <DisplayNumbers persons={filteredPersons} setPersons={setPersons} />
    </div>
  )
}

export default App
