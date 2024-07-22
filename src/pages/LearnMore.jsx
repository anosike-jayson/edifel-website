import React from 'react';
import { useInView } from 'react-intersection-observer';
import ceoImage from '../imgs/ceo.jpg'; // Ensure the path is correct

const LearnMore = () => {
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative flex flex-col justify-center items-center p-16 bg-gray-100 space-y-16">
      <header className="text-center mb-5">
        <h2 className="text-4xl font-bold text-gray-800">Learn More About Us</h2>
      </header>
      <div className="max-w-screen-xl mx-auto flex flex-col space-y-16">
        <div
          className={`flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 transition-transform duration-1000 ${contentInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          ref={contentRef}
        >
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold">Our Story</h1>
            <hr className="border-gray-300 w-full" />
            <p className="text-lg max-w-lg">
              At ediFel Designs, we pride ourselves on our rich history of delivering innovative architectural solutions. From our humble beginnings to becoming a leading firm in the industry, our journey has been marked by passion, dedication, and a relentless pursuit of excellence.
            </p>
            <p className="text-lg max-w-lg">
              Our team of architects and designers bring together a wealth of experience and creativity, ensuring that every project we undertake is both functional and aesthetically pleasing. We believe in creating spaces that not only meet the needs of our clients but also inspire and uplift them.
            </p>
            <a href="/" className="inline-flex items-center text-blue-500 hover:text-blue-700">
              Back to Home
              <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <img src={ceoImage} alt="CEO" className="w-64 h-64 rounded-full object-cover shadow-lg" />
            <p className="text-center lg:text-left mt-4 text-lg font-semibold">Edi Fel</p>
            <p className="text-center lg:text-left text-sm text-gray-600">CEO, ediFel Designs</p>
          </div>
        </div>
        <div className="relative w-full flex flex-wrap justify-center space-x-8">
          <div className="relative bg-blue-400 p-6 rounded-full shadow-lg m-4 w-80 h-80 flex flex-col justify-center items-center transform transition duration-500 hover:scale-110 hover:shadow-2xl hover:bg-blue-500">
            <h2 className="text-2xl font-bold mb-4 text-white text-shadow-lg">Collaboration</h2>
            <p className="text-center text-white text-shadow-lg text-sm px-4">
              At ediFel Designs our main focus is to design with a collaborative approach. Communication with the owner, bringing their vision to life. With accredited professionals in LEED, WELL and Fitwel; as well as Certified Passive House Designers, we bring a wide variety of knowledge to the design table.
            </p>
          </div>
          <div className="relative bg-green-400 p-6 rounded-full shadow-lg m-4 w-64 h-64 flex flex-col justify-center items-center transform transition duration-500 hover:scale-110 hover:shadow-2xl hover:bg-green-500">
            <h2 className="text-2xl font-bold mb-4 text-white text-shadow-lg">Sustainability</h2>
            <p className="text-center text-white text-shadow-lg text-sm px-4">
              We are forward thinkers and entrepreneurs. Our designs consider efficiency as the main goal. We are always looking to bring new ways to achieve the same result, in the most efficient and green way.
            </p>
          </div>
          <div className="relative bg-yellow-400 p-6 rounded-full shadow-lg m-4 w-64 h-64 flex flex-col justify-center items-center transform transition duration-500 hover:scale-110 hover:shadow-2xl hover:bg-yellow-500">
            <h2 className="text-2xl font-bold mb-4 text-white text-shadow-lg">Innovation</h2>
            <p className="text-center text-white text-shadow-lg text-sm px-4">
              We are forward thinkers and entrepreneurs. Our designs consider efficiency as the main goal. We are always looking to bring new ways to achieve the same result, in the most efficient and green way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
