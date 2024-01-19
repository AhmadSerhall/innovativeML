import React from 'react';
import './style.css';

const Button = ({ text, textColor, bgColor, onClick, className }) => {
  const buttonStyles = {
    color: textColor || '#fff',
    backgroundColor: bgColor || '#3498db',
  };

  const handleClick = () => {
    onClick(text);
  };

  return (
    <button className={`custom-button ${className}`} style={buttonStyles} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
