import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.css';
import './style.css'; 
import TitleLogo from '../TitleLogo';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navLinksRef = useRef(null);//to be able to click anywhere to close the burger
  const burgerIconRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeLinks = () => {
    setShowLinks(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    closeLinks();
  };

  const handleClickOutside = (event) => {
    if (
      (navLinksRef.current && !navLinksRef.current.contains(event.target)) &&
      (burgerIconRef.current && !burgerIconRef.current.contains(event.target))
    ) {
      closeLinks();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='nav-bar'>
      <TitleLogo />
      {(windowWidth <= 768) && (
        <div ref={burgerIconRef} className="burger-icon" onClick={toggleLinks}>
          &#9776;
        </div>
      )}
      <ul ref={navLinksRef} className={`nav-links ${showLinks ? 'show' : ''}`}>
        <li><Link to="/landing">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
