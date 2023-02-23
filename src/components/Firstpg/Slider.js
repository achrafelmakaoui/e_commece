import React, { useEffect, useState } from 'react'
import './Slider.css'
import Nike from '../pictures/nike.png'
import AIR_JORADN from '../pictures/airjordan2.png'
import YEEZY from '../pictures/yeezy.png'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
      const slides = [
        {
          image: Nike,
          caption: "NIKE",
          text:'NIKE'
        },
        {
          image: AIR_JORADN,
          caption: "AIRJO",
          text:'AIRJO'
        },
        {
          image: YEEZY,
          caption: "YEEZY",
          text:'YEEZY'
        }
      ];
      useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % slides.length);
        }, 6000);
        return () => clearInterval(intervalId);
        }, [currentSlide, slides.length]);
  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >  
          <span class="parallax-text" text={slide.text}>{slide.caption}</span>
          <img className="shoes" src={slide.image} alt={slide.caption} />
          
        </div>
      ))}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`dot ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider