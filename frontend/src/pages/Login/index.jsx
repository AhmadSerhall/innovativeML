import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TitleLogo from '../../components/TitleLogo';
import { GoogleLogin } from 'react-google-login';
import './style.css';
import { Link } from 'react-router-dom';
import '../../styles/global.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const navigate=useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    setLoginError(null);
    axios.post('http://localhost:8000/auth/login', {
      username,
      password,
    })
      .then(response => {
        console.log('Login successful:', response.data);
        //jwt token
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/landing')
      })
      .catch(error => {
        console.error('Error during login:', error);
        setLoginError('Username or password is incorrect');
      });
  };

  const responseGoogle = (response) => {
    console.log('Google Sign-In Response:', response);
  };

  return (
    <div className="login-container">
      <TitleLogo />
      <h1 className='center login-title'>Login</h1>
      <div className="login-form flex column">
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
         {loginError && <p className="error-text">{loginError}</p>}
        <div className='button-container flex row'>
        <Button text="Login" bgColor="#1261A9" onClick={handleLogin} />
        <GoogleLogin
          clientId="your-google-client-id"
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          render={(renderProps) => (
            <button
              className="google-signin-button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sign in with Google
            </button>
          )}
        />
        </div>
        <h3>
          Don't have an account? <Link to="/signup" className='signup'>Sign up</Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;
