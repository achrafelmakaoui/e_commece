import React from "react";
import './ProductList.css';
import Img1 from '../pictures/product img/ezgif-4-448478e90c.jpg'
import Img2 from '../pictures/product img/ezgif-5-ad539e6ae3.jpg'
import Img3 from '../pictures/product img/ezgif-5-570acf00d8.jpg'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import Rating from '../rating starts/Rating';

import NIKELGBl from '../pictures/nike-black.png'
import StarIcon from '@mui/icons-material/Star';

const ProductList=()=>{
 
  return (
    <>
        <div className="containerproduct">
            <div className="productrows">
                <article class="carddd">
                    <div className="content_card">
                        <div className="discont">
                            <span>- 50 %</span>
                        </div>
                        <div className="rating">
                            <Rating />
                        </div>
                    </div>
                    <div class="img-div">
                        <img src={Img1} className="productimg" alt="Product1"/>
                    </div>
                    <div class="card_content">
                        <div className="title-price">
                            <span class="card_title">This is a Title</span>
                            <span className="price">160 $</span>
                        </div>
                        <span class="card_subtitle">chi 9alwa hla lproduct copyha mn store dyal nike 'star wa7ad...!'.</span>
                        <div className="botton-icon">
                            <button className="SHOW">
                                SHOW PRODUCT
                                <VisibilityOutlinedIcon className="eye"/>
                            </button>
                            <button className="ADD">
                                ADD TO CARD
                                <ShoppingBasketOutlinedIcon className="basket"/>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <div className="productrows">
                <article class="carddd">
                <div className="content_card">
                        <div className="discont">
                            <span>- 50 %</span>
                        </div>
                        <div className="rating">
                            <Rating />
                        </div>
                    </div>
                    <div class="img-div">
                        <img src={Img2} className="productimg" alt="Product1"/>
                    </div>
                    <div class="card_content">
                        <div className="title-price">
                            <span class="card_title">This is a Title</span>
                            <span className="price">160 $</span>
                        </div>
                        <span class="card_subtitle">chi 9alwa hla lproduct copyha mn store dyal nike 'star wa7ad...!'.</span>
                        <div className="botton-icon">
                            <button className="SHOW">
                                SHOW PRODUCT
                                <VisibilityOutlinedIcon className="eye"/>
                            </button>
                            <button className="ADD">
                                ADD TO CARD
                                <ShoppingBasketOutlinedIcon className="basket"/>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <div className="productrows">
                <article class="carddd">
                    <div className="content_card">
                        <div className="discont">
                            <span>- 50 %</span>
                        </div>
                        <div className="rating">
                            <Rating />
                        </div>
                    </div>
                    <div class="img-div">
                        <img src={Img3} className="productimg" alt="Product1"/>
                    </div>
                    <div class="card_content">
                        <div className="title-price">
                            <span class="card_title">This is a Title</span>
                            <span className="price">160 $</span>
                        </div>
                        <span class="card_subtitle">chi 9alwa hla lproduct copyha mn store dyal nike 'star wa7ad...!'.</span>
                        <div className="botton-icon">
                            <button className="SHOW">
                                SHOW PRODUCT
                                <VisibilityOutlinedIcon className="eye"/>
                            </button>
                            <button className="ADD">
                                ADD TO CARD
                                <ShoppingBasketOutlinedIcon className="basket"/>
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </>
  );
};

export default ProductList;
