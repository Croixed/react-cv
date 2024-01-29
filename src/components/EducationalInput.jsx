import { useState } from "react"

export default function EducationalInput({ handler }) {
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