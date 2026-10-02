import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import axios from 'axios'
import App from './App.jsx'

/*
const promise = axios.get('http://localhost:3001/notes')
console.log(promise)
promise.then(response => {
  console.log(response)
})
*/

/*
axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data

    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App notesData={notes} />
      </StrictMode>,
    )
  })
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)