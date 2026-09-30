const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <hr />
      greeting app created by <a href='https://github.com/mluukkai' target="_blank">mluukkai</a>
    </footer>
  )
}

const App = () => {
  /*
  const name = 'Allison'
  const age = 21
  */
  const friends = [
    { name: 'Kayleigh', age: 36 + 1  },
    { name: 'Allison', age: 21 },
    { name: 'Megan', age: 25 }
  ]

  return (
    <>
      <h1>Greetings</h1>
      {/*
      <Hello name="Kayleigh" age={36 + 1} />
      <Hello name={name} age={age} />
      */}
      <Hello name={friends[0].name} age={friends[0].age} />
      <Hello name={friends[1].name} age={friends[1].age} />
      <Hello name={friends[2].name} age={friends[2].age} /> 
      <Footer />
    </>
  )
}

export default App