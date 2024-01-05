import React from 'react'
import NavBar from '../../components/NavBar'
import '../../styles/global.css'
import Button from '../../components/Button'
import heroImage from '../../assets/image4.jpg'
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
                <Button text="Train Machine" textColor="white" onClick={console.log("sup")}/>
                <Button text="Learn by Playing" textColor="black" bgColor="#FFD700"/>
            </div>          
        </div>
        <div className='img-container'>
            <img src={heroImage} alt="img"></img>
        </div>

      </div>
      
    </div>
  )
}

export default Landing