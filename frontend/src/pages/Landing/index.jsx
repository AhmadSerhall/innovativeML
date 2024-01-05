import React from 'react'
import NavBar from '../../components/NavBar'
import '../../styles/global.css'
import Button from '../../components/Button'
const Landing = () => {
  return (
    <div>
      <NavBar/>
      <div className='hero-container flex row'>
        <div className='left-section flex column'>
            <h1>The best way to learn</h1>
            <br/>
            <h1>machine learning</h1>
            <div className='button-container flex row'>
                <Button text="Train Machine" textColor="white"/>
                <Button/>
            </div>
        </div>

      </div>
      
    </div>
  )
}

export default Landing
