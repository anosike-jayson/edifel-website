import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  // Intersection observers for sections
  const { ref: collaborationRef, inView: collaborationInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: sustainabilityRef, inView: sustainabilityInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: innovationRef, inView: innovationInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Content for sections
  const sections = [
    {
      title: "Collaboration",
      content:
        "At ediFel Designs, our main focus is designing with a collaborative approach. We communicate closely with the client, bringing their vision to life. With accredited professionals in LEED, WELL, and Fitwel, as well as Certified Passive House Designers, we offer a wide variety of expertise.",
      icon: "🤝",
    },
    {
      title: "Sustainability",
      content:
        "We are forward-thinking entrepreneurs. Our designs prioritize efficiency and green solutions. We continuously seek new ways to achieve exceptional results while minimizing environmental impact.",
      icon: "🌱",
    },
    {
      title: "Innovation",
      content:
        "Innovation is at the heart of everything we do. We are constantly exploring fresh and efficient methods to design while embracing entrepreneurship and sustainability.",
      icon: "💡",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center p-16 bg-white space-y-16" id="about">
      <header className="text-center mb-5">
        <h2 className="text-4xl font-bold text-gray-800">OUR VALUES</h2>
      </header>
      <div className="max-w-screen-xl mx-auto space-y-16">

        {/* Collaboration Section */}
        <div
          ref={collaborationRef}
          className={`flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-16 transition-transform duration-1000 ${collaborationInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
        >
          {/* Title and Icon in a column */}
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">{sections[0].title}</h1>
            <span className="text-5xl mt-2">{sections[0].icon}</span> {/* Icon directly under title */}
          </div>
          {/* Write-up beside the title and icon with spacing */}
          <p className="text-lg max-w-md text-center sm:text-left">
            {sections[0].content}
          </p>
        </div>

        {/* Sustainability Section */}
        <div
          ref={sustainabilityRef}
          className={`flex flex-col sm:flex-row-reverse items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-16 transition-transform duration-1000 ${sustainabilityInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
        >
          {/* Title and Icon in a column */}
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">{sections[1].title}</h1>
            <span className="text-5xl mt-2">{sections[1].icon}</span> {/* Icon directly under title */}
          </div>
          {/* Write-up beside the title and icon with spacing */}
          <p className="text-lg max-w-md text-center sm:text-left">
            {sections[1].content}
          </p>
        </div>

        {/* Innovation Section */}
        <div
          ref={innovationRef}
          className={`flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-16 transition-transform duration-1000 ${innovationInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
        >
          {/* Title and Icon in a column */}
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">{sections[2].title}</h1>
            <span className="text-5xl mt-2">{sections[2].icon}</span> {/* Icon directly under title */}
          </div>
          {/* Write-up beside the title and icon with spacing */}
          <p className="text-lg max-w-md text-center sm:text-left">
            {sections[2].content}
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
