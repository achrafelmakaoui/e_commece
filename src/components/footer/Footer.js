import React, { useEffect } from 'react'
import './Footer.css'
import logowhite from '../pictures/logowhite.svg'
import { HashLink } from "react-router-hash-link";



export default function Footer(){
  useEffect(() => {

    // Get the element with id "elementId"
    const element = document.getElementById('Contact');

    // If the element exists, scroll to it
    if (element) {
      element.scrollIntoView(1000, 0);
      window.scrollTo(0, 0);
    }
  }, []); // Run this effect only once


  const handleClick = (event) => {
    event.preventDefault();
    const element = document.querySelector(event.target.hash);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return(
    <div>
        <br/><br/><br/><br/><br/><br/>
    <footer className="footer" id='Contact'>
        <hr style={{color:'white'}} id='hr'/>
            <div className="contaiiner">
                
              <div className="roaw">
                <div className="footer-col">
                  <h4><img src={logowhite} width="130px" className="logo" alt=''/></h4>
                       <p>Step up your style with our collection of quality shoes. From sneakers to boots, we've got you covered with the latest trends and timeless classics. Shop now and step out in confidence!</p>
             </div>
                <div className="footer-col">
                  <h4>Liens utiles</h4>
                  <ul>
                    <li><HashLink to='/#Products' className='link' onClick={handleClick}>Product</HashLink></li>
                    <li><HashLink to='/#Services' className='link' onClick={handleClick}>Service</HashLink></li>
                    <li><HashLink to='/#Reviews' className='link' onClick={handleClick}>Reviews</HashLink></li>
                    <li><HashLink to='/#Support' className='link' onClick={handleClick}>Support</HashLink></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>Liens utiles</h4>
                  <ul>
                    <li><HashLink to='/#' className='link' >Sing-up</HashLink></li>
                    <li><HashLink to='/#' className='link' >Sign-in</HashLink></li>   
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>S'abonner</h4>
                  <div className="social-links">
                    <a href='/#' onClick={() => { window.open('https://youtube.com/channel/UCEG7PifxvFfhjeCAYliw_Sg', '_blank')}} ><i className="fab fa-youtube"></i></a>
                    <a href='/#' onClick={() => { window.open('https://www.facebook.com/Blood-Donation-Company-112042261325179/', '_blank')}} ><i className="fab fa-facebook-f"></i></a>
                    <a href='/#' onClick={() => { window.open('https://twitter.com/bdcstaf?s=20&t=ZSuPKrRAz491GRsoCDXaHA', '_blank')}} ><i className="fab fa-twitter"></i></a>
                    <a href='/#' onClick={() => { window.open('https://instagram.com/b.d.c.team?utm_medium=copy_link', '_blank')}} ><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* <hr id='hr2'/> */}
            <p className="copyright">© All Rights Reserved ©</p>
         </footer>
         </div>
  )
}
 