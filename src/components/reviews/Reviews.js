import React, { useEffect } from 'react'
import './Reviews.css'
import Profil from '../pictures/profil.jpg'
import StarIcon from '@mui/icons-material/Star';
import Aos from "aos";
import "aos/dist/aos.css"

const Reviews = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
 },[]);
  return (
    <div className='reviews' data-aos='fade'>
        <br/><br/>
        <h1 className='prd text-center '>Over 500<sup>+</sup><br/>trust us</h1>
        <h3 className='prdtit text-center'>Some reviews from our clients about our products</h3>
        <br/>
        <div className='containerr'>
            <div className='row' >
            <div className='col-lg-4 col-md-4 col-sm-12'>
                  <div className="single-box">
                    <span className='star'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span>
                      <div className="img-text">
                        <blockquote><p> Because Immer is itself an abstraction layer, it's important to understand why Redux Toolkit uses Immer, and how to use it correctly.</p></blockquote>
                        <div className="img-area">
                          <img src={Profil} alt=''/>
                          </div>
                        <h2>Mouad Eliidrissi</h2>
                        <h6>CEO Largest Fintech Company</h6>
                      </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-12'>
                  <div className="single-box">
                    <span className='star'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span>
                      <div className="img-text">
                        <blockquote><p> Because Immer is itself an abstraction layer, it's important to understand why Redux Toolkit uses Immer, and how to use it correctly.</p></blockquote>
                        <div className="img-area">
                          <img src={Profil} alt=''/>
                          </div>
                        <h2>Mouad Eliidrissi</h2>
                        <h6>CEO Largest Fintech Company</h6>
                      </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className="single-box">
                    <span className='star'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span>
                      <div className="img-text">
                        <blockquote><p> Because Immer is itself an abstraction layer, it's important to understand why Redux Toolkit uses Immer, and how to use it correctly.</p></blockquote>
                        <div className="img-area">
                          <img src={Profil} alt=''/>
                        </div>
                        <h2>Mouad Eliidrissi</h2>
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