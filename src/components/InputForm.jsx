import { useState } from "react"

// I will relocate these 3 to their own components later
function PersonalInput() {

  return (
    <>
      <div className="input-wrapper">
        <h2>Personal Info</h2>
        <input type="text" name="name" id="name" placeholder="Full Name"/>
        <input type="email" name="email" id="email" placeholder="Email"/>
        <input type="number" name="number" id="number" placeholder="Phone Number"/>
      </div>
    </>
  )
}

function EducationalInput() {
  return (
    <div className="input-wrapper">
      <h2>Education</h2>
      <input type="text" name="schoolName" id="schoolName" placeHolder="School Name"/>
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
      <input type="desc" name="desc" id="desc" placeholder="Description of Responsibilities" />
      <input type="date" name="dateStarted" id="dateStarted" />
      <input type="date" name="dateEnded" id="dateEnded" />
    </div>
  )
}



export default function InputForm() {

  return (
    <div className="input-form">
      <PersonalInput />
      <EducationalInput />
      <ExperienceInput />
    </div>
  )
}