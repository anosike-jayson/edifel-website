import React from 'react';
import NavBar from './navBar';
import Slider from './Slider';
import Statistics from './Statistics';
import About from './About';
import Services from './Services';
import Semifooter from './SemiFooter';
import Portfolio from './Portfolio';
import './App.css';

const App = () => {
  return (
    <div>
    <NavBar />
    <Slider />
    <About />
    <Services />
    <Portfolio />
    <Semifooter />
    
    </div>
  );
};

export default App;
