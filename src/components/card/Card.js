import React, { useEffect } from 'react'
import './Card.css'
import NIKELG from '../pictures/nike-white.png'
import img1 from '../pictures/image_1.png'
import img2 from '../pictures/image_2.png'
import img3 from '../pictures/image_3.png'
import Aos from "aos";
import "aos/dist/aos.css"
import ShopBtn from '../ShopNow/ShopNow';
import { Link } from 'react-router-dom'
function Card() {
  useEffect(() => {

    // Get the element with id "elementId"
    const element = document.getElementById('Products');

    // If the element exists, scroll to it
    if (element) {
      element.scrollIntoView(1000, 0);
      window.scrollTo(0, 0);
    }
  }, []); // Run this effect only once

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (<>
  <br id='Products'/><br/><br/><br/>
  <h1 className='prd text-center' id='tit'>PRODUCTS</h1>
  <h3 className='prdtit text-center'>Which type of shoes are you looking for ?</h3>
  <ShopBtn/>
  <br/>
    <div className="container">
        
    <div className="card card-yellow" data-aos='fade'>
      <img className="logo" src={NIKELG} alt=''/>
      <h2 className="title">Just <br/> do <br/> it</h2>
      <img className="product" src={img1} alt=''/>
      <div className="price">
        <h6>$ 249,90</h6>
        <h4>$ 149,90</h4>            
      </div>        
      <div className="button-right">
      <Link to='/product'><button>Show Product</button></Link>
      </div>
    </div>

    <div className="card card-blue" data-aos='fade'>
      <img className="logo" src={NIKELG}  alt=''/>
      <h2 className="title">Just <br/> do <br/> it</h2>
      <img className="product" src={img2}  alt=''/>
      <div className="price">
        <h6>$ 249,90</h6>
        <h4>$ 149,90</h4>
      </div>        
      <div className="button-right">
      <Link to='/product'><button>Show Product</button></Link>
      </div>
    </div>

    <div className="card card-red" data-aos='fade'>
      <img className="logo" src={NIKELG}  alt=''/>
      <h2 className="title">Just <br/> do <br/> it</h2>
      <img className="product" src={img3}  alt=''/>
      <div className="price">
        <h6>$ 249,90</h6>
        <h4>$ 149,90</h4>            
      </div>        
      <div className="button-right">
          <Link to='/product'><button>Show Product</button></Link>
      </div>
    </div>
  </div>
  </>
  )
}

export default Card ;