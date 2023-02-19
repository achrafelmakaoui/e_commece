import React, { useState , useEffect} from "react";
import './Slider.css'
import img1 from '../pictures/donut.png'
import img2 from '../pictures/nike.png'
import img3 from '../pictures/profil.jpg'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img1,
      caption: "Caption1"
    },
    {
      image: img2,
      caption: "Caption 2"
    },
    {
      image: img3,
      caption: "Caption 3"
    }
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
    setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalId);
    }, [currentSlide, slides.length]);
  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.caption} />
          <p>{slide.caption}</p>
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
  );
};

export default Slider;
