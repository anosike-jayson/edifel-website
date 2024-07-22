import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import NavBar from './components/navBar';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Semifooter from './components/SemiFooter';
import LearnMore from './pages/LearnMore';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const isLearnMorePage = location.pathname === '/learnmore';

  return (
    <div>
      <NavBar />
      {!isLearnMorePage && <Slider />}
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
      {!isLearnMorePage && <Semifooter />}
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
