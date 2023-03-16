import React from "react";
import './ProductList.css';
import Img1 from '../pictures/product img/ezgif-4-448478e90c.jpg'
import Img2 from '../pictures/product img/ezgif-5-ad539e6ae3.jpg'
import Img3 from '../pictures/product img/ezgif-5-570acf00d8.jpg'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';


import NIKELGBl from '../pictures/nike-black.png'
import StarIcon from '@mui/icons-material/Star';

const ProductList=()=>{
 
  return (
    <>
        <div className="containerproduct">
            <div className="productrows">
                {/* <div className="reviewproduct">
                    <div className="logonike">
                        <img src={NIKELGBl}  alt="nikelg"/>  
                    </div>
                    <div className="starrow">
                        <span className="rvproductstar">
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                        </span>
                    </div>
                </div> */}
                <div className="card">
                    <div className="imgbann">
                        <img src={Img1} className="productimg" alt="Product1"/>
                    </div>
                    <div className="productinfo">
                        <h3 className="producttitle">Air Jordan 1</h3>
                        <h5 className="productprice">$$80</h5>
                        <div className="eyebox">
                            <div className="hover-button">
                                <VisibilityOutlinedIcon fontSize="large" className="eye"/>
                            </div>
                            <div className="content">
                                <div className="show">SHOW PRODUCT</div>
                                <div className="add">ADD TO CARD</div>
                            </div>
                            <ShoppingBasketOutlinedIcon fontSize="large" className="basket"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productrows">
                {/* <div className="reviewproduct">
                    <div className="logonike">
                        <img src={NIKELGBl}  alt="nikelg"/>  
                    </div>
                    <div className="starrow">
                        <span className="rvproductstar">
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                        </span>
                    </div>
                </div> */}
                <div className="card">
                    <div className="imgbann">
                        <img src={Img2} className="productimg" alt="Product1"/>
                    </div>
                    <div className="productinfo">
                        <h3 className="producttitle">Air Jordan 1</h3>
                        <h5 className="productprice">$$80</h5>
                        <div className="eyebox">
                            <div className="hover-button">
                                <VisibilityOutlinedIcon fontSize="large" className="eye"/>
                            </div>
                            <div className="content">
                                <div className="show">SHOW PRODUCT</div>
                                <div className="add">ADD TO CARD</div>
                            </div>
                            <div className="button-hoverr">
                                <ShoppingBasketOutlinedIcon fontSize="large" className="basket"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productrows">
                {/* <div className="reviewproduct">
                    <div className="logonike">
                        <img src={NIKELGBl}  alt="nikelg"/>  
                    </div>
                    <div className="starrow">
                        <span className="rvproductstar">
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                            <StarIcon className="iconui"/>
                        </span>
                    </div>
                </div> */}
                <div className="card">
                    <div className="imgbann">
                        <img src={Img3} className="productimg" alt="Product1"/>
                    </div>
                    <div className="productinfo">
                        <h3 className="producttitle">Air Jordan 1</h3>
                        <h5 className="productprice">$$80</h5>
                        <div className="eyebox">
                            <div className="hover-button">
                                <VisibilityOutlinedIcon fontSize="large" className="eye"/>
                            </div>
                            <div className="content">
                                <div className="show">SHOW PRODUCT</div>
                                <div className="add">ADD TO CARD</div>
                            </div>
                            <ShoppingBasketOutlinedIcon fontSize="large" className="basket"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProductList;
