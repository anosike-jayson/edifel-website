import React from 'react';
import NavBar from './navBar';
import Slider from './Slider';
import Statistics from './Statistics';
import About from './About';
import './App.css';

const App = () => {
  return (
    <div>
    <NavBar />
    <Slider />
    <About/>
    </div>
  );
};

export default App;
