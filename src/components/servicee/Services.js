import React, { useEffect } from "react";
import "./Services.css";
import price from "../pictures/price.png";
import support from "../pictures/support.png";
import software from "../pictures/software.png";
import shield from "../pictures/shield.png";
import Aos from "aos";
import "aos/dist/aos.css"

const services = [
  {
    title: "Lifetime Guarantee",
    image: shield,
    description:'Enjoy peace of mind with our lifetime guarantee, ensuring the longevity of your purchase.',
  },
  {
    title: "Good price",
    image: price,
    description:'Experience the best value for your money with our competitively priced products and services.',
  },
  {
    title: "Free Software Updates",
    image: software,
    description:'Stay up-to-date with the latest advancements with our complimentary software updates.',
  },
  {
    title: "24/7 Support",
    image: support,
    description:'Our dedicated support team is available around the clock to assist with any questions or concerns.',
  },
];
function Services(){
  useEffect(()=>{
    Aos.init({duration:2000});
 },[]);
  return(
  <div className="services" id="services" data-aos='fade'>
     <br/><br/>
  <h1 className='prd text-center '>SERVICES</h1>
  <h3 className='prdtit text-center'>We provide more than shoes products !</h3>
  <span className='spn'><a className='vmp text-center' href='/#'>View More <i class="fi-rr-arrow-right"></i></a></span>
    <div className="items" >
      {services.map(({ title, image,description }, index) => (
        <div className="wrapper" key={index}>
          <div className="service">
            <img src={image} alt={title} />
            <div className="content">
              <p className="title">{title}</p>
              <p className="description">
                {description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
};

export default Services;
