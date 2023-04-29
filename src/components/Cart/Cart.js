import React, { useEffect, useState } from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX} from '@fortawesome/free-solid-svg-icons'
import { faMinus} from '@fortawesome/free-solid-svg-icons'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../redux/cartRedux'
import { Link } from 'react-router-dom'
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch =useDispatch();
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    
    const amount=cart.total*100
    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
    const makeRequest = async () => {
        try {
        const res = await axios.post("http://localhost:5000/api/checkout/payment", {
            tokenId: stripeToken.id,
            amount: amount,
        });
        navigate("/success", {
            state: { stripeData: res.data, products: cart },
        });
        } catch {}
    };
    stripeToken && makeRequest();
    }, [stripeToken,cart, cart.total, navigate]);


  return (<>
    <div className='cart'>
        <h1 className='cart_title'>YOUR CART</h1>
        <div className='cart_banner'>
            <div className='contu_shoop'>
                <Link className='cntbtncartshop' to='/product'>CONTINUE SHOPPING</Link>
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
                {cart.products.map((product)=>(
                    <div className='product_cbanner'>
                        <div className='cart_product_info'>
                            <img src={product.imgid} alt='title'/>
                            <div className='infobnner_crt'>
                                <div className='title_cartinfo'>
                                    <h3>{product.title}</h3>
                                </div>
                                <div className='ref_prdinfo'>
                                    <h5>Ref:</h5>
                                    <h5>{product._id}</h5>
                                </div>
                                <div className='size_colorinfo'>
                                    <div className='sizeinfo'>
                                        <h5 className='sizeh5'>Size:</h5>
                                        <h5 className='sizenumb'>{product.selectedSize}</h5>
                                    </div>
                                    <div className='colorinfo'>
                                        <h5 className='colorh5'>Color:</h5>
                                        <h5 className="CarprodColor" style={{ backgroundColor:'#'+product.selectedColor,color:'#'+product.selectedColor }}>.</h5>
                                    </div>
                                </div>
                                <div className='prdpricecart'>
                                    <h5 className='pricetitlcrt'>Price:</h5>
                                    <h5 className='priceprdcrt'>{product.price * product.quantity}$</h5>
                                </div>
                                <div className='quantity_cart_genr'>
                                    <h5 className='qnt_cart'>Quantity:</h5>
                                    <div className='plusqtn'><FontAwesomeIcon icon={faPlus} className="quantityBtnPlusCart"/></div>
                                    <h5>{product.quantity}</h5>
                                    <div className='minisqtn'><FontAwesomeIcon icon={faMinus} className="quantityBtnMinusCart"/></div>
                                </div>
                            </div>
                        </div>
                        <div className='xmark' onClick={()=>dispatch(deleteProduct(product._id))}>
                            <FontAwesomeIcon icon={faX} className='xmarkicon'/>
                        </div>
                    </div>
                ))}
            </div>
            <div className='checkoutdivbnn'>
                <div className='chekout_cbnn'>
                    <h2>ORDER SUMMARY</h2>
                    <div className='checkoutrw1'>
                        <div className='checkoutcol1'>Subtotal</div>
                        <div className='checkoutcol2'>{cart.total}.00$</div>
                    </div>
                    <div className='checkoutrw1'>
                        <div className='checkoutcol1'>Estimated Shipping</div>
                        <div className='checkoutcol2'>From 0.00$</div>
                    </div>
                    <div className='checkoutrw1'>
                        <div className='checkoutcol1'>Estimated Total</div>
                        <div className='checkoutcol2'>{cart.total}.00$</div>
                    </div>
                    <StripeCheckout
                        name="Sneakers Shoop"
                        image="https://i.ibb.co/Ks0jMgZ/18feae27-20d6-4ab1-bb12-c02ea4650903.png"
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                        >
                        <button>CHECKOUT NOW</button>
                    </StripeCheckout>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart


