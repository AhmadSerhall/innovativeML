import React ,{useState}from 'react'
import './style.css'
import '../../styles/global.css'
import '../../components/NavBar'
import NavBar from '../../components/NavBar'
import Input from '../../components/Input'
import Button from '../../components/Button'
const Contact = () => {

  const [username,setUsername]=useState('');
  const [message,setMessage]=useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  
  const SendMessage=()=>{
    console.log("sending message")
  }

  return (
    <div>
      <NavBar/>
      <div className='contact-container page flex'>
        <div className='contact-info flex column'>
          <Input name={"username"} value={"username"} placeholder={"Enter Your Username"} onChange={handleUsernameChange} />
          <Input name={"message"} value={"message"} placeholder={"Enter Your Message"} onChange={handleMessageChange} />
          {/* <Button text={"Send Message"} bgColor={"#1261A9"} onClick={SendMessage} /> */}
          </div>
          <div className='contact-img-container'>

          </div>
      </div>
    </div>
  )
}

export default Contact
