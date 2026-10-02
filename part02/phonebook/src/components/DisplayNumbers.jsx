const DisplayNumber = ({ name, number }) => <p>{name} {number}</p>

const DisplayNumbers = ({ persons }) => (
  <div>
    {persons.map((person) => (
      <DisplayNumber key={person.id} name={person.name} number={person.number} />
    ))}
  </div>
)

export default DisplayNumbers