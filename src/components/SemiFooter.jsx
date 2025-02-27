import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { MailIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/outline';
import ediFelLogo from '../imgs/ediFel_Logo.png'; 

const servicesList = [
  { name: 'Mechanical', id: '/#services' },
  { name: 'Electrical', id: '/#services' },
  { name: 'Plumbing', id: '/#services' },
  { name: 'Fire Protection', id: '/#services' }
];

const contactInfo = {
  email: 'info@edifeldesigns.com',
  location: 'Detroit MI, Chicago IL, Laurel MD, Los Angeles CA.',
  phone: '+1 734-358-5142'
};

const Semifooter = () => {
  return (
    <footer className="bg-gray-100 p-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col items-start space-y-4">
        <div className="logo">
          <img
            src={ediFelLogo}
            alt="ediFel Logo"
            className="h-12 w-auto md:h-16" 
          />
        </div>
          <p className="text-lg text-gray-600 max-w-md">
            Welcome to ediFel, where innovation meets excellence. Explore our diverse range of offerings and discover how we can help you achieve your goals.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
          <ul className="space-y-2">
            {servicesList.map((service, index) => (
              <li key={index} className="text-lg text-gray-600">
                <Link smooth to={`${service.id}`} className="text-gray-500 hover:underline">{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-600">
              <MailIcon className="w-6 h-6 text-blue-500 mr-2" />
              <a href={`mailto:${contactInfo.email}`} className="text-gray-500 hover:underline">{contactInfo.email}</a>
            </li>
            <li className="flex items-center text-gray-600">
              <LocationMarkerIcon className="w-6 h-6 text-blue-500 mr-2" />
              {contactInfo.location}
            </li>
            <li className="flex items-center text-gray-600">
              <PhoneIcon className="w-6 h-6 text-blue-500 mr-2" />
              <a href={`tel:${contactInfo.phone}`} className="text-gray-500 hover:underline">{contactInfo.phone}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Semifooter;
