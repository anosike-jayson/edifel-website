import React from 'react';
import aboutImage from './imgs/About.jpg';


const About = () => {
  return (
    <section className="flex flex-col justify-center items-center p-16 bg-white space-y-16" id="about">
      <header className="text-center mb-5">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
      </header>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-start"><div className="order-1 md:order-1">
        <img src= {aboutImage} alt="About Us" className="w-full h-auto object-cover" />
      </div>
        <div className="max-w-screen-xl w-full flex flex-col space-y-16">
          <div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start space-y-4 md:space-y-0">
            <h1 className="text-3xl font-bold md:order-2">Collaboration</h1>
            <p className="text-lg max-w-lg md:order-2">
              The world is currently moving towards a more sustainable approach to design and we are moving along with it.
              With accredited professionals in LEED, WELL, and Fitwel; as well as Certified Passive House Designers,
              we bring a wide variety of knowledge to the design table.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:flex-row-reverse md:space-x-8 items-center md:items-start space-y-4 md:space-y-0">
            <h1 className="text-3xl font-bold md:order-2">Sustainability</h1>
            <p className="text-lg max-w-lg md:order-2">
              At ediFel Designs our main focus is to design with a collaborative approach.
              Communication with the owner, bringing their vision to life and coordinating
              with other designers.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start space-y-4 md:space-y-0">
            <h1 className="text-3xl font-bold md:order-2">Innovation</h1>
            <p className="text-lg max-w-lg md:order-2">
              We are forward thinkers and entrepreneurs. Our designs consider efficiency as
              the main goal. We are always looking to bring new ways to achieve the same
              result, in the most efficient and green way possible.
            </p>
          </div>
        </div></div>

    </section>
  );
};

export default About;
