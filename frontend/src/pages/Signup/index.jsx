import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TitleLogo from '../../components/TitleLogo';
import '../../styles/global.css';
import './style.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate(); 
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
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

  const handleSignUp = () => {
    // Assuming you have a function to make the API call for user registration
    // Replace 'your_backend_url' with the actual URL of your backend
    
    fetch('http://localhost:8000/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Successfully registered:', data);
        // Redirect to the login page
        navigate.push('/login');
      })
      .catch(error => {
        console.error('Error during registration:', error);
        // Handle the error as needed
      });
  };

  return (
    <div className="signup-container">
      <TitleLogo />
      <h1 className="center signup-title">Sign Up</h1>
      <form className="signup-form">
        <Input
          name="first_name"
          type="text"
          value={firstname}
          onChange={handleFirstnameChange}
          placeholder="enter your first name"
        />
        <Input
          name="last_name"
          type="text"
          value={lastname}
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
        />
        <h3 className="no-acc">
          Already have an account? <Link to="/login" className="login">Login</Link>
        </h3>
      </form>
    </div>
  );
};

export default SignUp;
