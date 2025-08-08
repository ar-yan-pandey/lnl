import React, { useEffect, useState } from "react";

// Typewriter effect for brand text
const TypewriterText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span className={`text-white font-extrabold ${className}`}>{displayed}<span className="animate-blink text-white">|</span></span>
  );
};

const LoadingScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [hide, setHide] = useState(false);
  const [expandLine, setExpandLine] = useState(false);
  useEffect(() => {
    // Start expanding the line after typewriter finishes
    const typeTime = 70 * "Leads N Links".length + 300;
    const expandTimer = setTimeout(() => setExpandLine(true), typeTime);
    // Hide loader after full reveal
    const hideTimer = setTimeout(() => {
      setHide(true);
      if (onFinish) onFinish();
    }, typeTime + 1200);
    return () => {
      clearTimeout(expandTimer);
      clearTimeout(hideTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black transition-opacity duration-700 ${hide ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ minHeight: '100vh' }}
    >
      {/* Center Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-blue-500 opacity-40 blur-3xl" style={{background: 'radial-gradient(circle, #3b82f6 0%, #1e3a8a 60%, transparent 100%)'}} />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
          <TypewriterText text="Leads N Links" />
        </h1>
        {/* Animated white line under text */}
        <div className="relative w-full flex justify-center h-8 mb-2">
          <div className={`h-1 bg-white rounded-full transition-all duration-700 ease-in-out origin-center ${expandLine ? 'w-[320px] md:w-[420px] lg:w-[540px] scale-x-100' : 'w-0 scale-x-0'}`}></div>
        </div>
        <p className="text-lg text-blue-200 font-medium animate-pulse mt-6">Loading your B2B growth engine...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;

// Tailwind animation (add to tailwind.config.js if not present):
// theme: { extend: { animation: { 'gradient-x': 'gradient-x 2s ease-in-out infinite' }, keyframes: { 'gradient-x': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } } } } }
