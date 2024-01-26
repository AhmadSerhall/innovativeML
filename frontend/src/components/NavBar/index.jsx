import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import '../../styles/global.css';
import './style.css'; 
import TitleLogo from '../TitleLogo';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navLinksRef = useRef(null); // to be able to click anywhere to close the burger
  const burgerIconRef = useRef(null);
  const location = useLocation();
  const navigate=useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token');

    navigate('/login');
  };

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
        <li className={location.pathname === '/landing' ? 'active' : ''}><Link to="/landing">Home</Link></li>
        <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">About Us</Link></li>
        <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact Us</Link></li>
        <li className='logout' onClick={handleLogout}>Log Out </li>
      </ul>
    </div>
  );
};

export default NavBar;
