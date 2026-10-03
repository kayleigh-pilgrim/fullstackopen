import { useState, useEffect } from 'react'
import personsService from './services/persons'
import Title from './components/Title'
import AddPersonForm from './components/AddPersonForm'
import DisplayNumbers from './components/DisplayNumbers'
import FilterInput from './components/FilterInput'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState({ message: '', type: '' })

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
      <Notification message={notification.message} type={notification.type} />

      <Title text="Add a new" />
       <AddPersonForm persons={persons} setPersons={setPersons} setNotification={setNotification} />

      <Title text="Numbers" />
      <DisplayNumbers persons={filteredPersons} setPersons={setPersons} setNotification={setNotification} />
    </div>
  )
}

export default App
