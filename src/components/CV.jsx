import { useState } from 'react'

export default function CV({ cvInfo }) {

  return (
    <div className="cv-wrapper">
      <div className="header">
        <h1>{cvInfo.personal.name || 'No Name'}</h1>
        <p>{`${cvInfo.personal.email || 'No Email'} ${cvInfo.personal.number || 'No Phone Number'}`}</p>
      </div>
      <div className="education">

        <h1>education</h1>
        {cvInfo.schooling.map((school) => {
          return (
            <div className="education-card">
              <h3>{school.schoolName}</h3>
              <p>{school.fieldOfStudy}</p>
            </div>
          )
        })}
      </div>

        <h1>Work Experience</h1>
        {cvInfo.experience.map((job) => {
          return (
            <div className="work-card">
              <h3>{job.companyName}</h3>
              <p>{job.position}</p>
              <p>{job.desc}</p>
              <p>{`${job.dateStarted} to ${job.dateEnded}`}</p>
            </div>
          )
        })}
    </div>
  )
}