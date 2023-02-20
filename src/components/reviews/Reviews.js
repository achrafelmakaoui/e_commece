import React from 'react'
import './Reviews.css'
import Profil from '../pictures/profil.jpg'
const Reviews = () => {
  return (
    <div className='reviews'>
        <br/><br/>
        <h1 className='prd text-center '>Over 500<sup>+</sup> people trust us</h1>
        <h3 className='prdtit text-center'>Some reviews from our clients about our products</h3>
        <br/>
        <div className='containerr'>
            <div className='row'>
            <div className='col-md-4'>
                  <div className="single-box">
                    <span className='star'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                      <div className="img-text">
                        <blockquote><p> Because Immer is itself an abstraction layer, it's important to understand why Redux Toolkit uses Immer, and how to use it correctly.</p></blockquote>
                        <div className="img-area">
                          <img src={Profil} alt=''/>
                          </div>
                        <h2>client name</h2>
                        <h6>CEO Largest Fintech Company</h6>
                      </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className="single-box">
                    <span className='star'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                      <div className="img-text">
                        <blockquote><p> Because Immer is itself an abstraction layer, it's important to understand why Redux Toolkit uses Immer, and how to use it correctly.</p></blockquote>
                        <div className="img-area">
                          <img src={Profil} alt=''/>
                          </div>
                        <h2>client name</h2>
                        <h6>CEO Largest Fintech Company</h6>
                      </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className="single-box">
                    <span className='star'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                      <div className="img-text">
                        <blockquote><p> Because Immer is itself an abstraction layer, it's important to understand why Redux Toolkit uses Immer, and how to use it correctly.</p></blockquote>
                        <div className="img-area">
                          <img src={Profil} alt=''/>
                          </div>
                        <h2>client name</h2>
                        <h6>CEO Largest Fintech Company</h6>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews