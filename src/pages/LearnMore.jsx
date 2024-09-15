import React from 'react';
import { useInView } from 'react-intersection-observer';

const LearnMore = () => {
  const { ref: collaborationRef, inView: collaborationInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: sustainabilityRef, inView: sustainabilityInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: innovationRef, inView: innovationInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const sections = [
    {
      title: 'Collaboration',
      content: 'At ediFel Designs our main focus is to design with a collaborative approach. Communication with the owner, bringing their vision to life. With accredited professionals in LEED, WELL, and Fitwel, as well as Certified Passive House Designers, we bring a wide variety of knowledge to the design table.',
      icon: '🤝',
    },
    {
      title: 'Sustainability',
      content: 'We are forward thinkers and entrepreneurs. Our designs consider efficiency as the main goal. We are always looking to bring new ways to achieve the same result, in the most efficient and green way.',
      icon: '🌱',
    },
    {
      title: 'Innovation',
      content: 'We are forward thinkers and entrepreneurs. Our designs consider efficiency as the main goal. We are always looking to bring new ways to achieve the same result, in the most efficient and green way.',
      icon: '💡',
    },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center p-16 bg-gray-100 space-y-16">
      <header className="text-center mb-5">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
      </header>

      <div className="max-w-screen-xl mx-auto flex flex-col space-y-16">
        {/* Collaboration Section */}
        <div
          ref={collaborationRef}
          className={`flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 w-full transition-opacity duration-1000 ${collaborationInView ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Left Box: Collaboration Title and Icon */}
          <div className="bg-white shadow-lg p-8 flex flex-col items-center justify-center w-full lg:w-1/3 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800">{sections[0].title}</h2>
            <div className="mt-4 text-6xl">{sections[0].icon}</div>
          </div>

          {/* Right Box: Collaboration Details */}
          <div className="bg-white shadow-lg p-8 flex flex-col justify-center w-full lg:w-2/3 rounded-lg">
            <p className="text-lg max-w-lg text-gray-700">{sections[0].content}</p>
          </div>
        </div>

        {/* Sustainability Section */}
        <div
          ref={sustainabilityRef}
          className={`flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 w-full transition-opacity duration-1000 ${sustainabilityInView ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Left Box: Sustainability Title and Icon */}
          <div className="bg-white shadow-lg p-8 flex flex-col items-center justify-center w-full lg:w-1/3 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800">{sections[1].title}</h2>
            <div className="mt-4 text-6xl">{sections[1].icon}</div>
          </div>

          {/* Right Box: Sustainability Details */}
          <div className="bg-white shadow-lg p-8 flex flex-col justify-center w-full lg:w-2/3 rounded-lg">
            <p className="text-lg max-w-lg text-gray-700">{sections[1].content}</p>
          </div>
        </div>

        {/* Innovation Section */}
        <div
          ref={innovationRef}
          className={`flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 w-full transition-opacity duration-1000 ${innovationInView ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Left Box: Innovation Title and Icon */}
          <div className="bg-white shadow-lg p-8 flex flex-col items-center justify-center w-full lg:w-1/3 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800">{sections[2].title}</h2>
            <div className="mt-4 text-6xl">{sections[2].icon}</div>
          </div>

          {/* Right Box: Innovation Details */}
          <div className="bg-white shadow-lg p-8 flex flex-col justify-center w-full lg:w-2/3 rounded-lg">
            <p className="text-lg max-w-lg text-gray-700">{sections[2].content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
