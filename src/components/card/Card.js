import React, { useEffect } from 'react'
import './Card.css'
import NIKELG from '../pictures/nike-white.png'
import img1 from '../pictures/image_1.png'
import img2 from '../pictures/image_2.png'
import img3 from '../pictures/image_3.png'
import Aos from "aos";
import "aos/dist/aos.css"

function Card() {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);

  return (<>
  <br/><br/>
  <h1 className='prd text-center'>PRODUCTS</h1>
  <h3 className='prdtit text-center'>Which type of shoes are you looking for ?</h3>
  <span className='spn'><a className='vmp text- center' href='/#'>View More <i class="fi-rr-arrow-right"></i></a></span>
  <br/>
    <div class="container">
    <div className="card card-yellow" >
      <img className="logo" src={NIKELG} alt='' />
      <h2 className="title">Just <br/> do <br/> it</h2>
      <img className="product" src={img1} alt=''/>
      <div className="price">
        <h6>DH 419,90</h6>
        <h4>DH 299,90</h4>            
      </div>        
      <div className="button-right">
        <button>Show Product</button>
      </div>
    </div>

    <div className="card card-blue" >
      <img className="logo" src={NIKELG}  alt='' />
      <h2 className="title">Just <br/> do <br/> it</h2>
      <img className="product" src={img2}  alt=''/>
      <div className="price">
        <h6>DH 379,59</h6>
        <h4>DH 249,90</h4>            
      </div>        
      <div className="button-right">
        <button>Show Product</button>
      </div>
    </div>

    <div className="card card-red">
      <img className="logo" src={NIKELG}  alt='' />
      <h2 className="title">Just <br/> do <br/> it</h2>
      <img className="product" src={img3}  alt=''/>
      <div className="price">
        <h6>DH 499,49</h6>
        <h4>DH 389,59</h4>            
      </div>        
      <div className="button-right">
        <button>Show Product</button>
      </div>
    </div>
  </div>
  </>
  )
}

export default Card ;