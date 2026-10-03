import axios from 'axios'

const getWeather = (lat, long) => {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  // const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m`
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m,weather_code`
  return axios.get(url).then(response => response.data)
}

export default { getWeather }
