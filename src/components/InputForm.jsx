import { useState } from "react"

// I will relocate these 3 to their own components later
function PersonalInput({ handler }) {
  const [personal, setPersonal] = useState({name: '', email: '', number: ''})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPersonal({...personal, [name]: value})
  }

  const handleSubmit = () => {
    handler(personal.name, personal.number, personal.email)
  }

  return (
    <>
      <div className="input-wrapper">
        <h2>Personal Info</h2>
        <input type="text" name="name" id="name" placeholder="Full Name" value={personal.name} onChange={handleChange} />
        <input type="email" name="email" id="email" placeholder="Email" value={personal.email} onChange={handleChange} />
        <input type="number" name="number" id="number" placeholder="Phone Number" value={personal.number} onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

function EducationalInput() {
  return (
    <div className="input-wrapper">
      <h2>Education</h2>
      <input type="text" name="schoolName" id="schoolName" placeholder="School Name"/>
      <input type="text" name="fieldOfStudy" id="fieldOfStudy" placeholder="Field of Study"/>
    </div>
  )
}

function ExperienceInput() {
  return (
    <div className="input-wrapper">
      <h2>Work Experience</h2>
      <input type="text" name="companyName" id="companyName" placeholder="Company Name"/>
      <input type="text" name="position" id="position" placeholder="Position" />
      <textarea name="desc" id="desc" rows="5" placeholder="Description of Responsibilities"></textarea>
      <div className="date-wrapper">
        <label htmlFor="dateStarted">Start Date:</label>
        <input type="date" name="dateStarted" id="dateStarted" />
      </div>
      <div className="date-wrapper">
        <label htmlFor="dateEnded">End Date:</label>
        <input type="date" name="dateEnded" id="dateEnded" />
      </div>
    </div>
  )
}



export default function InputForm({ handler }) {

  return (
    <div className="input-form">
      <PersonalInput handler={handler} />
      <EducationalInput />
      <ExperienceInput />
    </div>
  )
}