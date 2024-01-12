import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TitleLogo from '../../components/TitleLogo';
import '../../styles/global.css'
import './style.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const[firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstnameChange=(e)=>{
    setFirstname(e.target.value)
  }
  const handleLastnameChange=(e)=>{
    setLastname(e.target.value)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    
    console.log('Signing up with:', firstname,lastname,username, password);
  };

  return (
    <div className="signup-container">
      <TitleLogo />
      <h1 className='center signup-title'>Sign Up</h1>
      <form className="signup-form">
      <Input
          name="firstname"
          type="text"
          value={firstname}
          onChange={handleFirstnameChange}
          placeholder="enter your first name"
          
        />
         <Input
          name="last name"
          type="text"
          value={lastname}
          onChange={handleLastnameChange}
          placeholder="enter your last name"
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
        <Button className="center" text="Sign Up" bgColor="#1261A9" onClick={handleSignUp} />
        <h3 className='no-acc'>Already have an account? <Link to="/login" className='login'>Login</Link></h3>
      </form>
    </div>
  );
};

export default SignUp;
