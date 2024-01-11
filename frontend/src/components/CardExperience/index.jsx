import React from 'react';
import './style.css';

const CardExperience = ({ step, title, text }) => {
  return (
    <div className="CardExperience">
      <div className="TopLeftLine"></div>
      <div className="StepContainer">
        <div className="CardExperience__step">{step}</div>
      </div>
      <div className="CardContent">
        <h3 className="CardExperience__title">{title}</h3>
        <p className="CardExperience__text">{text}</p>
      </div>
    </div>
  );
};

export default CardExperience;
