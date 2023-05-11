import './ProductList.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Rating from '../rating starts/Rating';


const ProductList=({ cat, filters, sort })=>{


const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
  let url = "http://localhost:5000/api/products";
  if (filters && cat) {
    url += `?name=${filters}&category=${cat}`;
  } else if (filters) {
    url += `?name=${filters}`;
  } else if (cat) {
    url += `?category=${cat}`;
  }

  try {
    const res = await axios.get(url);
    setProducts(res.data);
  } catch (err) {
    console.log(err);
  }
};
    getProducts();
  }, [cat, filters]);

  // useEffect(() => {
  //   cat &&
  //     setFilteredProducts(
  //       products.filter((item) =>
  //         Object.entries(filters).every(([key, value]) =>
  //           item[key].includes(value)
  //         )
  //       )
  //     );
  // }, [products, cat, filters]);
  useEffect(() => {
  cat && 
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key] && item[key].includes(value)
        )
      )
    );
}, [products, cat, filters]);


  useEffect(() => {
    if (sort === "new") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "low") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
    


  return (
    <>
        <div className="containerproduct">
        {cat
            ? filteredProducts.map((product,index)=> (
            <div className="productrows" key={index}>
                <article className="carddd">
                    <div className="content_card">
                        <div className="discont">
                            {product.discount && (<p>{product.discount}% Off</p>)}
                            {/* {product.inStock && (<p style={{ color:'#478B54' }}>In Stock</p>)} */}
                        </div>
                        <div className="rating">
                            <Rating />
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={product.imgprod} className="productimg" alt="Product1"/>
                    </div>
                    <div className="card_content">
                        <div className="title-price">
                            <span className="card_title">{product.title}</span>
                            <span className="price">{product.price}$</span>
                        </div>
                        <span className="card_subtitle"></span>
                        <div className="botton-icon">
                            <button className="SHOW">
                                <Link to={`/product/${product._id}`}>
                                    <span className="show">SHOW<span className="content-button"> PRODUCT</span></span>
                                    <i className="fa-solid fa-magnifying-glass" id="eye"></i>
                                </Link>
                            </button>
                            <button className="ADD">
                                <span className="addtx">ADD<span className="content-button"> TO CARD</span></span>
                                <i className="fa-solid fa-cart-plus" id="basket"></i>
                            </button>
                        </div>
                    </div>
                </article>
            </div>
            )):products.map((product,index) => (
                <div className="productrows" key={index}>
                <article className="carddd">
                    <div className="content_card">
                        <div className="discont">
                            {/* {product.discount ? (<p>{product.discount}% Off</p>):({product.inStock && (<p style={{ color:'#478B54' }}>In Stock</p>)})} */}
                            {product.discount ? (<p>{product.discount}% Off</p>) : (product.inStock && <p style={{ color:'#478B54' }}>In Stock</p>)}

                        </div>
                        <div className="rating">
                            <Rating />
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={product.imgprod} className="productimg" alt="Product1"/>
                    </div>
                    <div className="card_content">
                        <div className="title-price">
                            <span className="card_title">{product.title}</span>
                            <span className="price">{product.price}$</span>
                        </div>
                        <span className="card_subtitle"></span>
                        <div className="botton-icon">
                            <button className="SHOW">
                                <Link to={`/product/${product._id}`}>
                                    <span className="show">SHOW<span className="content-button"> PRODUCT</span></span>
                                    <i className="fa-solid fa-magnifying-glass" id="eye"></i>
                                </Link>
                            </button>
                            <button className="ADD">
                                <span className="addtx">ADD<span className="content-button"> TO CARD</span></span>
                                <i className="fa-solid fa-cart-plus" id="basket"></i>
                            </button>
                        </div>
                    </div>
                </article>
            </div>
            ))}
        </div>
    </>
  );
};

export default ProductList;
