import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="nav-logo text-2xl text-primary dark:text-white hover:text-accent dark:hover:text-accent transition-colors">
                Soft<span className="dark:text-white">Sell</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-primary dark:text-white hover:text-accent dark:hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-primary dark:text-white hover:text-accent dark:hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="text-primary dark:text-white hover:text-accent dark:hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-primary dark:text-white hover:text-accent dark:hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={toggleTheme}
                className="text-primary dark:text-white hover:text-accent dark:hover:text-accent p-2 rounded-full transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="text-primary dark:text-white hover:text-accent dark:hover:text-accent p-2 rounded-full mr-2 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary dark:text-white hover:text-accent dark:hover:text-accent p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-primary dark:text-white hover:text-accent dark:hover:text-accent px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-primary dark:text-white hover:text-accent dark:hover:text-accent px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="block w-full text-left text-primary dark:text-white hover:text-accent dark:hover:text-accent px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-primary dark:text-white hover:text-accent dark:hover:text-accent px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-primary hover:bg-secondary text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;