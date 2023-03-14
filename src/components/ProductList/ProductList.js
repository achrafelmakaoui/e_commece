import React from "react";
import './ProductList.css';
import Img1 from '../pictures/shoes/Air Jordan 1/air-jordan-1-elevate-low.png'
import NIKELGBl from '../pictures/nike-black.png'
import StarIcon from '@mui/icons-material/Star';

const ProductList=()=>{
 
  return (
    <>
        <div className="containerproduct">

            <div className="productrows">
                <div className="reviewproduct">
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
                </div>
                <div className="imgbann">
                    <img src={Img1} className="productimg" alt="Product1"/>
                </div>
                <div className="productinfo">
                    <h3 className="producttitle">Air Jordan 1</h3>
                    <h5 className="productprice">$$80</h5>
                </div>
            </div>

            <div className="productrows">
                <div className="reviewproduct">
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
                </div>
                <div className="imgbann">
                    <img src={Img1} className="productimg" alt="Product1"/>
                </div>
                <div className="productinfo">
                    <h3 className="producttitle">Air Jordan 1</h3>
                    <h5 className="productprice">$$80</h5>
                </div>
            </div>

            <div className="productrows">
                <div className="reviewproduct">
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
                </div>
                <div className="imgbann">
                    <img src={Img1} className="productimg" alt="Product1"/>
                </div>
                <div className="productinfo">
                    <h3 className="producttitle">Air Jordan 1</h3>
                    <h5 className="productprice">$$80</h5>
                </div>
            </div>

        </div>
    </>
  );
};

export default ProductList;
