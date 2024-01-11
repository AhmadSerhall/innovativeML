import React from 'react'
import './style.css'
import CardExperience from '../CardExperience'
const Experience = () => {
  return (
    <div className='experience-container flex column'>
      <div className='experience-text'>
        <h2>Navigating the InnovativeML experience</h2>
        <p>At InnovativeML we created a eye catching user friendly interface that allows Users to either Experience machine learning , or learn coding throughtout a new experience</p>
      </div>
      <div className='experience-card-container flex'>
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />

      </div>
    </div>
  )
}

export default Experience
