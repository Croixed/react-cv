import { useState } from "react"
import ExperienceInput from "./ExperienceInput.jsx"
import PersonalInput from "./PersonalInput.jsx"
import EducationalInput from "./EducationalInput.jsx"

export default function InputForm({ infoHandler, workHandler, schoolHandler }) {
  return (
    <div className="input-form">
      <PersonalInput handler={infoHandler} />
      <EducationalInput handler={schoolHandler} />
      <ExperienceInput handler={workHandler} />
    </div>
  )
}