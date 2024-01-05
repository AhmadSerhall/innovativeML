import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TitleLogo from '../../components/TitleLogo';
import { GoogleLogin } from 'react-google-login';
import './style.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('Logging in with:', username, password);
  };

  const responseGoogle = (response) => {
    console.log('Google Sign-In Response:', response);
  };

  return (
    <div className="login-container">
      <TitleLogo />
      <form className="login-form flex column">
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
        <div className='button-container flex row'>
        <Button text="Login" onClick={handleLogin} />
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
      </form>
    </div>
  );
};

export default Login;
