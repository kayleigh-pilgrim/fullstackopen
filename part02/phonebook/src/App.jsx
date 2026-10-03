import { useState, useEffect } from 'react'
import axios from 'axios'
import Title from './components/Title'
import AddPersonForm from './components/AddPersonForm'
import DisplayNumbers from './components/DisplayNumbers'
import FilterInput from './components/FilterInput'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
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
      <DisplayNumbers persons={filteredPersons} />
    </div>
  )
}

export default App
