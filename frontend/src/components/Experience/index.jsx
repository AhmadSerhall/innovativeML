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
        <CardExperience step={"Step 01"} title={"Admiring AI"} text={"Dive into the vast world of machine learning. Discover the potential it holds for transforming your understanding of technology."} />
        <CardExperience step={"Step 02"} title={"Engage with Interactive Puzzles"} text={"Immerse yourself in hands-on learning. Solve interactive puzzles that bring machine learning concepts to life, making coding a joyful experience."} />
        <CardExperience step={"Step 03"} title={" Guided Learning Paths"} text={"Follow carefully curated learning paths that guide you through the intricacies of machine learning, ensuring a structured and effective educational journey."} />
        <CardExperience step={"Step 04"} title={" Master Complex Concepts"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />

      </div>
    </div>
  )
}

export default Experience
