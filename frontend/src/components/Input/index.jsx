import React from 'react';
import './style.css'; 
const Input = ({ name, placeholder, type, value, onChange}) => {
  return (
    <input
      className='custom-input'
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
