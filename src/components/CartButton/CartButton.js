import React from 'react'
import Cart from '../pictures/icon-cart-head.svg';
import './CartButton.css';

const CartButton = () => {
  return (
    <button type="button">
      <img src={Cart} alt=''/>
    </button>
  )
}

export default CartButton