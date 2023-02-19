import React, { useState } from "react";
import './Navbar.css'
import profil from './components/pictures/profil.jpg'
import logo from './components/pictures/logo.png'

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <header>
        <div class="nav container">
            <nav>
                <div class="logo">
                    <img src={logo} className='logopic' alt=""/>
                </div>
                <ul class="nav-links">
                    <li>
                        <a href="inscription">Home</a>
                    </li>
                    <li>
                        <a href="inscformateur">Pruduct</a>
                    </li>
                    <li>
                        <a href="afficherstg">About</a>
                    </li>
                </ul>
            </nav>
            <i class='bx bx-shopping-bag' id="cart-icon" onClick={openCart}></i>
            <img src={profil} className="profil" alt=""/>
            <div class={`cart ${isCartOpen ? "active" : ""}`}>
                <h2 class="cart-title">Your Cart</h2>
                <div class="cart-content">
                </div>
                <div class="total">
                <div class="total-title">Total</div>
                <div class="total-price">$0</div>
             </div>
             <button type="button" class="btn-buy">Buy Now</button>
             <i class='bx bx-x' id="close-cart" onClick={closeCart}></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
