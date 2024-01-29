import { useState } from "react"

// I will relocate these 3 to their own components later
function PersonalInput({ handler }) {
  const [personal, setPersonal] = useState({name: '', email: '', number: ''})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPersonal({...personal, [name]: value})
  }

  return (
    <>
      <div className="input-wrapper">
        <h2>Personal Info</h2>
        <input type="text" name="name" id="name" placeholder="Full Name" value={personal.name} onChange={handleChange} />
        <input type="email" name="email" id="email" placeholder="Email" value={personal.email} onChange={handleChange} />
        <input type="number" name="number" id="number" placeholder="Phone Number" value={personal.number} onChange={handleChange}/>
        <button onClick={() => handler(personal.name, personal.number, personal.email)}>Submit</button>
      </div>
    </>
  )
}

function EducationalInput({ handler }) {
  const [education, setEducation] = useState({schoolName: '', fieldOfStudy: ''})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setEducation({...education, [name]: value})
  }

  return (
    <div className="input-wrapper">
      <h2>Education</h2>
      <input type="text" name="schoolName" id="schoolName" placeholder="School Name" value={education.schoolName} onChange={handleChange} />
      <input type="text" name="fieldOfStudy" id="fieldOfStudy" placeholder="Field of Study" value={education.fieldOfStudy} onChange={handleChange} />
      <button onClick={() => handler(education)}>Submit</button>
    </div>
  )
}

function ExperienceInput({ handler }) {
  const [work, setWork] = useState({companyName: '', position: '', desc: '', dateStarted: '', dateEnded: ''});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setWork({...work, [name]: value})
  }

  return (
    <div className="input-wrapper">
      <h2>Work Experience</h2>
      <input type="text" name="companyName" id="companyName" placeholder="Company Name" value={work.companyName} onChange={handleChange} />
      <input type="text" name="position" id="position" placeholder="Position" value={work.position} onChange={handleChange} />
      <textarea name="desc" id="desc" rows="5" placeholder="Description of Responsibilities" value={work.desc} onChange={handleChange}></textarea>
      <div className="date-wrapper">
        <label htmlFor="dateStarted">Start Date:</label>
        <input type="date" name="dateStarted" id="dateStarted" value={work.dateStarted} onChange={handleChange} />
      </div>
      <div className="date-wrapper">
        <label htmlFor="dateEnded">End Date:</label>
        <input type="date" name="dateEnded" id="dateEnded" value={work.dateEnded} onChange={handleChange} />
      </div>
      <button onClick={() => handler(work)}>Submit</button>
    </div>
  )
}



export default function InputForm({ infoHandler, workHandler, schoolHandler }) {

  return (
    <div className="input-form">
      <PersonalInput handler={infoHandler} />
      <EducationalInput handler={schoolHandler} />
      <ExperienceInput handler={workHandler} />
    </div>
  )
}