import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'


function About() {
    const msg = useContext(UserContext)


  return (
    <div>
      <h1>{msg}</h1>

    </div>
  )
}

export default About
