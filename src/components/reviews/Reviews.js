import React from 'react'
import './Reviews.css'
const Reviews = () => {
  return (
    <div className='reviews'>
        <br/><br/>
        <h1 className='prd text-center '>Over 500<sup>+</sup> people trust us</h1>
        <h3 className='prdtit text-center'>Some reviews from our clients about our products</h3>
        <span className='star'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
        <br/>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12'></div>
            </div>
        </div>
    </div>
  )
}

export default Reviews