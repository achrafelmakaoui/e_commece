import React, { useEffect, useState } from 'react'
import './Setting.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../redux/userRedux';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Update from '../UpdateUser/UpdateUser'
const Setting = () => {

    const dispatch = useDispatch();
   
    const handleLogoutClick = () => {
      dispatch(logout());
    };
    const [PerData,setPerData] = useState('')
    const id = useSelector(state => state.user.currentUser._id);

    const handleDelete = () => {
        axios.delete(`https://sneakers-api-pvhn.onrender.com/api/users/${id}`)
          .then(response => {
            console.log(response.data);
            dispatch(logout());
          })
          .catch(error => {
            console.log(error);
          });
      }

    useEffect(() => {
        axios.get(`https://sneakers-api-pvhn.onrender.com/api/users/find/${id}`)
          .then(response => {
            setPerData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      });

  return (
    <div className='setting'>
        <div className='bgwtset'>
            <div className='settingcard'>
                <div className='userinforow'>
                    <div className='userimgsetting'>
                        <img src={PerData.img} alt='profil'/>
                    </div>
                    <div className='userdataper'>
                        <h5 className='EmailH4'><FontAwesomeIcon icon={faEnvelopeCircleCheck}/> {PerData ? PerData.email:'Upload...'} </h5>
                        <h5 className='NameH4'><FontAwesomeIcon icon={faUserShield}/> {PerData ? PerData.username:'Upload...'}  </h5>
                    </div>
                </div>
                <div className='userlogout'>
                    <button onClick={handleLogoutClick} className='btnlogout'>
                        <FontAwesomeIcon icon={faRightFromBracket} className='logoutIcon' />
                        Logout
                    </button>
                </div>
            </div>
            <hr className='hrseetting'/>
            <div className='updatesection'>
                <Update id={PerData._id}/>
            </div>
            <hr className='hrseetting'/>
            <div className='delteeacount'>
                <div className='deleteacounttext'>
                    <h5 className='dt1'>Delete Account</h5>
                    <h5 className='dt2'>By deleting your account you will lose all your data...</h5>
                </div>
                <div className='deleteacountbtn'>
                    <button className='btndeleteacount' onClick={handleDelete}>Delete Account...</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Setting