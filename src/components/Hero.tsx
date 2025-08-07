import React from 'react';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import ContactForm from './ContactForm';

const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);

  return (
    <>
      <section className="pt-16 relative overflow-hidden min-h-[560px] flex items-stretch">
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
        {/* Background image right, gradient blend left */}
        <div className="absolute inset-0 w-full h-full flex">
          <div className="w-1/2 h-full bg-black"></div>
          <div className="w-1/2 h-full relative">
            <img 
              src="/images/bg.png" 
              alt="Background" 
              className="object-cover w-full h-full"
              style={{objectPosition: 'right center'}}
            />
            {/* Gradient overlay for blend */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/60 to-black"></div>
          </div>
        </div>
        <div className="relative z-10 flex-1 flex items-center justify-start">
          <div className="max-w-3xl w-full px-4 sm:px-8 py-24 text-left mr-auto">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none select-none">
              <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/5 rounded-full blur-lg"></div>
            </div>
            {/* Hero Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                AI-Powered B2B Outreach Platform
              </div>
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
                Get Pre-Qualified, <br />Ready-to-Talk Leads
              </h1>
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl">
                We help B2B companies book qualified sales appointments and provide verified prospect data. Stop chasing cold leads and start closing warm prospects.
              </p>
              {/* CTA Button */}
              <div className="pt-8">
                <button 
                  onClick={() => setIsContactFormOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
                >
                  Talk to an Expert Today
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              {/* Trust indicators */}
              <div className="pt-12 flex flex-wrap justify-start items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  Free Strategy Session
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  Custom Implementation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  Guaranteed Results
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
};

export default Hero;