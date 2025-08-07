import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RevenueAccelerator from './pages/RevenueAccelerator';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import VideoSection from './components/VideoSection';
import Results from './components/Results';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <HowItWorks />
                <VideoSection />
                <Results />
                <CTA />
                <Footer />
              </>
            } />
            <Route path="/revenue-accelerator" element={<RevenueAccelerator />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;