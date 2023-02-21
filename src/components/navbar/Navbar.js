import React,{ useState, useEffect,useRef } from "react";
import './Navbar.css'
import Nike from '../pictures/nike.png'
import AIR_JORADN from '../pictures/airjordan2.png'
import YEEZY from '../pictures/yeezy.png'
import MenuCloseIcon  from '../pictures/icon-close.svg';
import MenuIcon  from '../pictures/icon-menu.svg';
import CartButton from '../CartButton/CartButton';
import SneakerLogo from '../pictures/logo.svg';
import avatar from '../pictures/image-avatar.png';
import Profil from '../pictures/profil.jpg'


const Navbar = () => {
    const [menuState, setMenuState] = useState(false);
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
      const [currentSlide, setCurrentSlide] = useState(0);

      const slides = [
        {
          image: Nike,
          caption: "NIKE",
          text:'NIKE'
        },
        {
          image: AIR_JORADN,
          caption: "AIRJO",
          text:'AIRJO'
        },
        {
          image: YEEZY,
          caption: "YEEZY",
          text:'YEEZY'
        }
      ];
      useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % slides.length);
        }, 6000);
        return () => clearInterval(intervalId);
        }, [currentSlide, slides.length]);
  return (
    <>
    <div className="bg">
    <header>
    <nav >
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
  </header>
  <div class="nav__links" ref={sidebar}>
  <img className='headerMenuCloseIcon' src={MenuCloseIcon} alt='svg' ref={menu} onClick={closesideMenu}/>
        <ul>
          <li><a ><i class="fi-rr-apps"></i><span>Home</span></a></li>
          <li><a ><i class="fi-rr-comment-alt"></i><span>Product</span></a></li>
          <li><a ><i class="fi-rr-browser"></i><span>Service</span></a></li>
          <li><a ><i class="fi-rr-document-signed"></i><span>Reviews</span></a></li>
          <li><a ><i class="fi-rr-lock"></i><span>Support</span></a></li>
          <li><a ><i class="fi-rr-magic-wand"></i><span>About</span></a></li>
          <li><a ><i class="fi-rr-power"></i><span>Contact</span></a></li>
        </ul>
      </div>
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >  
          <span class="parallax-text" text={slide.text}>{slide.caption}</span>
          <img className="shoes" src={slide.image} alt={slide.caption} />
          
        </div>
      ))}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`dot ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;
