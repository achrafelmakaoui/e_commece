import React, { useState } from 'react'
import './Login.css'
import Desg from '../pictures/sh4.png';
import Desg2 from '../pictures/sh.png';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../redux/apiCalls";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'


const Login = () => {

  const isIpademax = useMediaQuery({ maxWidth: 1000,minWidth:0})
  const isDesktop = useMediaQuery({ maxWidth: 3000 ,minWidth:1000})
  const isBtn1 = useMediaQuery({ maxWidth: 3000 ,minWidth:1000})
  const isBtn2 = useMediaQuery({ maxWidth: 1000 ,minWidth:0})

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState('password');
  const dispatch = useDispatch();
  const { isFetching} = useSelector((state) => state.user);
    
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
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
            <h3 className='h3login'>Login</h3>
        </div>
        <div className='LoginInpDS'>
          <form className="formulaire">
              <div className="textbox">
                  <input type="text" className='inputLg' onChange={(e) => setUsername(e.target.value)} autoComplete="username" placeholder='Username...'/>
                  <label>Username</label>
                  <FontAwesomeIcon icon={faUserShield} className='usr'/>
              </div>
              <div className="textbox">
                  <input type={passwordType} className='inputLg' onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder='Password...'/>
                  <label>Password</label>
                  <span class="material-symbols-outlined" id='key'> key </span>
              </div>
              {isBtn1 && <><div className='btnbnr'>
                <button type="submit" onClick={handleClick} disabled={isFetching} className='buttonjt'>
                    Login
                    <span class="material-symbols-outlined"> arrow_forward </span>
                </button>
                <button id='btnshowpwd' onClick={togglePasswordVisibility}>
                    <span className="material-symbols-outlined"  id='showpwdicon'> 
                        {passwordType === 'password' ? 'visibility' : 'visibility_off'}
                    </span>
                </button>
            </div>
            <Link to='/register' className='notalredy'>I Don't Have An Account!</Link>
        </>}
          </form>
          {isBtn2 && <><div className='btnbnr'>
                <button type="submit" onClick={handleClick} disabled={isFetching} className='buttonjt'>
                    Login
                    <span class="material-symbols-outlined"> arrow_forward </span>
                </button>
                <button id='btnshowpwd' onClick={togglePasswordVisibility}>
                    <span className="material-symbols-outlined"  id='showpwdicon'> 
                        {passwordType === 'password' ? 'visibility' : 'visibility_off'}
                    </span>
                </button>
            </div>
            <Link to='/register' className='notalredy'>I Don't Have An Account!</Link></>}
        </div>
      </div>
    </div>
  )
}

export default Login