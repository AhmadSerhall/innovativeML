import React, { useEffect } from 'react';
import './style.css';

const AboutUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxSections = document.querySelectorAll('.parallax-section');
      const scrollPosition = window.pageYOffset;

      parallaxSections.forEach((section, index) => {
        const speed = 0.5 * (index + 1);
        const yPos = -scrollPosition * speed;

        section.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="parallax-container">
        <div className="parallax-section section1">
          <h1>Welcome to Our Story</h1>
        </div>
        <div className="parallax-section section2">
          <p>We are passionate about...</p>
        </div>
      </div>

      <div className="content">
        <h2>About Our Team</h2>
        <p>some texxtt fhfheoff</p>
        
      </div>
    </div>
  );
};

export default AboutUs;
