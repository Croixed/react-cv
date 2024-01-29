import { useState } from 'react'

export default function CV({ cvInfo }) {

  return (
    <div className="cv-wrapper">
      {/* <h1>{cvInfo.personal.name}</h1> */}
      <h1>{cvInfo.personal.name || 'No Name'}</h1>
      <p>{`${cvInfo.personal.email || 'No Email'} ${cvInfo.personal.number || 'No Phone Number'}`}</p>
    </div>
  )
}