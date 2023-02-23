import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './Support.css'
import Supportshield from '../pictures/shieldsu.png'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export const Support = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sc4sxtk', 'template_i7les22', form.current, 'lgtA6tUbE2Jf3uUV8')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (<>
  <br/><br/><br/><br/>
  <h1 className='prd text-center'>Support</h1>
  <h3 className='prdtit text-center'>Our dedicated support team is available 24/7 Support !</h3>
  <span className='supicon d-flex justify-content-center aling-items-center'><SupportAgentIcon className='mtuiicon'/><SupportAgentIcon className='mtuiicon'/><SupportAgentIcon className='mtuiicon'/></span>
  <div className='contraint' data-aos='fade'>
    <div className='row' id='sect'>
        <div className='col-lg-6 col-md-6 col-sm-12' id='imgs'>
            <img src={Supportshield} alt='cnt'/>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12' id='formsup'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <AccountCircleOutlinedIcon  className='formicon'/>
            <label>Email</label>
            <input type="email" name="user_email" />
            <EmailOutlinedIcon   className='formicon'/>
            <label>Message</label>
            <textarea name="message" />
            <MessageOutlinedIcon  className='formiconmess'/>
            <button type='submit'>
                Send
            <SendOutlinedIcon className='iconbtn'/>
            </button>
       </form>
       </div>
    </div>
  </div>
</>
  );
};