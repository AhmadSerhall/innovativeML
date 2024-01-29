import React, { useState } from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Input = ({ name, type, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(type === 'password' ? false : true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-container">
      <input
        className="custom-input"
        name={name}
        type={showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      {type === 'password' && (
        <i
          className={`eye-icon ${showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}`}
          onClick={togglePasswordVisibility}
        ></i>
      )}
    </div>
  );
};

export default Input;
