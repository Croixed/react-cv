import { useState } from 'react'
import CV from './components/CV.jsx'
import InputForm from './components/InputForm.jsx'
import './App.css'

function App() {
  const [cvInfo, setCvInfo] = useState({personal: {}, schooling: [], experience: []})

  const handleInfoSubmit = (name, number, email) => {
    setCvInfo({...cvInfo, personal: {name: name, number: number, email: email} });
  };

  return (
    <>
      <h1>CV Builder</h1>
      <div className="main-view">
        <InputForm handler={handleInfoSubmit} />
        <CV />
      </div>
    </>
  )
}

export default App
