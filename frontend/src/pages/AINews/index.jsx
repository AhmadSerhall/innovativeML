import React from 'react';
import './style.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const AiNews = () => {
  return (
    <>
      <NavBar />
      <div className="ai-news-container">
        <h1>AI News</h1>

        <p>
          Stay up-to-date with the latest developments, trends, and news in the world of Artificial Intelligence and machine learning. Explore exciting breakthroughs, research findings, and innovations that shape the future of technology.
        </p>

        <div className="news-article">
          <h2>Advancements in Neural Network Architectures</h2>
          <p className="news-date">Published on March 5, 2024</p>
          <p>
            Researchers unveil new neural network architectures that promise to revolutionize deep learning. These advancements open doors to enhanced model performance and efficiency in various applications.
          </p>
        </div>

        <div className="news-article">
          <h2>The Rise of Explainable AI</h2>
          <p className="news-date">Published on March 1, 2024</p>
          <p>
            Explainable AI gains prominence as the demand for transparency and interpretability in machine learning models grows. Explore how this shift is impacting industries and fostering trust in AI systems.
          </p>
        </div>

        <div className="news-article">
          <h2>Machine Learning in Healthcare: Recent Breakthroughs</h2>
          <p className="news-date">Published on February 25, 2024</p>
          <p>
            Discover the latest breakthroughs in applying machine learning to healthcare. From early disease detection to personalized treatment plans, explore the transformative impact of AI in the medical field.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AiNews;
