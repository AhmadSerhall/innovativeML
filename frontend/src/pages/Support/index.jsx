import React from 'react';
import './style.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Support = () => {
  return (
    <>
      <NavBar />
      <div className="support-container">
        <h1>Support</h1>

        <p>
          We're here to assist you! Whether you have questions, need help with a technical issue, or want to provide feedback, our support team is ready to assist you. Explore the support options below or reach out to us directly.
        </p>

        <h2>Frequently Asked Questions (FAQs)</h2>
        <br/>
        <div className="faq-question">
          <h3>How do I get started with innovativeML?</h3>
          <p>
            Getting started with innovativeML is easy! Simply create an account, explore our learning paths, and start solving challenges using our visual programming interface.
          </p>
        </div>

        <div className="faq-question">
          <h3>Is there a community forum to connect with other learners?</h3>
          <p>
            Yes, we have a vibrant community forum where you can connect with other learners, participate in discussions, and share your experiences. Join the community and be part of the learning journey together!
          </p>
        </div>

        <div className="faq-question">
          <h3>How can I reset my password?</h3>
          <p>
            If you need to reset your password, you can do so by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your email to reset your password securely.
          </p>
        </div>
        <h2>Contact Us</h2>

        <p>
          If you can't find the answers you're looking for in our FAQs, feel free to contact us directly. We're here to help!
        </p>

        <p>
          Email: support@innovativeML.com
        </p>

        <p>
          Phone: +1 (123) 456-6869
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Support;
