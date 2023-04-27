import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX} from '@fortawesome/free-solid-svg-icons'
import { faMinus} from '@fortawesome/free-solid-svg-icons'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
// import { useSelector } from 'react-redux'
import imgid from '../pictures/test.png'

const Cart = () => {
//   const cart = useSelector((state) => state.cart);


  return (<>
    <div className='cart'>
        <h1 className='cart_title'>YOUR CART</h1>
        <div className='cart_banner'>
            <div className='contu_shoop'>
                <button className='cntbtncartshop'>CONTINUE SHOPPING</button>
            </div>
            <div className='static_shoop'>
                <a href='/#' className='static_title'>Shopping Bag (2)</a>
                <a href='/#' className='static_title'>Your Wishlist (0)</a>
            </div>
            <div className='checkout_butt'>
                <button>CHECKOUT NOW</button>
            </div>
        </div>
        <hr className='cart_line'/>
        <div className='lst_produc'>
            <div className='maping'>
                    <div className='product_cbanner'>
                        <div className='cart_product_info'>
                            <img src={imgid} alt='title'/>
                            <div className='infobnner_crt'>
                                <div className='title_cartinfo'>
                                    <h3>Air jordan</h3>
                                </div>
                                <div className='ref_prdinfo'>
                                    <h5>Ref:</h5>
                                    <h5>1255dthrgvf42</h5>
                                </div>
                                <div className='size_colorinfo'>
                                    <div className='sizeinfo'>
                                        <h5 className='sizeh5'>Size:</h5>
                                        <h5 className='sizenumb'>22</h5>
                                    </div>
                                    <div className='colorinfo'>
                                        <h5 className='colorh5'>Color:</h5>
                                        <h5 className="CarprodColor" style={{ backgroundColor:'#F6F6F6',color:'#F6F6F6' }}>.</h5>
                                    </div>
                                </div>
                                <div className='prdpricecart'>
                                    <h5 className='pricetitlcrt'>Price:</h5>
                                    <h5 className='priceprdcrt'>123$</h5>
                                </div>
                                <div className='quantity_cart_genr'>
                                    <h5 className='qnt_cart'>Quantity:</h5>
                                    <div className='plusqtn'><FontAwesomeIcon icon={faPlus} className="quantityBtnPlusCart"/></div>
                                    <h5>2</h5>
                                    <div className='minisqtn'><FontAwesomeIcon icon={faMinus} className="quantityBtnMinusCart"/></div>
                                </div>
                            </div>
                        </div>
                        <div className='xmark'>
                            <FontAwesomeIcon icon={faX} className='xmarkicon'/>
                        </div>
                    </div>
            </div>
            <div className='checkoutdivbnn'>
                <div className='chekout_cbnn'>
                    <h2>ORDER SUMMARY</h2>
                    <div className='checkoutrw1'>
                        <div className='checkoutcol1'>Subtotal</div>
                        <div className='checkoutcol2'>505.00$</div>
                    </div>
                    <div className='checkoutrw1'>
                        <div className='checkoutcol1'>Estimated Shipping</div>
                        <div className='checkoutcol2'>From 0.00$</div>
                    </div>
                    <div className='checkoutrw1'>
                        <div className='checkoutcol1'>Estimated Total</div>
                        <div className='checkoutcol2'>595.00$</div>
                    </div>
                    <button>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart


