import React from 'react'
import './style.css'
import NavBar from '../../components/NavBar'
import '../../styles/global.css'
const About = () => {
  return (
    <div>
      <NavBar/>
      <div className='aboutus-hero flex'>
        <div className='aboutus-text flex column'>
          <h1>Our Vision</h1>
          <p>At InnovativeML, we believe in transforming the landscape of learning through the fusion of cutting-edge technology and education. Our vision is to empower individuals to master the art of coding and machine learning in an interactive, engaging, and innovative way.</p>
        </div>
        <div className='aboutus-containers flex'>
          
        </div>

      </div>
    </div>
  )
}

export default About
