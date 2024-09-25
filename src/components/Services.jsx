import React from 'react';
import image4 from '../imgs/Electricity.jpg';

const servicesData = [
  {
    icon: 'https://www.svgrepo.com/download/70931/mechanical-gears.svg', 
    title: 'Mechanical Services',
    description: '•Heating, ventilation and cooling load circulation\n•Equipment sizing\n•Ductwork design and distribution',
    id: 'renovation'
  },
  {
    icon: 'https://www.svgrepo.com/download/28791/electricity.svg',
    title: 'Electrical Services',
    description: '•Buiding electrical distribution design\n•Electrical load calculation\n•Panel board sizing\n•Emergency generator\n',
    id: 'industrial-design'
  },
  {
    icon: 'https://www.svgrepo.com/download/233699/plumbing-pipe.svg', 
    title: 'Plumbing Services',
    description: '•Domestic water heater sizing\n•Fixture selections\n•Passive house design\n•Pipe sizing and distribution\n•Gas piping design',
    id: 'architecture-support'
  },
  {
    icon: 'https://www.svgrepo.com/show/383763/security-protection-shield-fire-flame.svg', 
    title: 'Fire Protection',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    id: 'design'
  }
];

const Services = () => {
  return (
    <section className="p-16 bg-white" id="services">
      <header className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">DESIGN SERVICES</h2>
      </header>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 md:row-span-2 flex flex-col justify-center items-center">
          <img
            src= '/MEP.png' 
            alt="Our Services Overview"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {servicesData.map((service) => (
          <div key={service.id} id={service.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
            <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-lg text-gray-600 mb-4" style={{ whiteSpace: 'pre-line' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
