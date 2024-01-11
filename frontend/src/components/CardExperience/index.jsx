import React from 'react';
import './style.css';

const CardExperience = ({ step, title, text,}) => {
 return (
    <div className="CardExperience">
        <div className="TopLeftLine"></div>
        <div className="CardExperience__step">{step}</div>
        <h3 className="CardExperience__title">{title}</h3>
        <p className="CardExperience__text">{text}</p>
    </div>
 );
};

export default CardExperience;