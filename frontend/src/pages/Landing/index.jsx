import React from 'react'
import NavBar from '../../components/NavBar'
import '../../styles/global.css'
import Button from '../../components/Button'
import heroImage from '../../assets/image6.webp'
import bannerImage from '../../assets/image2.webp'
import './style.css'
const Landing = () => {
  return (
    <div>
      <NavBar/>
      <div className='hero-container flex row'>
        <div className='left-section flex column'>
            <h1>The best way to learn</h1>         
            <h1>Machine Learning</h1>
            <div className='button-container flex row'>
                <Button text="Train Machine" textColor="white" onClick={console.log("sup")}/>
                <Button text="Learn by Playing" textColor="black" bgColor="#FFD700"/>
            </div>          
        </div>
        <div className='img-container'>
            <img src={heroImage} alt="img"></img>
        </div>
      </div>
      <div className='banner full-width flex '>
        <div className='banner-img-container'>
            <img src={bannerImage} alt="img"></img>
        </div>
        <div className='banner-txt-btn flex column'>
        <h3>Learn machine learning at your own pace with guided,bitesized education thats effective and enjoyable</h3>
        <Button text="get started for free" bgColor="#FFD700" textColor={"black"}/>
        </div>
      </div>

      
    </div>
  )
}

export default Landing
