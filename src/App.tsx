import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import VideoSection from './components/VideoSection';
import Results from './components/Results';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <VideoSection />
      <Results />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;