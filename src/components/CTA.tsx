import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const CTA = () => {
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to Transform Your Outreach?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join 500+ B2B companies already using Leads N Links to generate more qualified meetings and accelerate their sales pipeline.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
            >
              Book Your Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Get Consultation
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Free consultation
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Custom strategy session
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              ROI analysis included
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

export default CTA;