import { useState } from 'react'
import CV from './components/CV.jsx'
import InputForm from './components/InputForm.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CV Builder</h1>

      <InputForm />
      <CV />
    </>
  )
}

export default App
