import { useState } from 'react'
import CV from './components/CV.jsx'
import InputForm from './components/InputForm.jsx'
import './App.css'

function App() {
  const [cvInfo, setCvInfo] = useState({personal: {}, schooling: [], experience: []})

  const handleInfoSubmit = (name, number, email) => {
    setCvInfo({...cvInfo, personal: {name: name, number: number, email: email} });
  };

  const handleWorkSubmit = (workObj) => {
    setCvInfo({...cvInfo, experience: [...cvInfo.experience, workObj]})
  }

  const handleSchoolSubmit = (schoolObj) => {
    setCvInfo({...cvInfo, schooling: [...cvInfo.schooling, schoolObj]})
  }

  return (
    <>
      <h1>CV Builder</h1>
      <div className="main-view">
        <InputForm infoHandler={handleInfoSubmit} workHandler={handleWorkSubmit} schoolHandler={handleSchoolSubmit} />
        <CV />
      </div>
    </>
  )
}

export default App
