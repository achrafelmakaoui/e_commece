import React,{ useState,useRef } from "react";
import './Navbar.css'
import MenuCloseIcon  from '../pictures/icon-close.svg';
import MenuIcon  from '../pictures/icon-menu.svg';
import CartButton from '../CartButton/CartButton';
import SneakerLogo from '../pictures/logo.svg';
// import avatar from '../pictures/image-avatar.png';
import Profil from '../pictures/profil.jpg'


const Navbar = () => {
    const [ setMenuState] = useState(false);
    const menu = useRef(null);
    const sidebar = useRef(null);
  
    const showhideMenu = () => {
        menu.current.classList.add("active");
        sidebar.current.classList.add("active");
        setMenuState(true);
    };
    const closesideMenu = () => {
          menu.current.classList.remove("active");
          sidebar.current.classList.remove("active");
          setMenuState(false);
      };
      
  return (
    <>
    <div className="bg">
    <nav>
      <div className="headerLogo">
        <img className='headerMenuIcon' src={MenuIcon} alt='svg' ref={menu} onClick={showhideMenu}/>
        <img className='header' src={SneakerLogo} alt='svg'/>
        <ul className="headerLinks">
          <li>Home</li>
          <li>Product</li>
          <li>Service</li>
          <li>Reviews</li>
          <li>Support</li>
        </ul>
      </div>
      <ul className="headerProfile">
        <li>
          <CartButton/>
        </li>
        <li>
          <img src={Profil} alt="avatar"/>
        </li>
      </ul>
    </nav>
    <hr className="headerLine" />

  <div class="nav__links" ref={sidebar}>
    <img className='headerMenuCloseIcon' src={MenuCloseIcon} alt='svg' ref={menu} onClick={closesideMenu}/>
    <img className='smnavlogo' src={SneakerLogo} alt='svg'/>
  
        <ul>
          <li><a href="/#"><i class="fi-rr-apps"></i><span>Home</span></a></li>
          <li><a href="/#"><i class="fi-rr-comment-alt"></i><span>Product</span></a></li>
          <li><a href="/#"><i class="fi-rr-browser"></i><span>Service</span></a></li>
          <li><a href="/#"><i class="fi-rr-document-signed"></i><span>Reviews</span></a></li>
          <li><a href="/#"><i class="fi-rr-lock"></i><span>Support</span></a></li>
          <li><a href="/#"><i class="fi-rr-magic-wand"></i><span>About</span></a></li>
          <li><a href="/#"><i class="fi-rr-power"></i><span>Contact</span></a></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
