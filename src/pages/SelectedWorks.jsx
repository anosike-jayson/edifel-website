import React, { useState, useRef, useEffect } from 'react';
import { OfficeBuildingIcon, HomeIcon } from '@heroicons/react/outline';
import Semifooter from '../components/SemiFooter'

const SelectedWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState('residential');
  const [selectedResidentialCollection, setSelectedResidentialCollection] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Sample collections for commercial and residential works
  const residentialCollections = [
    {
      id: 1,
      name: 'Garfield Multi-Family',
      images: [
        { id: 1, src: '/Residential/Garfield/IMG_9159.jpg', alt: 'Office Building 1', description: 'Garfield multi family exterior and interior, both electric fitings and water fitings.' },
      ],
      subCollections: [
        { id: 1, src: '/Residential/Garfield/IMG_9217.jpg' },
        { id: 2, src: '/Residential/Garfield/IMG_9167.jpg' },
        { id: 3, src: '/Residential/Garfield/IMG_9168.jpg' },
        { id: 4, src: '/Residential/Garfield/IMG_9172.jpg' },
        { id: 5, src: '/Residential/Garfield/IMG_9173.jpg' },
        { id: 6, src: '/Residential/Garfield/IMG_9175.jpg' },
        { id: 7, src: '/Residential/Garfield/IMG_9176.jpg' },
        { id: 8, src: '/Residential/Garfield/IMG_9157.jpg' },
        { id: 9, src: '/Residential/Garfield/IMG_9225.jpg' },
        { id: 10, src: '/Residential/Garfield/IMG_9235.jpg' },
        { id: 11, src: '/Residential/Garfield/IMG_9229.jpg' },
        { id: 12, src: '/Residential/Garfield/IMG_9227.jpg' },
      ],
    },
    {
      id: 2,
      name: 'Glenview Residence',
      images: [
        { id: 1, src: '/Residential/Glenview/IMG_8982.jpg', alt: 'Shopping Mall 1' },
      ],
      subCollections: [
        { id: 1, src: '/Residential/Glenview/IMG_8994.jpg' },
        { id: 2, src: '/Residential/Glenview/IMG_8992.jpg' },
      ],
    },
    {
      id: 3,
      name: 'Green Street',
      images: [
        { id: 1, src: '/Residential/Green/IMG_9148.jpg', alt: 'Shopping Mall 1' },
      ],
      subCollections: [
        { id: 1, src: '/Residential/Green/IMG_9146.jpg' },
        { id: 2, src: '/Residential/Green/IMG_9144.jpg' },
      ],
    },
    {
      id: 4,
      name: 'Lake Plains',
      images: [
        { id: 1, src: '/Residential/Lake/image2.png', alt: 'Shopping Mall 1' },
      ],
      subCollections: [
        { id: 1, src: '/Residential/Lake/image2.png' },
        { id: 2, src: '/Residential/Lake/image1.png' },
      ],
    },
    // Add more collections as needed
  ];

  const commercialImages = [
    { id: 1, src: '/images/residential1.jpg' },
    { id: 2, src: '/images/residential2.jpg' },
    { id: 3, src: '/images/residential3.jpg' },
    // Add more images as needed
  ];

  const ImageCard = ({ image, name, onClick }) => (
    <div
      className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px]"
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
        <p className="text-white text-lg font-semibold">{name}</p>
        <p className="text-white text-sm">
          {image.description}
        </p>
      </div>
    </div>
  );

  const renderResidential = () => {
    if (selectedResidentialCollection) {
      return (
        <div>
          <button onClick={() => setSelectedResidentialCollection(null)} className="mb-4 text-blue-500">
            ← Back to Residential Collections
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
            {selectedResidentialCollection.subCollections.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                name={image.alt}
              />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
        {residentialCollections.map((collection) => (
          <ImageCard
            key={collection.id}
            image={collection.images[0]}
            name={collection.name}
            onClick={() => setSelectedResidentialCollection(collection)}
          />
        ))}
      </div>
    );
  };

  const renderImages = () => {
    if (selectedCategory === 'residential') {
      return renderResidential();
    }
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
        {commercialImages.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            name={image.alt}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative flex h-screen">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`bg-gray-100 h-full p-6 fixed top-16 z-40 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20 shadow-none' : 'w-64 shadow-2xl'
          }`}
      >
        <button
          onClick={handleSidebarToggle}
          className="p-2 mb-4 bg-gray-300 rounded"
        >
          {isCollapsed ? '→' : '←'} {/* Toggle button */}
        </button>

        <ul>
          <li
            onClick={() => {
              setSelectedCategory('residential');
              setSelectedResidentialCollection(null);
            }}
            className={`cursor-pointer p-3 mb-2 rounded flex items-center ${selectedCategory === 'residential'
                ? 'bg-green-500 text-white'
                : 'text-gray-700 hover:bg-gray-200'
              }`}
          >
            <HomeIcon className="h-6 w-6" /> {/* Icon */}
            {!isCollapsed && ' Residential'} {/* Name when expanded */}
          </li>
          <li
            onClick={() => {
              setSelectedCategory('commercial');
              setSelectedCommercialCollection(null);
            }}
            className={`cursor-pointer p-3 mb-2 rounded flex items-center ${selectedCategory === 'commercial'
                ? 'bg-green-500 text-white'
                : 'text-gray-700 hover:bg-gray-200'
              }`}
          >
            <OfficeBuildingIcon className="h-6 w-6" /> {/* Icon */}
            {!isCollapsed && ' Commercial'} {/* Name when expanded */}
          </li>
        </ul>
      </div>


      {/* Main content */}
      <div className="flex-grow p-6 mt-16 ml-20">
        <h1 className="text-2xl font-semibold mb-6">
          {selectedCategory === 'residential' && !selectedResidentialCollection ? 'Residential Works' :
            selectedCategory === 'residential' && selectedResidentialCollection ? selectedResidentialCollection.name :
              'Commercial Collection'}
        </h1>
        {renderImages()}
      </div>
    </div>
  );
};

export default SelectedWorks;