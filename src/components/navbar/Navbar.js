import React,{ useState,useRef, useEffect } from "react";
import './Navbar.css'
import MenuCloseIcon  from '../pictures/icon-close.svg';
import MenuIcon  from '../pictures/icon-menu.svg';
import CartButton from '../CartButton/CartButton';
import SneakerLogo from '../pictures/logo.svg';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Badge } from "@material-ui/core";
import { useSelector} from "react-redux";
import axios from "axios";


const Navbar = () => {
  const user = useSelector(state=>state.user.currentUser)
  const quantity = useSelector(state=>state.cart.quantity)
  const [PerData,setPerData] = useState('')

  useEffect(() => {
    axios.get(`https://sneakers-api-pvhn.onrender.com/api/users/find/${user._id}`)
      .then(response => {
        setPerData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  useEffect(() => {
    // Get the element with id "elementId"
    const element = document.getElementById('Home');
    
    // If the element exists, scroll to it
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      window.scrollTo(0, 0);
    }
  }, []); // Run this effect only once
  
  const handleClick = (event) => {
    event.preventDefault();
    const element = document.querySelector(event.target.hash);
    element.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className="Home" id="Home">
    <nav>
      <div className="headerLogo">
        <img className='headerMenuIcon' src={MenuIcon} alt='svg' ref={menu} onClick={showhideMenu}/>
        <Link to='/'><img className='header' src={SneakerLogo} alt='svg'/></Link>
        <ul className="headerLinks">
          <li><Link className="nav-link" to='/'><HashLink className="nav-link" to='/#Home' onClick={handleClick}>Home</HashLink></Link></li>
          <li><Link className="nav-link" to="/"><HashLink className="nav-link" to='/#Products' onClick={handleClick}>Product</HashLink></Link></li>
          <li><Link className="nav-link" to="/"><HashLink className="nav-link" to='/#Services' onClick={handleClick}>Service</HashLink></Link></li>
          <li><Link className="nav-link" to="/"><HashLink className="nav-link" to='/#Reviews' onClick={handleClick}>Reviews</HashLink></Link></li>
          <li><Link className="nav-link" to="/"><HashLink className="nav-link" to='/#Support' onClick={handleClick}>Support</HashLink></Link></li>
          <li><Link className="nav-link" to="/"><HashLink className="nav-link" to='/#Contact' onClick={handleClick}>Contact</HashLink></Link></li>
        </ul>
      </div>
      <ul className="headerProfile">
        <li>
          <Link to='/cart'>
            <Badge badgeContent={quantity} color="primary" max={9}>
                <CartButton color="action"/>
            </Badge>
          </Link>
        </li>
        <li>
          <img src={PerData.img} alt="avatar"/>
        </li>
      </ul>
    </nav>
    <hr className="headerLine" />

  <div className="nav__links" ref={sidebar}>
    <img className='headerMenuCloseIcon' src={MenuCloseIcon} alt='svg' ref={menu} onClick={closesideMenu}/>
    <Link to='/'><img className='smnavlogo' src={SneakerLogo} alt='svg'/></Link>
        <ul>
          <li><Link to="/"><HashLink to='/#Home' onClick={handleClick}><i className="fi-rr-apps"></i>Home</HashLink></Link></li>
          <li><Link to="/"><HashLink to='/#Products' onClick={handleClick}><i className="fi-rr-comment-alt"></i>Product</HashLink></Link></li>
          <li><Link to="/"><HashLink to='/#Services' onClick={handleClick}><i className="fi-rr-browser"></i>Service</HashLink></Link></li>
          <li><Link to="/"><HashLink to='/#Reviews' onClick={handleClick}><i className="fi-rr-document-signed"></i>Reviews</HashLink></Link></li>
          <li><Link to="/"><HashLink to='/#Support' onClick={handleClick}><i className="fi-rr-lock"></i>Support</HashLink></Link></li>
          <li><Link to="/"><HashLink to='/#Contact' onClick={handleClick}><i className="fi-rr-power"></i>Contact</HashLink></Link></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
