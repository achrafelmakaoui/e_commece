import React, { useState } from "react";
import './ProductId.css';
import { ReactComponent as IconMinus } from '../pictures/icon-minus.svg';
import { ReactComponent as IconPlus } from '../pictures/icon-plus.svg';
import { ReactComponent as IconCart } from '../pictures/icon-cart.svg';
import product from '../pictures/shoes/Air Jordan 1/air-jordan-1-elevate-low.png';
// import product2 from '../pictures/shoes/Air Jordan 1 Elevate High/air-jordan-1-elevate-high-womens-shoes-0Fw6bf (1).png';
// import product3 from '../pictures/shoes/air-jordan-1-zoom/air-jordan-1-retro-high-og-womens-shoes-LcJVSj.png';
// import { FaCheck } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const ProductId=()=>{

    const [selectedColor, setSelectedColor] = useState('');

    function handleColorOptionClick(color) {
      setSelectedColor(color);
    }
    const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  return (
    <>
    <div className="container" id="prdid">
        <div className="cardDesktop">
            <img src={product} alt='imgid'/>
        </div>
        <div className="productDescription">
            <h2>Air Jordan 1 Elevate High</h2>
            <p>
                These low-profile sneakers are your perfect
                casual wear companion. Featuring a durable rubber
                outer sole, they will withstand everything the
                weather can offer.
            </p>
            <div className="productColor">
                <div className="productColorH3">
                    <h3>Color</h3>
                </div>
                <div className="productCircleColor">
                    <span className="CircleColor" style={{ backgroundColor:'#3EBB80' }} onClick={() => handleColorOptionClick('yellowgreen')}>
                        {selectedColor === 'yellowgreen' && <FontAwesomeIcon icon={faCheck} style={{ color:'white' }} className="check"/>}
                    </span>
                    <span className="CircleColor" style={{ backgroundColor:'red' }} onClick={() => handleColorOptionClick('red')}>
                        {selectedColor === 'red' && <FontAwesomeIcon icon={faCheck} style={{ color:'white' }} className="check"/>}
                    </span>
                    <span className="CircleColor" style={{ backgroundColor:'pink' }} onClick={() => handleColorOptionClick('pink')}>
                        {selectedColor === 'pink' && <FontAwesomeIcon icon={faCheck} style={{ color:'white' }} className="check"/>}
                    </span>
                    <span className="CircleColor" style={{ backgroundColor:'black' }} onClick={() => handleColorOptionClick('black')}>
                        {selectedColor === 'black' && <FontAwesomeIcon icon={faCheck} style={{ color:'white' }} className="check"/>}
                    </span>
                </div>
            </div>
            <div className="productSize">
                <div className="productSizeH3">
                    <h3>Size</h3>
                </div>
                <div className="productButtonSize">
                    <span className="buttonSize">39</span>
                    <span className="buttonSize">40</span>
                    <span className="buttonSize">41</span>
                </div>
            </div>
            <div className="productPrice">
                <div className="productPriceNew">
                    <span className="newPrice">$125.00</span>
                    <span className="pricePercentage">50%</span>
                </div>
                <div className="productPriceOld">
                    <span className="oldPrice">$250.00</span>
                </div>
            </div>
            <div className="productY">
                <div className="productQuantity">
                    <button type="button" className="quantityBtn quantityBtnMinus" onClick={decrementQuantity}>
                        <IconMinus  className="quantityBtnMinus" style={{color:'black'}} />
                    </button>
                    <span className="quantityValue">{quantity}</span>
                    <button type="button" className="quantityBtn quantityBtnPlus" onClick={incrementQuantity}>
                        <IconPlus  className="quantityBtnPlus" style={{color:'black'}} />
                    </button>
                </div>
                <div className="productButton">
                    <button  className="productButton" type="button">
                        <IconCart id="cartBtn"/>
                        <span className="btnbroductadd">Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default ProductId;
