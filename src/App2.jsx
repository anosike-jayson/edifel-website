import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navBar';
import Slider from './Slider';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Semifooter from './SemiFooter';
import LearnMore from './LearnMore'; // Import LearnMore component
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Slider />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/learnmore" element={<LearnMore />} />
          {/* Add more routes as needed */}
        </Routes>
        <Services />
        <Portfolio />
        <Semifooter />
      </div>
    </Router>
  );
};

export default App;
