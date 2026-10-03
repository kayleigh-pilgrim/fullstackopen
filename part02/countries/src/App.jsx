import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countriesService.getAll().then(initialCountries => {
      setCountries(initialCountries)
    })
  }, [])

  if (!countries) return (<div>Loading...</div>)
  
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  ); 

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries countries={filteredCountries} setFilter={setFilter} />
    </>
  )
}

export default App
