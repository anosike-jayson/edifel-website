import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Custom hook for typewriter effect
const useTypewriterEffect = (text, inView, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (inView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex += 1;
        if (currentIndex >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }
  }, [inView, text, speed]);

  return displayedText;
};

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
      content: 'We are always looking to bring new ways to achieve the same result in the most efficient and green way. Forward-thinking and entrepreneurship are at the heart of our innovative approaches.',
      icon: '💡',
    },
  ];

  // Use the custom typewriter effect hook
  const collaborationText = useTypewriterEffect(sections[0].content, collaborationInView, 30);
  const sustainabilityText = useTypewriterEffect(sections[1].content, sustainabilityInView, 30);
  const innovationText = useTypewriterEffect(sections[2].content, innovationInView, 30);

  return (
    <section className="relative flex flex-col justify-center items-center p-16 bg-gray-100 space-y-16">
      <header className="text-center mb-10 mt-16"> {/* Added 'mt-16' to push it further down */}
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
      </header>

      <div className="max-w-screen-xl mx-auto flex flex-col space-y-16">
        {/* Collaboration Section */}
        <div
          ref={collaborationRef}
          className={`flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 w-full transition-all duration-1000 transform ${collaborationInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
            <h2 className="text-3xl font-bold text-gray-800">{sections[0].title}</h2>
            <div className="mt-4 text-6xl transition-transform duration-500 hover:scale-110">{sections[0].icon}</div>
          </div>
          <div className="flex flex-col justify-center w-full lg:w-2/3">
            <p className="text-lg max-w-lg text-gray-700 transition-opacity duration-700">{collaborationText}</p>
          </div>
        </div>

        {/* Sustainability Section */}
        <div
          ref={sustainabilityRef}
          className={`flex flex-col-reverse lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 w-full transition-all duration-1000 transform ${sustainabilityInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col justify-center w-full lg:w-2/3">
            <p className="text-lg max-w-lg text-gray-700 transition-opacity duration-700">{sustainabilityText}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
            <h2 className="text-3xl font-bold text-gray-800">{sections[1].title}</h2>
            <div className="mt-4 text-6xl transition-transform duration-500 hover:scale-110">{sections[1].icon}</div>
          </div>
        </div>

        {/* Innovation Section */}
        <div
          ref={innovationRef}
          className={`flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 w-full transition-all duration-1000 transform ${innovationInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
            <h2 className="text-3xl font-bold text-gray-800">{sections[2].title}</h2>
            <div className="mt-4 text-6xl transition-transform duration-500 hover:scale-110">{sections[2].icon}</div>
          </div>
          <div className="flex flex-col justify-center w-full lg:w-2/3">
            <p className="text-lg max-w-lg text-gray-700 transition-opacity duration-700">{innovationText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
