import React from 'react';
import './style.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const LearnMore = () => {
  return (
    <>
      <NavBar />
      <div className="learn-more-container">
        <h1>Learn More</h1>

        <p>
          Welcome to innovativeML's "Learn More" page! Explore the exciting features that make our platform unique and learn how we're revolutionizing machine learning education.
        </p>

        <h2>Key Features</h2>

        <p>
          innovativeML is designed to make machine learning accessible and enjoyable for learners of all levels. Our key features include:
        </p>

        <ul>
          <li><strong>Visual Programming:</strong> Dive into machine learning concepts using visual programming with puzzle blocks. It's a fun and interactive way to understand complex algorithms.</li>
          <li><strong>Progress Tracking:</strong> Track your learning progress, earn badges, and unlock achievements as you complete challenges and master new skills.</li>
          <li><strong>Real-world Simulations:</strong> Apply your knowledge in real-world simulations, solving practical problems and gaining hands-on experience.</li>
        </ul>

        <h2>Learning Paths</h2>

        <p>
          Our learning paths are carefully crafted to guide you through a structured journey, whether you're a beginner or looking to advance your skills:
        </p>

        <ul>
          <li><strong>Foundations of Machine Learning:</strong> Start with the basics, understand fundamental concepts, and get hands-on experience with introductory challenges.</li>
          <li><strong>Advanced Topics:</strong> Dive deeper into advanced machine learning algorithms, optimization techniques, and model evaluation methods.</li>
          <li><strong>Applied Machine Learning:</strong> Explore practical applications, work on real-world projects, and collaborate with fellow learners.</li>
        </ul>

        <h2>Community Collaboration</h2>

        <p>
          At innovativeML, we believe in the power of community collaboration. Join a vibrant community where you can:
        </p>

        <ul>
          <li><strong>Connect with Peers:</strong> Engage with like-minded individuals, share insights, and discuss challenges.</li>
          <li><strong>Participate in Challenges:</strong> Take part in coding challenges, showcase your skills, and learn from others.</li>
          <li><strong>Celebrate Achievements:</strong> Share your successes, celebrate milestones, and inspire others on their learning journey.</li>
        </ul>

        {/* Add more sections based on your project's features and benefits */}

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

export default LearnMore;
