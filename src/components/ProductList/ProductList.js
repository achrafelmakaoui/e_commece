import React from "react";
import './ProductList.css';
import Img1 from '../pictures/product img/ezgif-4-448478e90c.jpg'
import Img2 from '../pictures/product img/ezgif-5-ad539e6ae3.jpg'
import Img3 from '../pictures/product img/ezgif-5-570acf00d8.jpg'
// import Img4 from '../pictures/shoes/Air Jordan 1/air-jordan-1-elevate-low.png'

import Rating from '../rating starts/Rating';

const ProductList=()=>{
 
  return (
    <>
        <div className="containerproduct">
            <div className="productrows">
                <article class="carddd">
                    <div className="content_card">
                        <div className="discont">
                            <p>50% Off</p>
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
                            <span class="card_title">Air Jordan 1</span>
                            <span className="price">160 $</span>
                        </div>
                        <span class="card_subtitle"></span>
                        <div className="botton-icon">
                            <button className="SHOW">
                                <span className="show">SHOW<span className="content-button"> PRODUCT</span></span>
                                <i class="fa-solid fa-magnifying-glass" id="eye"></i>
                            </button>
                            <button className="ADD">
                                <span className="addtx">ADD<span className="content-button"> TO CARD</span></span>
                                <i class="fa-solid fa-cart-plus" id="basket"></i>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <div className="productrows">
                <article class="carddd">
                    <div className="content_card">
                        <div className="discont">
                            <p>50% Off</p>
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
                            <span class="card_title">Air Jordan 1 Elevate High</span>
                            <span className="price">110 $</span>
                        </div>
                        <span class="card_subtitle"></span>
                        <div className="botton-icon">
                            <button className="SHOW">
                                <span className="show">SHOW<span className="content-button"> PRODUCT</span></span>
                                <i class="fa-solid fa-magnifying-glass" id="eye"></i>
                            </button>
                            <button className="ADD">
                                <span className="addtx">ADD<span className="content-button"> TO CARD</span></span>
                                <i class="fa-solid fa-cart-plus" id="basket"></i>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <div className="productrows">
                <article class="carddd">
                    <div className="content_card">
                        <div className="discont">
                            <p>50% Off</p>
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
                            <span class="card_title">Air Jordan 1 Mid</span>
                            <span className="price">180 $</span>
                        </div>
                        <span class="card_subtitle"></span>
                        <div className="botton-icon">
                            <button className="SHOW">
                                <span className="show">SHOW<span className="content-button"> PRODUCT</span></span>
                                <i class="fa-solid fa-magnifying-glass" id="eye"></i>
                            </button>
                            <button className="ADD">
                                <span className="addtx">ADD<span className="content-button"> TO CARD</span></span>
                                <i class="fa-solid fa-cart-plus" id="basket"></i>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <div className="productrows">
                <article class="carddd">
                    <div className="content_card">
                        <div className="discont">
                            <p>50% Off</p>
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
                        <span class="card_subtitle"></span>
                        <div className="botton-icon">
                            <button className="SHOW">
                                <span className="show">SHOW<span className="content-button"> PRODUCT</span></span>
                                <i class="fa-solid fa-magnifying-glass" id="eye"></i>
                            </button>
                            <button className="ADD">
                                <span className="addtx">ADD<span className="content-button"> TO CARD</span></span>
                                <i class="fa-solid fa-cart-plus" id="basket"></i>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <div className="productrows">
                <article class="carddd">
                    <div className="content_card">
                        <div className="discont">
                            <p>50% Off</p>
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
                        <span class="card_subtitle"></span>
                        <div className="botton-icon">
                            <button className="SHOW">
                                <span className="show">SHOW<span className="content-button"> PRODUCT</span></span>
                                <i class="fa-solid fa-magnifying-glass" id="eye"></i>
                            </button>
                            <button className="ADD">
                                <span className="addtx">ADD<span className="content-button"> TO CARD</span></span>
                                <i class="fa-solid fa-cart-plus" id="basket"></i>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <div className="productrows">
                <article class="carddd">
                    <div className="content_card">
                        <div className="discont">
                            <p>50% Off</p>
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
                        <span class="card_subtitle"></span>
                        <div className="botton-icon">
                            <button className="SHOW">
                                <span className="show">SHOW<span className="content-button"> PRODUCT</span></span>
                                <i class="fa-solid fa-magnifying-glass" id="eye"></i>
                            </button>
                            <button className="ADD">
                                <span className="addtx">ADD<span className="content-button"> TO CARD</span></span>
                                <i class="fa-solid fa-cart-plus" id="basket"></i>
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
