import React from 'react'
import './Card.css'
import NIKELG from '../pictures/nike-white.png'
import img1 from '../pictures/image_1.png'
import img2 from '../pictures/image_2.png'
import img3 from '../pictures/image_3.png'

function Card() {
  return (<>
  <br/><br/>
  <h1 className='prd text-center '>PRODUCTS</h1>
  <h3 className='prdtit text-center'>Which type of shoes are you looking for ?</h3>
  <span className='spn'><a className='vmp text-center'>View More <i class="fi-rr-arrow-right"></i></a></span>
  <br/>
    <div class="container">
        
    <div class="card card-yellow">
      <img class="logo" src={NIKELG} />
      <h2 class="title">Just <br/> do <br/> it</h2>
      <img class="product" src={img1}/>
      <div class="price">
        <h6>DH 419,90</h6>
        <h4>DH 299,90</h4>            
      </div>        
      <div class="button-right">
        <button>Show Product</button>
      </div>
    </div>

    <div class="card card-blue">
      <img class="logo" src={NIKELG} />
      <h2 class="title">Just <br/> do <br/> it</h2>
      <img class="product" src={img2}/>
      <div class="price">
        <h6>DH 379,59</h6>
        <h4>DH 249,90</h4>            
      </div>        
      <div class="button-right">
        <button>Show Product</button>
      </div>
    </div>

    <div class="card card-red">
      <img class="logo" src={NIKELG} />
      <h2 class="title">Just <br/> do <br/> it</h2>
      <img class="product" src={img3}/>
      <div class="price">
        <h6>DH 499,49</h6>
        <h4>DH 389,59</h4>            
      </div>        
      <div class="button-right">
        <button>Show Product</button>
      </div>
    </div>
  </div>
  </>
  )
}

export default Card