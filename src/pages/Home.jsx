import React from 'react';
import NavBar from './components/navBar';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import './App.css';
import Semifooter from '../components/SemiFooter';
const Homepage = () => {
    return (
        <div>
            <Slider />
            <About />
            <Services />
            <Portfolio />
        </div>
    );
};

export default Homepage;