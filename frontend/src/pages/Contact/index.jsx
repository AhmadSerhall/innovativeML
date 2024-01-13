import React ,{useState}from 'react'
import './style.css'
import '../../styles/global.css'
import '../../components/NavBar'
import NavBar from '../../components/NavBar'
import Input from '../../components/Input'
const Contact = () => {

  const [username,setUsername]=useState('');
  const [message,setMessage]=useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <NavBar/>
      <div className='contact-container page flex'>
        <div className='contact-info flex column'></div>
          <Input name={"username"} value={"username"} placeholder={"enter your username"} onChange={handleUsernameChange} />
          <Input name={"message"} value={"message"} placeholder={"enter your message"} onChange={handleMessageChange} />
      </div>
    </div>
  )
}

export default Contact
