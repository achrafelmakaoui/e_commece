import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './ProductId.css';
import { ReactComponent as IconMinus } from '../pictures/icon-minus.svg';
import { ReactComponent as IconPlus } from '../pictures/icon-plus.svg';
import { ReactComponent as IconCart } from '../pictures/icon-cart.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

const ProductId=()=>{
  const dispatch =useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://sneakers-api-pvhn.onrender.com/api/products/find/${id}`);
        setProduct(res.data);
      } catch(err){
          console.log(err)
      }
    };
    getProduct();
  }, [id]);
  
  useEffect(() => {
    const getProductWithColor = async () => {
      try {
        const res = await axios.get(`https://sneakers-api-pvhn.onrender.com/api/products/find/${product.title}/${product.categories}/${selectedColor}`);
        setProduct(res.data);
      } catch(err){
          console.log(err)
      }
    };
    if (selectedColor && product) {
      getProductWithColor();
    }
   
  }, [selectedColor, product]);
  
  if (!product) {
    return <div>Loading...</div>;
  }

  function handleColorOptionClick(color) {
    setSelectedColor(color);
  }

  function handleSizeOptionClick(size) {
    setSelectedSize(size);
  }

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  

 
  return (
    <>
    <div className="returntoproducts">
        <Link to='/product'><span className="returncirle"><FontAwesomeIcon icon={faArrowLeft} className="iconreturn"/></span></Link>
    </div>
    <div className="container" id="prdid">
        <div className="cardDesktop">
            <img src={product.imgid} alt='imgid'/>
        </div>
        <div className="productDescription">
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <div className="productColor">
                <div className="productColorH3">
                    <h3>Color</h3>
                </div>
                <div className="productCircleColor">
                    {product.color.map((color, index) => (
                        <span className="CircleColor" style={{ backgroundColor:'#'+color}} onClick={() => handleColorOptionClick(color)} key={index}>
                            {selectedColor === color && <FontAwesomeIcon icon={faCheck} style={{ color:'white' }} className="check"/>}
                        </span>
                    ))}
                </div>
            </div>
            <div className="productSize">
                <div className="productSizeH3">
                    <h3>Size</h3>
                </div>
                <div className="productButtonSize">
                    {product.size.map((size, index) => (
                        <span className="buttonSize" key={index} onClick={() => handleSizeOptionClick(size)} style={{ backgroundColor: selectedSize === size ? 'black' : '#F6F6F6',color: selectedSize===size ? 'white':'black' }}>{size}</span>
                    ))}
                </div>
            </div>
            <div className="productPrice">
                <div className="productPriceNew">
                    <span className="newPrice">${product.price}</span>
                    <span className="pricePercentage">50%</span>
                </div>
                <div className="productPriceOld">
                    <span className="oldPrice">$250.00</span>
                </div>
            </div>
            <div className="productY">
                <div className="productQuantity">
                    <button type="button" className="quantityBtn quantityBtnMinus" onClick={() => handleQuantity("dec")} >
                        <IconMinus  className="quantityBtnMinus" style={{color:'black'}} />
                    </button>
                    <span className="quantityValue">{quantity}</span>
                    <button type="button" className="quantityBtn quantityBtnPlus" onClick={() => handleQuantity("inc")} >
                        <IconPlus  className="quantityBtnPlus" style={{color:'black'}} />
                    </button>
                </div>
                <div className="productButton">
                    <button  className="productButton" type="button" onClick={()=>dispatch(addProduct({...product, quantity, selectedColor, selectedSize}))}>
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