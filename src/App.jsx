import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './navBar';
import Slider from './Slider';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Semifooter from './SemiFooter';
import LearnMore from './LearnMore'; 
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const isLearnMorePage = location.pathname === '/learnmore';

  return (
    <div>
      <NavBar />
      <Slider />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      {!isLearnMorePage && (
        <>
          <Services />
          <Portfolio />
        </>
      )}
      <Semifooter />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
