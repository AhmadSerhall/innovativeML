import React,{useEffect} from 'react'
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import NavBar from '../../components/NavBar'
import '../../styles/global.css'
import Button from '../../components/Button'
import heroImage from '../../assets/image6.webp'
import bannerImage from '../../assets/image2.webp'
import mlMastery from '../../assets/image5.png'
import me from '../../assets/me.jpeg'
import './style.css'
import Footer from '../../components/Footer'
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
      <div className='ml-mastery flex'>
        <div className='ml-img-container'>
        <img src={mlMastery} alt="img"/>
        </div>
        <div className='ml-text flex column center'>
            <h2>Your Gateaway to Machine Learning Mastery</h2>
            <h4>Uncover the intricacies of machine learning through guided learning that demystifies complex concepts, making the experience both convenient and engaging.
               Explore the Future of Intelligence Now! </h4>
               <Button text="More about us"/>
        </div>
      </div>
      <div className='ml-maestro flex column'>
        <h2>
            Solo Ml Maestro
        </h2>
        <h4>
        In the solo venture of growth, I guide the evolution of machine learning education. Crafting strategic pathways independently, I focus on propelling impactful strides towards success in our educational journey.
        </h4>
        <div className='profile-container circular'>
            <img src={me} alt="me"/>
        </div>
        <h2>Ahmad Serhal</h2>
        <h4>Founder</h4>
      </div>
      <Footer/>

      
    </div>
  )
}

export default Landing
