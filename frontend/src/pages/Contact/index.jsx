import React from 'react'
import './style.css'
import '../../styles/global.css'
import '../../components/NavBar'
import NavBar from '../../components/NavBar'
const Contact = () => {
  return (
    <div>
      <NavBar/>
      <div className='contact-container page flex'>
        <div className='contact-info'></div>
      </div>
    </div>
  )
}

export default Contact
