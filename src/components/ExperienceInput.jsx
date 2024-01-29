import { useState } from "react"

export default function ExperienceInput({ handler }) {
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