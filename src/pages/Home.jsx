import React from 'react';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import SelectedWork from './components/Portfolio';
import './App.css';
import Locations from './components/Location';
const Homepage = () => {
    return (
        <div>
            <Slider />
            <About />
            <Services />
            <SelectedWork />
            <Locations/>
        </div>
    );
};

export default Homepage;