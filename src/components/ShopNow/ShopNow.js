import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './ShopNow.css'

function ShopNow() {
  return (
    <div>
        <br/>
        <div class="bd">
            <Link to="/product" className='vmp text- center'>
                <span className="botn">
                    <span class="text text-center">
                        Shop Now
                    </span>
                    <i className="">
                        <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
                    </i>
                </span>
            </Link>
        </div>
    </div>
  )
}

export default ShopNow