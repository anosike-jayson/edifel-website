import React, { useState, useEffect } from 'react';
import image1 from '../imgs/white-slider1.jpg';
import image2 from '../imgs/second-slider.jpg';
import image3 from '../imgs/white-slider2.jpg';
import image4 from '../imgs/white-slide3.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3, image4];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide})` }}
        >
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-32">
        <div className="text-white max-w-md space-y-4">
          <h1 className="text-3xl md:text-7xl font-bold text-gray-900" style={{ letterSpacing: '-0.01em' }}>
            Engineering spaces that <br />
            <span className="text-red-600">inspire.</span>
          </h1>
          <p className="text-gray-900 text-lg md:text-xl typewriter">
            Turn your vision into inspiring spaces.
          </p>
          <div className="flex items-center text-gray-900 space-x-2 text-base md:text-lg">
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-1 ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
