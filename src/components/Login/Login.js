import React, { useState } from 'react'
import './Login.css'
import SneakerLogo from '../pictures/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../redux/apiCalls";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching} = useSelector((state) => state.user);
    
    const handleClick = (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
    };
  return (
    <div className='Login'>
        <div className='LogInp'>
            <img src={SneakerLogo} alt='logo'/>
            <label>Usrname:</label>
            <input type='text' className='username' onChange={(e) => setUsername(e.target.value)} autoComplete="username" placeholder='Entre Nom...'/><br/>
            <label>Password:</label>
            <input type='password' className='password' onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder='Entre Mot De Passe...'/><br/>
            <button type='submit' className='BtnLogin' onClick={handleClick} disabled={isFetching}>Login</button>
        </div>
    </div>
  )
}

export default Login