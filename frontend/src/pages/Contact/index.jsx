import React from 'react';
import './style.css';
import '../../styles/global.css';
import { FaEnvelope, FaHeadset, FaHandshake } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

import NavBar from '../../components/NavBar';
import contactimg from '../../assets/contact2a.jpg';
import Footer from '../../components/Footer';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className='contact-container flex'>
        <div className='contact-info flex column'>
          <h1 className='contact-title'>Contact Us</h1>
          <p className='contact-subtitle'>Feel free to reach out to us for any inquiries or support. We're here to help!</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <FaEnvelope className='contact-icon' />
              <h3>General Inquiries</h3>
              <p>info@innovativeML.com</p>
            </div>
            <div className='contact-detail'>
              <FaHeadset className='contact-icon' />
              <h3>Support</h3>
              <p>support@innovativeML.com</p>
            </div>
            <div className='contact-detail'>
              <FaHandshake className='contact-icon' />
              <h3>Business Partnerships</h3>
              <p>partnerships@innovativeML.com</p>
            </div>
          <div className='contact-detail'>
            <FaPhoneAlt className='contact-icon' />    
              <h3>Phone</h3>
              <p>+961 71 380 271</p>

          </div>
            
          </div>
        </div>
        <div className='contact-img-container'>
          <img src={contactimg} alt='contact img' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
