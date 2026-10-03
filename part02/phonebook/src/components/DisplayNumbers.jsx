import personsService from '../services/persons'

const DisplayNumber = ({ name, number, onDelete }) => (
  <p>{name} {number} <button onClick={onDelete}>delete</button></p>
)

const DisplayNumbers = ({ persons, setPersons }) => {
  const deletePerson = (id) => {
    if (!window.confirm('Are you sure you want to delete this person?')) {
     return;
    }

    personsService.remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        alert('Failed to delete person. Please try again.')
        console.error('Error deleting person:', error)
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