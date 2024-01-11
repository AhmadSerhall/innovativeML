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
        <CardExperience step={"step 02"} title={"Discovering InnovativeML"} text={"Embark on a journey of exploration with InnovativeML that makes learning machine learning a captivating adventure. Uncover the world of code creation through engaging puzzles, where every challenge unlocks the secrets of machine learning. Our app seamlessly combines education and entertainment, transforming complex concepts into interactive, bite-sized puzzles. Discover the joy of mastering machine learning as you code your way through a fun and enlightening experience, paving the way for a future filled with technological prowess."} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />
        <CardExperience step={"step_1"} title={"title1"} text={"this is the first text"} />

      </div>
    </div>
  )
}

export default Experience
