import '../../styles/global.css'
import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TitleLogo from '../../components/TitleLogo';
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
        <Button text="Login" onClick={handleLogin} />
        <h3>Dont have an account? <Link to="/signup" className='signup'>Sign up</Link></h3>
      </form>
    </div>
  );
};

export default Login;
