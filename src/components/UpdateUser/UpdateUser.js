import React, { useState } from 'react'
import './UpdateUser.css'
import { userRequest } from "../../RequestMethod";

const UpdateUser = ({ id }) => {

    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [img, setImg]=useState("");
    const [password, setPassword]=useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await userRequest.put(`users/${id}`, {
            username,
            email,
            password,
            img,
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

  return (<>
    <div className='sectionupdate'>
        <div className='inputrowupd'>
            <label>Username</label><br/>
            <input type='text' placeholder='New Username...'  autoComplete="current-username"
                  value={username} onChange={(event) => setUsername(event.target.value)} required/>
        </div>
        <div className='inputrowupd'>
            <label>Email</label><br/>
            <input type='email' placeholder='New Email...' autoComplete="current-email"
                  value={email} onChange={(event) => setEmail(event.target.value)} required/>
        </div>
    </div>
    <hr className='hrseetting'/>
    <div className='sectionupdate'>
        <div className='inputrowupd'>
            <label>Profile Url</label><br/>
            <input type='text' placeholder='New Profile Picture...' autoComplete="current-img"
                value={img} onChange={(event) => setImg(event.target.value)} required/>
        </div>
        <div className='inputrowupd'>
            <label>Password</label><br/>
            <input type='password' placeholder='New Password...' value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password"/>
        </div>
    </div>
    <hr className='hrseetting'/>
    <div className='sectionupdatebutton'>
        <button className='btnsavechange' onClick={handleSubmit}>Save Chnages</button>
    </div>
    </>
  )
}

export default UpdateUser