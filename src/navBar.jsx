import React from 'react';

const NavBar = () => {
  return (
    <nav className="py-4 px-8 backdrop-blur-sm sticky top-0 z-50 shadow-lg border-b border-gray-200 flex justify-between items-center bg-white">
      <div className="logo">
        <h1 className="text-2xl font-bold">ediFel Architecture</h1>
      </div>
      <div className="nav-links space-x-8">
        <a href="#home" className="text-black text-lg hover:text-green-700">Home</a>
        <a href="#about" className="text-black text-lg hover:text-green-700">About</a>
        <a href="#portfolio" className="text-black text-lg hover:text-green-700">Portfolio</a>
        <a href="#contact" className="text-black text-lg hover:text-green-700">Contact Us</a>
      </div>
    </nav>
  );
};

export default NavBar;
