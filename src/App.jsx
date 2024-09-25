import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navBar';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Semifooter from './components/SemiFooter';
import LearnMore from './pages/LearnMore';
import SelectedWorks from './pages/SelectedWorks'
import ContactUs from './pages/ContactUs'
import './App.css';

const MainContent = () => {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <Portfolio />
    </>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/learnmore" element={<LearnMore/>} />
        <Route path="/selectedworks" element={<SelectedWorks/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Semifooter/>
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