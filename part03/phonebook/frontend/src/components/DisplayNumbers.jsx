import personsService from '../services/persons'

const DisplayNumber = ({ name, number, onDelete }) => (
  <p>{name} {number} <button onClick={onDelete}>delete</button></p>
)

const DisplayNumbers = ({ persons, setPersons, setNotification }) => {
  const deletePerson = (id) => {
    if (!window.confirm('Are you sure you want to delete this person?')) {
     return;
    }

    personsService.remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        setNotification({ message: 'Deleted person successfully.', type: 'success' })
        setTimeout(() => {
          setNotification({ message: '', type: '' })
        }, 5000)
      })
      .catch(error => {
        setNotification({ message: 'Failed to delete person. Please try again.', type: 'error' })
        setTimeout(() => {
          setNotification({ message: '', type: '' })
        }, 5000)
      })
  }

  return (
    <div>
      {persons.map((person) => (
        <DisplayNumber 
          key={person.id} 
          name={person.name} 
          number={person.number} 
          onDelete={() => deletePerson(person.id)}
        />
      ))}
    </div>
  )
}

export default DisplayNumbers