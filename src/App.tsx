import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RevenueAccelerator from './pages/RevenueAccelerator';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorksPage from './pages/HowItWorks';
import HowItWorksSection from './components/HowItWorks';
import VideoSection from './components/VideoSection';
import Results from './components/Results';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
    });
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {loading && <LoadingScreen />}
      {!loading && (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <HowItWorksSection />
                <VideoSection />
                <Results />
                <CTA />
                <Footer />
              </>
            } />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/revenue-accelerator" element={<RevenueAccelerator />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;