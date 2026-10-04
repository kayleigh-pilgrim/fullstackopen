import { useState } from 'react'
import personsService from '../services/persons'

const Input = ({ label, value, onChange }) => (
  <div>
    <label>
      {label}: <input value={value} onChange={onChange} />
    </label>
  </div>
)

const AddPersonForm = ({ persons, setPersons, setNotification }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const onNameChange = (e) => setNewName(e.target.value)
  const onNumberChange = (e) => setNewNumber(e.target.value)

  const addPerson = (e) => {
    e.preventDefault()

    const existingPerson = persons.find(person => person.name === newName)
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber }
        personsService.update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === existingPerson.id ? returnedPerson : person))
            setNotification({ message: `Updated ${newName}'s number successfully.`, type: 'success' })
            setTimeout(() => {
              setNotification({ message: '', type: '' })
            }, 5000)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setNotification({ message: 'The person was already removed from the server.', type: 'error' })
            setTimeout(() => {
              setNotification({ message: '', type: '' })
            }, 5000)
            setPersons(persons.filter(person => person.id !== existingPerson.id))
          })
      }
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 1,
    }

    personsService.create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotification({ message: `Added ${newName} successfully.`, type: 'success' })
        setTimeout(() => {
          setNotification({ message: '', type: '' })
        }, 5000)
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        setNotification({ message: 'Failed to add person. Please try again.', type: 'error' })
        setTimeout(() => {
          setNotification({ message: '', type: '' })
        }, 5000)
      })
  }

  return (
    <form onSubmit={addPerson}>
      <Input label="name" value={newName} onChange={onNameChange} />
      <Input label="number" value={newNumber} onChange={onNumberChange} />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
export default AddPersonForm