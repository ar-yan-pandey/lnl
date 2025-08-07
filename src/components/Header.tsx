import React from 'react';
import { Menu, X } from 'lucide-react';
import ContactForm from './ContactForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100'
            : 'bg-transparent border-none'}
        `}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center -ml-12">
          </div>
          
          <nav className="hidden md:flex items-center gap-x-10 font-bold transition-colors duration-300 text-lg">
            {["Home", "Features", "How It Works", "Plans", "Resources", "Results"].map((item) => (
  <a
    key={item}
    href={item === "Plans" ? "/revenue-accelerator" : (item === "Home" ? "/#hero" : `/#${item.replace(/ /g, "-").toLowerCase()}`)}
    className={`transition-colors duration-300 px-2 py-1 rounded-md ${
      isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"
    }`}
  >
    {item}
  </a>
))}
            
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
          <nav className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center pt-24 gap-y-8 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {["Home", "Features", "How It Works", "Plans", "Resources", "Results"].map((item) => (
  <a
    key={item}
    href={item === "Plans" ? "/revenue-accelerator" : (item === "Home" ? "/#hero" : `/#${item.replace(/ /g, "-").toLowerCase()}`)}
    className="text-2xl text-gray-900 font-semibold hover:text-blue-600 transition-colors"
    onClick={() => setIsMenuOpen(false)}
  >
    {item}
  </a>
))}
            <button
              onClick={() => {
                setIsContactFormOpen(true);
                setIsMenuOpen(false);
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-lg mt-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Book a Demo
            </button>
          </nav>
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