import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import aboutImage from '../imgs/third-slider.jpg';

const About = () => {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: coreValuesRef, inView: coreValuesInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="flex flex-col justify-center items-center p-16 bg-white space-y-16" id="about">
      <header className="text-center mb-5">
        <h2 className="text-4xl font-bold text-gray-800">ABOUT US</h2>
      </header>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="order-1 md:order-1">
          <img
            src={aboutImage}
            alt="About Us"
            ref={imageRef}
            className={`w-full h-auto object-cover transition-opacity duration-1000 ${imageInView ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        <div className="max-w-screen-xl w-full flex flex-col space-y-16">
          <div
            className={`flex flex-col space-y-4 transition-transform duration-1000 ${coreValuesInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            ref={coreValuesRef}
          >
            <h1 className="text-3xl font-bold">Core Values</h1>
            <hr className="border-gray-300 w-full" />
            <p className="text-lg max-w-lg">
              At ediFel Designs our main focus is to design with a collaborative approach. Communication with the owner, bringing their vision to life and coordinating with other designers.
              We are forward thinkers and entrepreneurs. Our designs consider efficiency as the main goal. We are always looking to bring new ways to achieve the same result, in the most efficient and green way possible.
            </p>
            <Link to="/learnmore" className="inline-flex items-center text-blue-500 hover:text-blue-700inline-flex items-center text-blue-500 hover:text-blue-700">
              Learn More
              <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
