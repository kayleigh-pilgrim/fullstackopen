import { useState, useEffect } from 'react'
import weatherService from '../services/weather'
import WeatherIcon from './WeatherIcon'

const Countries = ({ countries, setFilter }) => {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    if (countries.length === 1) {
      const lat = countries[0].capitalInfo.latlng[0]
      const long = countries[0].capitalInfo.latlng[1]
      console.log(lat, long)
      weatherService.getWeather(lat, long).then(data => setWeather(data))
    }
  }, [countries]) 
  
  if (!countries) return (<div>Loading...</div>)
  
  if (countries.length > 10) return (<div>Too many matches, specify another filter</div>)
  
  if (countries.length === 1) return (
    <div>
      <h1>{countries[0].name.common}</h1>
      <p>Capital {countries[0].capital}</p>
      <p>Area {countries[0].area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(countries[0].languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={countries[0].flags.png} alt={`Flag of ${countries[0].name.common}`} />
      {weather && (
        <div>
          <h2>Weather in {countries[0].capital}</h2>
          <p>Temperature {weather.current.temperature_2m} Celcius</p>
          <WeatherIcon code={weather.current.weather_code} />
          <p>Wind: {weather.current.wind_speed_10m} m/s</p>
        </div>
      )}
    </div>
  )
  
  return (
    <ul style={{ "listStyle": "none", "marginLeft": "-40px", "marginTop": "6px" }}>
      {countries && countries.map(country => (
        <li key={country.name.common}>
          {country.name.common}
          <button onClick={() => setFilter(country.name.common)}>Show</button>
        </li>
      ))}
    </ul>
  )
}

export default Countries