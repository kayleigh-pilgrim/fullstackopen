import { useState } from 'react'

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

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 1,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
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