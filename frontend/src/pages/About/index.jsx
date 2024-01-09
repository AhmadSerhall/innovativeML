import React from 'react'
import './style.css'
import NavBar from '../../components/NavBar'
import AboutContainers from '../../components/AboutContainers'
import '../../styles/global.css'
import aboutpic from '../../assets/aboutus hero.jpg'
import aboutpic2 from '../../assets/aboutus hero2.webp'
const About = () => {
  return (
    <div>
      <NavBar/>
      <div className='aboutus-hero flex'>
        <div className='aboutus-text flex column'>
          <h2>Our Vision</h2>
          <p>At InnovativeML, we believe in transforming the landscape of learning through the fusion of cutting-edge technology and education. Our vision is to empower individuals to master the art of coding and machine learning in an interactive, engaging, and innovative way.</p>
          <div className='aboutus-containers flex'>
          <AboutContainers title={"ho"} text={"supp supp"}/>
          <AboutContainers/>
          <AboutContainers/>
        </div>
        </div>
        <div className='aboutus-img-container'>
          <img src={aboutpic2} alt="about pic"></img>
        </div>
        

      </div>
    </div>
  )
}

export default About
