import { useState } from 'react'
import personsService from '../services/persons'

const Input = ({ label, value, onChange }) => (
  <div>
    <label>
      {label}: <input value={value} onChange={onChange} />
    </label>
  </div>
)

const AddPersonForm = ({ persons, setPersons }) => {
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
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            alert('Failed to update person. Please try again.')
            console.error('Error updating person:', error)
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
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        alert('Failed to add person. Please try again.')
        console.error('Error adding person:', error)
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