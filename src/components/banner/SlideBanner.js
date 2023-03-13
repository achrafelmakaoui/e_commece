import React, { useState, useEffect, useMemo } from 'react';
import './SlideBanner.css';

const SlideBanner = () => {
    const [active, setActive] = useState(0);
    const slides = useMemo(() => [  { title: 'Step into Ramadan with Style: Get Your Shoes!', subtitle: 'Get ready for Ramadan with our exclusive shoe collection! We have everything you need to step into the month with confidence and style.' },  { title: 'Get 20% off on Air Jordan 1: Exclusive Offer!', subtitle: 'Upgrade your sneaker collection with Air Jordan 1 - now at an exclusive 20% discount! Choose from a variety of styles and colors and step up your sneaker.' },], []);

    useEffect(() => {
    const timer = setInterval(() => {
       setActive(active => active === slides.length - 1 ? 0 : active + 1);
    }, 5000);

    return () => clearInterval(timer);
    }, [slides]);


      return (
        <div className="slide-banner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === active ? 'active' : ''}`}
            >
              
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          ))}
        </div>
      );
    };

export default SlideBanner;