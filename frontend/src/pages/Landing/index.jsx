import React, { useEffect } from 'react';
import {Link } from 'react-router-dom';
// import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../styles/animate.css';
import NavBar from '../../components/NavBar';
import '../../styles/global.css';
import Button from '../../components/Button';
import heroImage from '../../assets/img9.png';
import bannerImage from '../../assets/image2.webp';
import mlMastery from '../../assets/image5.png';
import me from '../../assets/me2.jpg';
import './style.css';
import Footer from '../../components/Footer';


const Landing = () => {
  return (
    <div>
      <NavBar />
      <div className='hero-container flex row'>
        <div className='left-section flex column'>
          <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce>
            <h1>The best way to learn</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce>
            <h1>Machine Learning</h1>
          </ScrollAnimation>
          <div className='button-container flex row'>
            {/* <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce>   
              <Button text='Train Machine' textColor='white' onClick={() => console.log('sup')} />      
            </ScrollAnimation> */}
            <Link to="/puzzle">
            <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce>         
              <Button text='Learn by Playing' textColor='black' bgColor='#FFD700' onClick={()=>console.log("button clicked")} /> 
            </ScrollAnimation>
            </Link>
          </div>
        </div>
        <div className='img-container'>
          <ScrollAnimation animateIn='fadeInRight' duration={1} animateOnce>
            <img src={heroImage} alt='img' />
          </ScrollAnimation>
        </div>
      </div>
      <div className='banner full-width flex'>
        <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce>
          <div className='banner-img-container'>
            <img src={bannerImage} alt='img' />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce>
          <div className='banner-txt-btn flex column'>
            <h3>Learn machine learning at your own pace with guided, bitesized education that's effective and enjoyable</h3>
            <Link to="/learn"><Button text='Learn More' bgColor='#FFD700' textColor={'black'} /></Link>
          </div>
        </ScrollAnimation>
      </div>
      <div className='ml-mastery flex'>
      <div className='ml-text flex column center'>
          <ScrollAnimation animateIn='fadeInRight' duration={1} animateOnce>
            <h2>Your Gateway to Machine Learning Mastery</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' duration={1} animateOnce>
            <h4>
              Uncover the intricacies of machine learning through guided learning that demystifies complex concepts, making
              the experience both convenient and engaging. Explore the Future of Intelligence Now!
            </h4>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' duration={1} animateOnce>
            <Link to='ml-maestro' smooth={true} duration={1000}>
              <Button text='More about us' />
            </Link>
          </ScrollAnimation>
        </div>
        <div className='ml-img-container'>
          <ScrollAnimation animateIn='fadeInLeft' duration={1} animateOnce>
            <img src={mlMastery} alt='img' />
          </ScrollAnimation>
        </div>
        
      </div>
      <div className='ml-maestro flex column'>
        <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce>
          <h2>Solo ML Maestro</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce>
          <h4>
            In the solo venture of growth, I guide the evolution of machine learning education. Crafting strategic pathways
            independently, I focus on propelling impactful strides towards success in our educational journey.
          </h4>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce>
          <div className='profile-container circular'>
            <img src={me} alt='me' />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce>
          <h2>Ahmad Serhal</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce>
          <h4>Founder</h4>
        </ScrollAnimation>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
