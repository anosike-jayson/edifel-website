import React, { useEffect, useRef } from 'react';
import { BarChart, FileSearch, Building, Building2, Sun } from 'lucide-react'; // Import relevant SVGs

const Consultation = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Re-trigger animation every time the section is in view
            cards.forEach((card, index) => {
              if (card) {
                card.style.animation = 'none'; // Reset animation
                card.classList.remove('opacity-0'); // Make sure the element is visible
                void card.offsetWidth; // Trigger reflow to reset animation
                card.style.animation = index % 2 === 0 ? 'slideFromLeft 1s ease-in-out' : 'slideFromRight 1s ease-in-out';
              }
            });
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 text-gray-700 py-16" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl lg:text-4xl font-bold mb-4 text-center">
          CONSULTING
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {/* First card sliding from left */}
          <div
            className="col-span-1 opacity-0 transition-opacity duration-500"
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <ServiceCard
              image={<Building size={48}  />} // Top-left SVG
              title="Climate Resilience Hubs"
              description={<> At ediFel we are <strong> PROUD </strong> to provide <strong> TECHNICAL
 </strong> on grant applications for projects throughout North America. Our focus is to provide support
with other team members, ensuring that <strong> DISADVANTAGED COMMUNITIES </strong> are provided with
technical knowledge needed to make informed decisions. </>}
            />
          </div>

          {/* Second card sliding from right */}
          <div
            className="col-span-1 sm:col-span-2 lg:col-span-2 opacity-0 transition-opacity duration-500"
            ref={(el) => (cardRefs.current[1] = el)}
          >
            <ServiceCard
              image={<BarChart size={48} />} // Top-left SVG
              title="Energy Modeling & Life Cycle Cost Analysis"
              description={
                <>
                  We use industry standard computer software to <strong>SIMULATE</strong> & <strong>ANALYZE</strong> buildings. This exercise helps clients make decisions about energy consumption.
                </>
              }
              alignLeft={true}
            />
            <div className="bg-white p-6 rounded-lg shadow-md mt-4">
              <div className="relative">
                <div className="absolute top-0 left-0 p-2">
                  <Building2 size={48} />
                </div>
                <div className="ml-16"> {/* Add margin to create space for the SVG */}
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

          {/* Third card sliding from left */}
          <div
            className="col-span-1 opacity-0 transition-opacity duration-500"
            ref={(el) => (cardRefs.current[2] = el)}
          >
            <ServiceCard
              image={<FileSearch size={48} />} 
              title="Feasibility Study"
              description={ <> Identifying potential issues and challenges at the 
<strong> INITIAL PHASE </strong> of acquiring a building is crucial to the
success of the project down the road. We provide 
<strong> PRELIMINARY INVESTIGATION </strong> into a building project viability. </>}
              alignLeft={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ image, title, description, className, alignLeft = false }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md flex flex-col relative ${alignLeft ? 'items-start' : 'items-center'} w-full ${className}`}>
      {image && (
        <div className="absolute top-0 left-0 p-2">
          {image} {/* Position SVG in top-left */}
        </div>
      )}
      <h4 className="text-2xl font-semibold mb-2 mt-12 text-left w-full">{title}</h4> {/* Add margin to prevent overlap */}
      <div className="text-gray-600 text-left w-full">{description}</div>
    </div>
  );
};

export default Consultation;
