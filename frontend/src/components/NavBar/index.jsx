import React from 'react'
import '../../styles/global.css'
import TitleLogo from '../TitleLogo'
import './style.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='nav-bar flex row full-width'>
      <TitleLogo/>
      <ul className='nav-links flex '>
        <li><Link to="/Landing">Home</Link></li>
        <li><Link to="/About">About us</Link></li>
        <li><Link to="/FAQ's">FAQ's</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
