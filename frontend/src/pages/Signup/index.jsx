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

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/register', {
        first_name,
        last_name,
        email,
        username,
        password,
      });
  
      console.log('Successfully registered:', response.data);
      // Redirect to the login page
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      console.error(error.message);
      console.error('Error response:', error.response);
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Server error message:', error.response.data.message);
      }
    }
  };
  
  

  return (
    <div className="signup-container">
      <TitleLogo />
      <h1 className="center signup-title">Sign Up</h1>
      <form className="signup-form">
        <Input
          name="first_name"
          type="text"
          value={first_name}
          onChange={handleFirstnameChange}
          placeholder="enter your first name"
        />
        <Input
          name="last_name"
          type="text"
          value={last_name}
          onChange={handleLastnameChange}
          placeholder="enter your last name"
        />
        <Input
          name="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="enter your email"
        />
        <Input
          name="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        <Button
          className="center"
          text="Sign Up"
          bgColor="#1261A9"
          onClick={(e) => handleSignUp(e)}
          type="submit"
        />
        <h3 className="no-acc">
          Already have an account? <Link to="/login" className="login">Login</Link>
        </h3>
      </form>
    </div>
  );
};

export default SignUp;
