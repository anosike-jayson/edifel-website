import React from 'react';
import image1 from './imgs/white-slider1.jpg';
import image2 from './imgs/second-slider.jpg';
import image3 from './imgs/white-slider2.jpg';
import image4 from './imgs/white-slide3.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon

const portfolioData = [
    {
        image: image1,
        description: 'Brimingham palace 2028, fossils remain...',
        link: '#portfolio' 
    },
    {
        image: image2,
        description: 'Brimingham palace 2028, fossils remain...',
        link: '#portfolio'
    },
    {
        image: image3,
        description: 'Brimingham palace 2028, fossils remain...',
        link: '#portfolio'
    },
    {
        image: image4,
        description: 'Brimingham palace 2028, fossils remain...',
        link: '#portfolio'
    },
];

const Portfolio = () => {
    return (
        <section className="p-16" id="portfolio">
            <header className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800">PORTFOLIO</h2>
            </header>
            <div className="relative max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {portfolioData.map((item, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={item.image}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                                <div className="absolute inset-0 p-4 flex flex-col justify-end space-y-2">
                                    <p className="text-white text-lg">{item.description}</p>
                                    <a href={item.link} className="flex items-center text-white text-lg">
                                        <span>More</span>
                                        <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
