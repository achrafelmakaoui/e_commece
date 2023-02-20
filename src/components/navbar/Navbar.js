import React,{ useState, useEffect,useRef } from "react";
import './Navbar.css'
import Nike from '../pictures/nike.png'
import AIR_JORADN from '../pictures/airjordan2.png'
import YEEZY from '../pictures/yeezy.png'


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
    <aside class="" ref={sidebar}>
      <div class="head__section">
        <i class="fa-solid fa-bars" ref={menu} onClick={showhideMenu}></i>
        <i class="fa-solid fa-x"   ref={menu} onClick={closesideMenu}></i>
      </div>
      <div class="nav__links">
        <ul>
          <li><a ><i class="fi-rr-apps"></i><span>Home</span></a></li>
          <li><a ><i class="fi-rr-comment-alt"></i><span>Product</span></a></li>
          <li><a ><i class="fi-rr-browser"></i><span>Service</span></a></li>
          <li><a ><i class="fi-rr-document-signed"></i><span>Reviews</span></a></li>
          <li><a ><i class="fi-rr-magic-wand"></i><span>About</span></a></li>
          <li><a ><i class="fi-rr-play-alt"></i><span>Video</span></a></li>
          <li><a ><i class="fi-rr-lock"></i><span>Access</span></a></li>
          <li><a ><i class="fi-rr-power"></i><span>Logout</span></a></li>
        </ul>
      </div>
    </aside>
    {/* <div className="ctr">
        <span class="parallax-text" text="NIKE">NIKE</span>
        <img src={Nike} alt="nike"/>
    </div> */}
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
