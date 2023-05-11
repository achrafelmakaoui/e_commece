import React, { useEffect } from 'react'
import './Reviews.css'
import Profil1 from '../pictures/face1.jpg'
import Profil2 from '../pictures/face2.jpg'
import Profil3 from '../pictures/face3.jpg'
import StarIcon from '@mui/icons-material/Star';
import Aos from "aos";
import "aos/dist/aos.css"

const Reviews = () => {

  useEffect(() => {

    // Get the element with id "elementId"
    const element = document.getElementById('Reviews');

    // If the element exists, scroll to it
    if (element) {
      element.scrollIntoView(1000, 0);
      window.scrollTo(0, 0);
    }
  }, []); // Run this effect only once

  useEffect(()=>{
    Aos.init({duration:2000});
 },[]);
  return (
    <div className='reviews' id='Reviews'>
        <br/><br/><br/><br/>
        <h1 className='prd text-center '>Over 500<sup>+</sup>trust us</h1>
        <h3 className='prdtit text-center'>Some reviews from our clients about our products</h3>
        <br/>
        <div className='containerr' data-aos='fade'>
            <div className='row' >
            <div className='col-lg-4 col-md-4 col-sm-12'>
                  <div className="single-box">
                    <span className='star'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span>
                      <div className="img-text">
                        <blockquote><p>Selection and delivery excellent. Shoes fit perfectly and look just like the picture. Highly recommend!</p></blockquote>
                        
                        <div className="img-area">
                          <img src={Profil1} alt=''/>
                        </div>
                        <h2>David Lee</h2>
                        <h6>Software Developer</h6>
                      </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-12'>
                  <div className="single-box">
                    <span className='star'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span>
                      <div className="img-text">
                        <blockquote><p>Easy to navigate, quick checkout. Great shopping experience all around. Will definitely be back for more shoes!</p></blockquote>
                        <div className="img-area">
                          <img src={Profil2} alt=''/>
                          </div>
                        <h2>Sarah Patel</h2>
                        <h6>Nurse</h6>
                      </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className="single-box">
                    <span className='star'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span>
                      <div className="img-text">
                        <blockquote><p>Affordable, high-quality shoes. Love the selection and the app. Would recommend to anyone looking for great footwear.</p></blockquote>
                        <div className="img-area">
                          <img src={Profil3} alt=''/>
                        </div>
                        <h2>Michael Brown</h2>
                        <h6>Marketing Manager</h6>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews