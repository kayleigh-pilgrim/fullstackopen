const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part, exercises }) => <p>{part} {exercises}</p>

const Content = ({ parts }) => {
  if (!parts || parts.length === 0) return null

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises || 0} />
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  if (!parts || parts.length === 0) return null

  const total = parts.reduce((sum, part) => sum + (part.exercises || 0), 0)
  
  return <p><strong>total of {total} exercises</strong></p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
} 

export default Course