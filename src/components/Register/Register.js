import React, { useState } from 'react'
import './Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import Desg from '../pictures/sh4.png';
import Desg2 from '../pictures/sh.png';

const Register = () => {


  const isIpademax = useMediaQuery({ maxWidth: 1000,minWidth:0})
  const isDesktop = useMediaQuery({ maxWidth: 3000 ,minWidth:1000})
  const isBtn1 = useMediaQuery({ maxWidth: 3000 ,minWidth:1000})
  const isBtn2 = useMediaQuery({ maxWidth: 1000 ,minWidth:0})
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [img, setImg] = useState("");
    const [passwordType, setPasswordType] = useState('password');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post("https://sneakers-api-pvhn.onrender.com/api/auth/register", {
          username,
          email,
          password,
          img,
        });
        console.log(response.data);
        navigate('/login');
      } catch (error) {
        console.error(error);
      }
    };

    const togglePasswordVisibility = (e) => {
      e.preventDefault();
      setPasswordType(passwordType === 'password' ? 'text' : 'password');
    }
  return (
    <div className='Login'>
      <div className='LoginDs'>
        {isDesktop && <img src={Desg} alt="loginpic"/>}
        {isIpademax && <img src={Desg2} alt="loginpic"/>}
      </div>
      <div className='LogInp'>
        <div className="textboxx">
          <h3 className='h3login'>Register</h3>
        </div>
        <div className='LoginInpDS'>
          <form className="formulaire">
            <div>
                <div className="textbox">
                    <input type="text" className='inputLg' onChange={(e) => setUsername(e.target.value)} autoComplete="username" placeholder='Username...'/>
                    <label>Username</label>
                    <FontAwesomeIcon icon={faUserShield} className='usr'/>
                </div>
                <div className="textbox">
                    <input type="text" className='inputLg' onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder='Email...'/>
                    <label>Email</label>
                    <FontAwesomeIcon icon={faEnvelope} className='usr'/>
                </div>
              </div>
              <div>
                <div className="textbox">
                    <input type="text" className='inputLg' onChange={(e) => setImg(e.target.value)} autoComplete="img" placeholder='Profil Url...'/>
                    <label>Profil Url</label>
                    <FontAwesomeIcon icon={faImage} className='usr'/>
                </div>
                <div className="textbox">
                    <input type={passwordType} className='inputLg' onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder='Password...'/>
                    <label>Password</label>
                    <span class="material-symbols-outlined" id='key'> key </span>
                </div>
                </div>
                {isBtn1 && <>
                <div className='btnbnr'>
                    <button type="submit" onClick={handleSubmit} className='buttonjt'>
                        Register
                        <span class="material-symbols-outlined"> arrow_forward </span>
                    </button>
                    <button id='btnshowpwd' onClick={togglePasswordVisibility}>
                        <span className="material-symbols-outlined"  id='showpwdicon'> 
                            {passwordType === 'password' ? 'visibility' : 'visibility_off'}
                        </span>
                    </button>
                </div>
                <Link to='/login' className='alredy'>I Alredy Have An Account!</Link>
                </>}
            </form>
            {isBtn2 && <><div className='btnbnr'>
                    <button type="submit" onClick={handleSubmit} className='buttonjt'>
                        Register
                        <span class="material-symbols-outlined"> arrow_forward </span>
                    </button>
                    <button id='btnshowpwd' onClick={togglePasswordVisibility}>
                        <span className="material-symbols-outlined"  id='showpwdicon'> 
                            {passwordType === 'password' ? 'visibility' : 'visibility_off'}
                        </span>
                    </button>
                </div>
                <Link to='/login' className='alredy'>I Alredy Have An Account!</Link></>}
        </div>
      </div>
    </div>
  )
}

export default Register