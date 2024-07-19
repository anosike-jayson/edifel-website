import React from 'react';
import './App.css';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>ediFel</h1>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default NavBar;
