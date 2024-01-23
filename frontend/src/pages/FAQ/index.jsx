import React from 'react';
import './style.css';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
const FAQ = () => {
  return (
    <>
    <NavBar/>
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-question">
        <h3>Q: What is innovativeML?</h3>
        <p>
          A: innovativeML is a platform that teaches machine learning through a visual and interactive approach using puzzle blocks.
        </p>
      </div>

      <div className="faq-question">
        <h3>Q: How do I get started?</h3>
        <p>
          A: To get started, visit our homepage and follow the step-by-step learning path. Create an account to track your progress and access additional features.
        </p>
      </div>

      <div className="faq-question">
        <h3>Q: Is innovativeML suitable for beginners?</h3>
        <p>
          A: Yes, innovativeML is designed for both beginners and those with some machine learning experience. The interactive nature of the platform makes learning ML concepts accessible to everyone.
        </p>
      </div>

      <div className="faq-question">
        <h3>Q: Are there any prerequisites?</h3>
        <p>
          A: No specific prerequisites are required. However, having a basic understanding of programming concepts can be helpful.
        </p>
      </div>

      <div className="faq-question">
        <h3>Q: Can I access innovativeML on mobile devices?</h3>
        <p>
          A: Yes, innovativeML is designed to be responsive, allowing you to access the platform on various devices, including mobile phones and tablets.
        </p>
      </div>

      <div className="faq-question">
        <h3>Q: How can I track my progress?</h3>
        <p>
          A: Once you create an account and log in, you'll have access to a personalized dashboard where you can track your learning progress and achievements.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FAQ;
