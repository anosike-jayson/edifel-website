import React, { useState, useEffect } from 'react';
import image1 from './imgs/first-slider.jpg';
import image2 from './imgs/second-slider.jpg';
import image3 from './imgs/third-slider.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative w-screen h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          <div className="absolute bottom-5 left-5 text-white text-xl bg-black bg-opacity-50 p-2">
            {index === 0 && '#01 EXTERIOR BUILDING'}
            {index === 1 && '#02 AMERICAN BUILDING'}
            {index === 2 && "#03 LOUIE'S RESIDENCES"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
