import React, { useState, useEffect } from 'react';
import './SlideBanner.css';

const SlideBanner = () => {
    const [active, setActive] = useState(0);
    const slides = [
      { title: 'Devoluciones y entregas gratuitas.', subtitle: ' Como Member, tienes envíos gratuitos y devoluciones gratuitas en un plazo de 30 días. Obtén más información y únete' },
      { title: 'Más deporte', subtitle: 'Ahorra un 20 % si gastas 100 € y un 25 % si gastas 150 €. Utiliza el código SCORE23 para productos sin rebaja. Se aplican exclusiones.*Comprar * Términos de la promoción' },
    ];
    
    useEffect(() => {
        const timer = setInterval(() => {
          setActive(active === slides.length - 1 ? 0 : active + 1);
        }, 5000);
    
        return () => clearInterval(timer);
      }, [active, slides]);

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