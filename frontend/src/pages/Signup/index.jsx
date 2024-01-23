import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TitleLogo from '../../components/TitleLogo';
import axios from 'axios';
import '../../styles/global.css';
import './style.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate(); 
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
  });

  const handleFirstnameChange = (e) => {
    const value = e.target.value;
    setFirstname(value);
    validateInput('first_name', value);
  };

  const handleLastnameChange = (e) => {
    const value = e.target.value;
    setLastname(value);
    validateInput('last_name', value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateInput('email', value);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    validateInput('username', value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validateInput('password', value);
  };

  const validateInput = async (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: 'Invalid email format' }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
        }
        break;
      case 'username':
        try {
          const response = await axios.post('http://localhost:8000/auth/check-username', {
            username: value,
          });
        } catch (error) {
          setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: 'Username already exists' }));
          console.error('Error checking username:', error);
        }
        break;
      case 'password':
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: 'Password must be 8 characters and contain numbers, small letters, and capital letters' }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
        }
        break;
      default:
        break;
    }
  };
  

  const handleSignUp = async () => {
    try {
      if (Object.values(errors).some((error) => error !== '')) {
        console.log('Validation failed. Please fix errors.');
        return;
      }

      const response = await axios.post('http://localhost:8000/auth/register', {
        first_name,
        last_name,
        email,
        username,
        password,
      });

      console.log('Successfully registered:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="signup-container">
      <TitleLogo />
      <h1 className="center signup-title">Sign Up</h1>
      <div className="signup-form">
        <Input
          name="first_name"
          type="text"
          value={first_name}
          onChange={handleFirstnameChange}
          placeholder="enter your first name"
        />
        {errors.first_name && <p className="error-message">{errors.first_name}</p>}
        <Input
          name="last_name"
          type="text"
          value={last_name}
          onChange={handleLastnameChange}
          placeholder="enter your last name"
        />
        {errors.last_name && <p className="error-message">{errors.last_name}</p>}
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="enter your email"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <Input
          name="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
        />
        {errors.username && <p className="error-message">{errors.username}</p>}
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
        <Button
          className="center"
          text="Sign Up"
          bgColor="#1261A9"
          onClick={handleSignUp}
        />
        <h3 className="no-acc">
          Already have an account? <Link to="/login" className="login">Login</Link>
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
