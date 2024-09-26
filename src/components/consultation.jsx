import React from 'react';
import { BarChart, FileSearch } from 'lucide-react';

const Consultation = () => {
  return (
    <div className="bg-gray-100 text-gray-700 py-16">
      <div className="container mx-auto px-6 lg:px-8">

        <h1 className="text-4xl lg:text-4xl font-bold mb-4 text-center">
          CONSULTING
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          <ServiceCard
            image={<img src="/CRC_logo_RGB.png" alt="Consulting" className="w-full h-auto" />}
            title="Climate Resilience Hubs"
            description="At ediFel we are PROUD to provide TECHNICAL ASSISTANCE on grant applications for projects throughout North America. Our focus is to provide support with other team members, ensuring that DISADVANTAGED COMMUNITIES are provided with technical knowledge needed to make informed decisions."
            className="col-span-1"
          />
          <div className="col-span-1 sm:col-span-2 lg:col-span-2"> 
            <ServiceCard
              image={<BarChart size={48} />}
              title="Energy Modeling & Life Cycle Cost Analysis"
              description="We use industry standard computer software to SIMULATE & ANALYZE buildings. This exercise is needed to help clients make decisions about energy consumption when adding or removing various KEY COMPONENTS within the building design process. The life cycle cost analysis is provided and used to discuss ROI on MEPFP equipment purchases. This helps the team make informed decisions by comparing energy use, first costs and savings with multiple SYSTEM ANALYSIS."
              alignLeft={true}
            />
            <div className="bg-white p-6 rounded-lg shadow-md mt-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <img src="/Seal_of_the_United_States_Environmental_Protection_Agency.svg.png" alt="Green Building Certifications" className="w-16 h-16" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">GREEN BUILDING CERTIFICATIONS</h4>
                  <ul className="text-gray-600 list-disc list-inside">
                    <li>LEED ACCREDITATIONS</li>
                    <li>PASSIVE HOUSE BUILDING DESIGN</li>
                    <li>ENERGY STAR</li>
                    <li>COMED</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ServiceCard
            image={<FileSearch size={48} />}
            title="Feasibility Study"
            description="Identifying potential issues and challenges at the INITIAL PHASE of acquiring a building is crucial to the success of the project down the road. We provide PRELIMINARY INVESTIGATION into a building project viability."
            className="col-span-1"
            alignLeft={true}
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ image, title, description, className, alignLeft = false }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md flex flex-col ${alignLeft ? 'items-start' : 'items-center'} w-full ${className}`}>
      {image && (
        <div className="mb-4 p-3 rounded-full">
          {image}
        </div>
      )}
      <h4 className="text-2xl font-semibold mb-2 text-left w-full">{title}</h4>
      <div className="text-gray-600 text-left w-full">{description}</div>
    </div>
  );
};

export default Consultation;
