import React from 'react';
import { Menu, X } from 'lucide-react';
import ContactForm from './ContactForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center -ml-12">
            <img 
              src="/images/logo-bg-rm.png" 
              alt="Leads N Links Logo" 
              className="w-40 h-36 object-contain"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#video" className="text-gray-600 hover:text-gray-900 transition-colors">Plans</a>
            <a href="#video" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
            <a href="#results" className="text-gray-600 hover:text-gray-900 transition-colors">Results</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Book a Demo
            </button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600">Features</a>
              <a href="#how-it-works" className="text-gray-600">How It Works</a>
              <a href="#video" className="text-gray-600">Plans</a>
              <a href="#video" className="text-gray-600">Resources</a>
              <div className="pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setIsContactFormOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 rounded-lg"
                >
                  Book a Demo
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      </header>
      
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
};

export default Header;