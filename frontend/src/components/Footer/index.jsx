import {React,useEffect} from 'react'
import TitleLogo from '../TitleLogo'
import '@fortawesome/fontawesome-free/css/all.css';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'

const Footer = () => {
  const navigate=useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');

    navigate('/login');
  };

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem('token');

    // If not authenticated, redirect to signup
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <div className='footer-container full-width flex'>
        <div className='first-col flex column'>
            <div className='title-logo'><TitleLogo/></div>
            <div className='social-icons flex'>
            <Link to="https://www.facebook.com/" target='_blank'><i class="fa-brands fa-facebook"></i></Link>
            <Link to="https://www.twitter.com/" target='_blank'><i class="fa-brands fa-twitter"></i></Link>
            <Link to="https://www.slack.com/" target='_blank'><i class="fa-brands fa-slack"></i></Link>
            <Link to="https://www.linkedin.com/" target='_blank'><i class="fa-brands fa-linkedin"></i></Link>
            </div>
        </div>
        <div className='second-col flex column'>
            <ul>
                <li><Link to="/landing">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">FAQ's</Link></li>
            </ul>
        </div>
        <div className='third-col flex column'>
            <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/learn">Learn More</Link></li>
                <li><Link to="/news">Ai News</Link></li>
            </ul>
        </div>
        <div className='third-col flex column'>
            <ul>
                {/* <li><Link to="/watch">Watch</Link></li> */}
                <li><Link to="/support">Support Us</Link></li>
                {/* <li><Link to="/support">Support Us</Link></li> */}
                <li onClick={handleLogout} className='logout'>Log Out</li>
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
