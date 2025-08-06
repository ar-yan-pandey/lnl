import React from 'react';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import ContactForm from './ContactForm';

const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);

  return (
    <>
      <section className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/5 rounded-full blur-lg"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20">
              <CheckCircle className="w-4 h-4 mr-2" />
              AI-Powered B2B Outreach Platform
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Leads N Links :
              <span className="block text-blue-400 mt-2">
                where conversations Turns Into clients.
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Helping large enterprise and fast-growth scale-ups accelerate their transition to a modern B2B outreach approach oriented around business outcomes that matter.
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
            <div className="pt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
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
      </section>
      
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
};

export default Hero;