import { useState } from "react"

export default function PersonalInput({ handler }) {
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