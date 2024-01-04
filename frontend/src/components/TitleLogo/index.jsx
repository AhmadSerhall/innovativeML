import React from 'react'
import '../../styles/global.css'
import './style.css'
import InnovativeMLLogo from '../../assets/InnovativeMLLogo.png'
const TitleLogo = () => {
  return (
    <div className='title-logo flex row'>
        <div className='img-container'>
            <img src={InnovativeMLLogo} alt='logo'/>
        </div>
      <h1>InnovativeML</h1>
    </div>
  )
}

export default TitleLogo
