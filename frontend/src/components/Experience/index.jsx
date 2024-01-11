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
        <CardExperience step={"Step 01"} title={"Admiring AI"} text={"Discovering machine learning and artificial intelligence (AI) opens the door to a new era of technological wonders. Machine learning, a subset of AI, enables computers to learn from experience without explicit programming. It's an exploration of algorithms that decipher patterns, make predictions, and redefine how we interact with the digital world. Delving into machine learning unveils the potential to revolutionize industries and shape the future of intelligent technologies."} />
        <CardExperience step={"step 02"} title={"Discovering InnovativeML"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />

      </div>
    </div>
  )
}

export default Experience
