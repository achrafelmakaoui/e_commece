import React from 'react'
import './Footer.css'
import logowhite from '../pictures/logowhite.svg'



export default function Footer(){
  return(
    <div>
        <br/><br/><br/><br/><br/><br/>
    <footer className="footer">
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
                    <li><a  className='link' href='/#'>Product</a></li>
                    <li><a  className='link' href='/#'>Service</a></li>
                    <li><a  className='link' href='/#'>Reviews</a></li>
                    <li><a  className='link' href='/#'>Support</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>Liens utiles</h4>
                  <ul>
                    <li><a  className='link' href='/#'>Sing-up</a></li>
                    <li><a  className='link' href='/#'>Sign-in</a></li>   
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
            <p className="copyright">All Rights Reserved ©</p>
         </footer>
         </div>
  )
}
 