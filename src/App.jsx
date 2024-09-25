import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navBar';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Consultation from './components/consultation'; // Importing Consultation section
import Semifooter from './components/SemiFooter';
import LearnMore from './pages/LearnMore';
import SelectedWorks from './pages/SelectedWorks';
import ContactUs from './pages/ContactUs';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainContent = () => {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <Consultation /> {/* Adding Consultation section here */}
      <Portfolio />
    </>
  );
};

const AppContent = () => {
  return (
    <div>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/selectedworks" element={<SelectedWorks />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
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
