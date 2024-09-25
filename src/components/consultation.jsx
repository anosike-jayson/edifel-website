import React from 'react';
import resilienceLogo from '../imgs/CRC_logo_RGB.png'; // Importing the image
import feasibilityImage from '../imgs/second-slider.jpg'; // Normal image for Feasibility Studies
import energyImage from '../imgs/third-slider.jpg'; // Normal image for Energy Modeling
import { motion } from 'framer-motion'; // Importing framer-motion for animations

const Consultation = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-16 text-gray-900" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Consulting Services
        </motion.h2>

        {/* Climate Resilience Hubs Section */}
        <motion.div 
          className="mb-16 grid lg:grid-cols-2 gap-12 items-center" 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ duration: 0.8 }}
        >
          <img 
            src={resilienceLogo} 
            alt="Climate Resilience Logo" 
            className="w-full max-w-sm object-contain"
          />
          <div>
            <h3 className="text-4xl font-semibold mb-4 text-gray-900">Climate Resilience Hubs</h3>
            <p className="text-gray-700 leading-relaxed">
              At ediFel, we provide technical assistance on grant applications across North America. 
              Our goal is to support disadvantaged communities by ensuring they have the technical knowledge 
              to make informed decisions. This includes projects that focus on climate resilience and ensuring 
              that communities are equipped to handle environmental challenges.
            </p>
          </div>
        </motion.div>

        {/* Feasibility Studies Section */}
        <motion.div 
          className="mb-16 grid lg:grid-cols-2 gap-12 items-center" 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="text-4xl font-semibold mb-4 text-gray-900">Feasibility Studies</h3>
            <p className="text-gray-700 leading-relaxed">
              We conduct preliminary investigations into the viability of building projects, identifying 
              potential challenges and ensuring the success of the project in the early stages. These studies 
              help mitigate risks and provide valuable insights for future project planning.
            </p>
          </div>
          <motion.img 
            src={feasibilityImage} 
            alt="Feasibility Studies" 
            className="w-full max-w-xs object-contain" 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Energy Modeling & Life Cycle Cost Analysis Section */}
        <motion.div 
          className="mb-16 grid lg:grid-cols-2 gap-12 items-center" 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img 
            src={energyImage} 
            alt="Energy Modeling" 
            className="w-full max-w-xs object-contain"
            initial={{ opacity: 0, x: -50, rotate: -10 }} 
            animate={{ opacity: 1, x: 0, rotate: 0 }} 
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <div>
            <motion.h3 
              className="text-4xl font-semibold mb-4 text-gray-900" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Energy Modeling & Life Cycle Cost Analysis
            </motion.h3>
            <motion.p 
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We use advanced software to simulate building designs, helping clients optimize energy consumption. 
              Our life cycle cost analysis helps assess ROI on mechanical, electrical, and plumbing systems, 
              providing a comparison of energy use and savings.
            </motion.p>
          </div>
        </motion.div>

        {/* Green Building Certifications Section */}
        <motion.div 
          className="mb-16 bg-white p-8 shadow-lg rounded-lg" 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-gray-900">Green Building Certifications</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>LEED Accreditations</li>
            <li>Passive House Building Design</li>
            <li>Energy Star</li>
            <li>ComEd</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Consultation;
