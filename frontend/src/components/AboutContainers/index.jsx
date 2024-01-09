import React from 'react'
import './style.css'
const AboutContainers = ({title,text}) => {
  return (
    <div className='text-container'>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default AboutContainers
