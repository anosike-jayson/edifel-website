import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-transparent py-4 px-4 md:px-20 shadow-lg border-b border-transparent transition-transform duration-300 ${
        showNavBar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="logo">
          <img
            src={ediFelLogo}
            alt="ediFel Logo"
            className="h-12 w-auto md:h-16" // Adjust height to make logo larger
          />
        </div>
        <button
          onClick={handleToggle}
          className="md:hidden text-3xl"
          aria-label="Toggle Navigation"
        >
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`nav-links space-x-8 md:flex ${isNavOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="text-black text-xl hover:text-green-700">Home</Link>
          <Link to="/#about" className="text-black text-xl hover:text-green-700">About</Link>
          <Link to="/#portfolio" className="text-black text-xl hover:text-green-700">Portfolio</Link>
          <Link to="/#services" className="text-black text-xl hover:text-green-700">Services</Link>

          <Link to="ContactUs" className="text-black text-xl hover:text-green-700">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
