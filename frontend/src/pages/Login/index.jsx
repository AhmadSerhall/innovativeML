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

  
  const responseGoogle = async (response) => {
    console.log('Google Sign-In Response:', response);
    try {
      if (response && response.profileObj) {
        const { email, googleId } = response.profileObj;
        const backendResponse = await axios.get(`http://localhost:8000/auth/google/callback?email=${email}&googleId=${googleId}`);
        console.log('Backend Response:', backendResponse.data);
        if (backendResponse.data.success) {
          const token = backendResponse.data.token;
          localStorage.setItem('token', token);
          navigate('/landing');
        } else {
          console.error('Google authentication failed on the backend');
        }
      } else {
        console.error('Google Sign-In Response structure:', response);
      }
    } catch (error) {
      console.error('Error during Google authentication on the backend:', error);
    }
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
        <Link to="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=58934895291-0in324g2bkdgnq7etl0rds0bspgq6rc6.apps.googleusercontent.com&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow"><Button text="login with google" bgColor="#1261A9" onClick={responseGoogle} /></Link>
        {/* <GoogleLogin
          clientId="58934895291-0in324g2bkdgnq7etl0rds0bspgq6rc6.apps.googleusercontent.com"
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
        /> */}
        </div>
        <h3>
          Don't have an account? <Link to="/signup" className='signup'>Sign up</Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;
