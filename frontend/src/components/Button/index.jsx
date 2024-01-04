import React from 'react';
import './style.css';

const Button = ({ text, textColor, bgColor, onClick }) => {
  const buttonStyles = {
    color: textColor || '#fff',
    backgroundColor: bgColor || '#3498db',
  };

  return (
    <button className='custom-button' style={buttonStyles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
