import React from 'react';
import { Menu, X } from 'lucide-react';
import ContactForm from './ContactForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

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

  const location = window.location;

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
          {!isScrolled && (
            <div className="flex items-center pt-20 md:hidden">
              <img
                src="/images/logo-white.png"
                alt="Logo"
                className="h-40 w-auto transition-all duration-300"
              />
            </div>
          )}
          
          <nav className="hidden md:flex items-center gap-x-10 transition-colors duration-300 text-lg tracking-wide uppercase">
            {[
              "Home", "Features", "How It Works", "Plans", "Results"
            ].map((item) => {
              if (item === "Plans") {
                return (
                  <a
                    key={item}
                    href="/revenue-accelerator"
                    className={`transition-colors duration-300 px-2 py-1 rounded-md ${
                      location.pathname === '/how-it-works'
                        ? 'text-gray-900 hover:text-blue-600'
                        : isScrolled
                        ? 'text-gray-900 hover:text-blue-600'
                        : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {item}
                  </a>
                );
              } else if (item === "How It Works") {
                return (
                  <a
                    key={item}
                    href="/how-it-works"
                    className={`transition-colors duration-300 px-2 py-1 rounded-md ${
                      location.pathname === '/how-it-works'
                        ? 'text-gray-900 hover:text-blue-600'
                        : isScrolled
                        ? 'text-gray-900 hover:text-blue-600'
                        : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {item}
                  </a>
                );
              } else {
                const sectionId = item === "Home" ? "hero" : item.replace(/ /g, "-").toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`transition-colors duration-300 px-2 py-1 rounded-md ${
                      location.pathname === '/how-it-works'
                        ? 'text-gray-900 hover:text-blue-600'
                        : isScrolled
                        ? 'text-gray-900 hover:text-blue-600'
                        : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {item}
                  </button>
                );
              }
            })}
            
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
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen 
              ? <X className={`w-7 h-7 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              : <Menu className={`w-7 h-7 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            }
          </button>
        </div>
        
        {isMenuOpen && (
  <div className="fixed inset-0 z-[9999] flex">
    {/* Backdrop for overlay */}
    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
    <nav className="relative flex flex-col items-center pt-24 gap-y-8 w-full">
      
      <button
        className="absolute top-7 right-7 p-2 rounded-full focus:outline-none bg-gray-100 hover:bg-gray-200"
        onClick={() => setIsMenuOpen(false)}
        aria-label="Close menu"
      >
        <X className="w-7 h-7 text-gray-900" />
      </button>
      {[
        "Home", "Features", "How It Works", "Plans", "Results"
      ].map((item) => {
        if (item === "Plans") {
          return (
            <a
              key={item}
              href="/revenue-accelerator"
              className="text-2xl text-gray-900 tracking-wide uppercase hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          );
        } else if (item === "How It Works") {
          return (
            <a
              key={item}
              href="/how-it-works"
              className="text-2xl text-gray-900 tracking-wide uppercase hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          );
        } else {
          const sectionId = item === "Home" ? "hero" : item.replace(/ /g, "-").toLowerCase();
          return (
            <button
              key={item}
              onClick={() => {
                scrollToSection(sectionId);
                setIsMenuOpen(false);
              }}
              className="text-2xl text-gray-900 tracking-wide uppercase hover:text-blue-600 transition-colors"
            >
              {item}
            </button>
          );
        }
      })}
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