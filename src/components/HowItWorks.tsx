import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Search, MessageSquare, Calendar, Trophy } from 'lucide-react';

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => {
              if (!prev.includes(stepIndex)) {
                return [...prev, stepIndex].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Discover & Verify",
      description: "Our AI scans 200M+ profiles to find your ideal prospects and verifies contact information in real-time.",
      highlight: "95% accuracy guarantee"
    },
    {
      icon: MessageSquare,
      step: "02", 
      title: "Personalized Outreach",
      description: "Multi-channel campaigns with AI-generated personalized messages across email, LinkedIn, and phone.",
      highlight: "3x higher open rates"
    },
    {
      icon: Calendar,
      step: "03",
      title: "Smart Scheduling",
      description: "Automated follow-ups and intelligent scheduling that books qualified meetings directly into your calendar.",
      highlight: "67% booking rate"
    },
    {
      icon: Trophy,
      step: "04",
      title: "Convert & Scale",
      description: "Track performance, optimize campaigns, and scale successful strategies across your entire sales team.",
      highlight: "Average 340% ROI"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-white relative" ref={sectionRef}>
  {/* Minimal plus pattern background */}
  <div
    className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0"
    style={{
      backgroundImage:
        'url("data:image/svg+xml,%3Csvg width=\'28\' height=\'28\' viewBox=\'0 0 28 28\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'14\' cy=\'14\' r=\'1.5\' fill=\'%239ca3af\' fill-opacity=\'0.7\'/%3E%3C/svg%3E")',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      backgroundSize: '32px 32px',
    }}
  />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            How It
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process transforms your outbound sales from manual effort to automated success.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 transform -translate-y-1/2">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000 ease-out"
              style={{ 
                width: `${(visibleSteps.length / steps.length) * 100}%` 
              }}
            ></div>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isDark = !isEven;
              
              return (
                <div 
                  key={index} 
                  ref={el => stepRefs.current[index] = el}
                  data-step={index}
                  className={`relative rounded-3xl p-8 pt-12 shadow-xl transition-all duration-700 group transform overflow-visible
  ${isDark
    ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 hover:shadow-[0_0_64px_24px_rgba(59,130,246,0.55)] hover:ring-2 hover:ring-blue-400'
    : 'bg-gradient-to-br from-blue-50 via-white to-blue-50 hover:shadow-[0_0_48px_16px_rgba(59,130,246,0.18)] hover:ring-2 hover:ring-blue-200'}
  ${visibleSteps.includes(index) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
`}

                  style={{
                    transitionDelay: `${visibleSteps.includes(index) ? index * 200 : 0}ms`
                  }}
                >
                  {/* Decorative background elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 transform translate-x-8 -translate-y-8 ${
                    isDark ? 'bg-white' : 'bg-blue-400'
                  }`}></div>
                  <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-5 transform -translate-x-4 translate-y-4 ${
                    isDark ? 'bg-white' : 'bg-blue-300'
                  }`}></div>
                  
                  {/* Step number */}
                  <div className={`absolute -top-4 left-8 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 shadow-lg ${
                    visibleSteps.includes(index)
                      ? isDark 
                        ? 'bg-white text-blue-600 scale-100'
                        : 'bg-gradient-to-r from-blue-600 to-blue-400 text-white scale-100'
                      : 'bg-gray-300 text-gray-600 scale-90'
                  }`}>
                    {step.step}
                  </div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg ${
                      visibleSteps.includes(index)
                        ? isDark
                          ? 'bg-white/20 backdrop-blur-sm'
                          : 'bg-gradient-to-br from-blue-100 to-blue-200'
                        : 'bg-gray-100'
                    }`}>
                      <step.icon className={`w-8 h-8 transition-colors duration-500 ${
                        visibleSteps.includes(index) 
                          ? isDark ? 'text-white' : 'text-blue-600' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                    
                    <div>
                      <h3 className={`text-2xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{step.title}</h3>
                      <p className={`leading-relaxed mb-6 text-base ${
                        isDark ? 'text-blue-100' : 'text-gray-600'
                      }`}>{step.description}</p>
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500 ${
                        visibleSteps.includes(index)
                          ? isDark
                            ? 'text-blue-600 bg-white/90 opacity-100 translate-x-0 shadow-md'
                            : 'text-green-600 bg-green-50 opacity-100 translate-x-0 border border-green-200'
                          : 'text-gray-400 bg-gray-50 opacity-70 translate-x-2'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          isDark ? 'bg-blue-600' : 'bg-green-500'
                        }`}></div>
                        {step.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;