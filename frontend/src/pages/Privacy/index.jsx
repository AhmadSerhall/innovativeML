import React from 'react';
import './style.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>

        <p>Last Updated: January 1, 2024</p>

        <p>
          Welcome to innovativeML! This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our platform. By using innovativeML, you agree to the terms outlined in this policy.
        </p>

        <h2>Information We Collect</h2>

        <p>
          We collect information that you voluntarily provide when using innovativeML, such as when you create an account, participate in interactive activities, or contact our support team. This information may include your name, email address, and any other details you choose to provide.
        </p>

        <h2>How We Use Your Information</h2>

        <p>
          We use the information collected to provide and improve innovativeML's services, personalize your experience, and communicate with you. Your data is handled with the utmost care and is not shared with third parties without your explicit consent.
        </p>

        <h2>Security</h2>

        <p>
          We implement security measures to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
        </p>

        <h2>Cookies</h2>

        <p>
          innovativeML may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect certain features of the platform.
        </p>

        {/* Add more sections based on your project's privacy practices */}

        {/* Example of adding a new section */}
        {/* <h2>Your New Section Title</h2>
        <p>
          Your new section content here.
        </p> */}
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
