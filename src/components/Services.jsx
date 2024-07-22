import React from 'react';
import image4 from '../imgs/Electricity.jpg';

const servicesData = [
  {
    icon: 'https://www.svgrepo.com/download/428682/architecture-construction-design.svg', 
    title: 'Design',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    id: 'design'
  },
  {
    icon: 'https://www.svgrepo.com/download/28791/electricity.svg',
    title: 'Electrical Services',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    id: 'industrial-design'
  },
  {
    icon: 'https://www.svgrepo.com/download/233699/plumbing-pipe.svg', 
    title: 'Plumbing Services',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    id: 'architecture-support'
  },
  {
    icon: 'https://www.svgrepo.com/download/70931/mechanical-gears.svg', 
    title: 'Mechanical Services',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    id: 'renovation'
  }
];

const Services = () => {
  return (
    <section className="p-16 bg-white" id="services">
      <header className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">OUR SERVICES</h2>
      </header>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 md:row-span-2 flex flex-col justify-center items-center">
          {/* Replace the heading with an image */}
          <img
            src={image4} // Replace with your actual image URL
            alt="Our Services Overview"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        {servicesData.map((service) => (
          <div key={service.id} id={service.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
            <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-lg text-gray-600 mb-4">{service.description}</p>
            <a href={`#${service.id}`} className="inline-flex items-center text-blue-500 hover:text-blue-700">
              More
              <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
