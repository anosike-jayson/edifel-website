import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';
import ediFelLogo from '../imgs/ediFel_Logo.png'; 

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeModal = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-transparent py-2 px-3 md:px-16 shadow-lg border-b border-transparent transition-transform duration-300 ${
          showNavBar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="logo">
            <img
              src={ediFelLogo}
              alt="ediFel Logo"
              className="h-10 w-auto md:h-14" 
            />
          </div>
          <button
            onClick={handleToggle}
            className="md:hidden text-3xl"
            aria-label="Toggle Navigation"
          >
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="hidden md:flex space-x-6">
            <Link smooth to="/" className="text-black text-lg hover:text-green-700">Home</Link>
            <Link smooth to="/#about" className="text-black text-lg hover:text-green-700">About</Link> 
            <Link smooth to="/#selectedWorks" className="text-black text-lg hover:text-green-700">Selected works</Link>
            <Link smooth to="/#services" className="text-black text-lg hover:text-green-700">Services</Link>
            <Link to="/contact" className="text-black text-lg hover:text-green-700">Contact Us</Link>
          </div>
        </div>
      </nav>
      {/* Right-Side Modal for mobile navigation */}
      {isNavOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div 
            className="bg-gray-800 text-white fixed top-0 right-0 h-full w-1/2 p-4 space-y-4 text-center transition-transform transform translate-x-0 md:hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
            <Link 
              smooth to="/" 
              className="block text-xl hover:text-green-500"
              onClick={() => setIsNavOpen(false)}
            >
              Home
            </Link>
            <Link 
              smooth to="/#about" 
              className="block text-xl hover:text-green-500"
              onClick={() => setIsNavOpen(false)}
            >
              About
            </Link>
            <Link 
              smooth to="/#selectedWorks" 
              className="block text-xl hover:text-green-500"
              onClick={() => setIsNavOpen(false)}
            >
              Selected works
            </Link>
            <Link 
              smooth to="/#services" 
              className="block text-xl hover:text-green-500"
              onClick={() => setIsNavOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="block text-xl hover:text-green-500"
              onClick={() => setIsNavOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
