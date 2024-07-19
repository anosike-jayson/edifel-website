import React, { useState, useEffect } from 'react';
import './Slider.css';
import image1 from './imgs/first-slider.jpg';
import image2 from './imgs/second-slider.jpg';
import image3 from './imgs/third-slider.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          <div className="caption">
            {index === 0 && '#01 EXTERIOR BUILDING'}
            {index === 1 && '#02 AMERICAN BUILDING'}
            {index === 2 && '#03 LOUIE\'S RESIDENCES'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
