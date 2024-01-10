import React from 'react'
import './style.css'
import '../../styles/global.css'
import '@fortawesome/fontawesome-free/css/all.css';//font-awesome
const Vision = () => {
  return (
    <div className='vision-container flex'>
        <div className='values-text flex column center'>
            <h2>Our Values</h2>
            <p>My story is one of continous growth and evolution i started alone with big dreams determmined to create a  platform that transcended the ordinary</p>
        </div>
        <div className="grid">
            <div className="card">
                <h3><i class="fa-solid fa-star"></i>Trust</h3>
                <p>Trust is the cornerstone of every successful real estate transaction.</p>
            </div>
            <div class="card">
                <h3><i class="fa-solid fa-people-group"></i>Client-Centric</h3>
                <p>Your dreams and needs are at the center of our universe. We listen, understand.</p>
            </div>
            <div class="card">
                <h3><i class="fa-solid fa-graduation-cap"></i>Excellence</h3>
                <p>We set the bar high for ourselves. From the properties we list to the services we provide.</p>
            </div>
            <div class="card">
                <h3><i class="fa-solid fa-circle-check"></i>Our Commitment</h3>
                <p>We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
            </div>
        </div>
    </div>
  )
}

export default Vision
