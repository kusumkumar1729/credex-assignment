import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-background-light to-muted-light dark:from-background-dark dark:to-muted-dark"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-20 top-1/3 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-60 h-60 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 max-w-4xl text-center lg:text-left">
            <span className="inline-block bg-accent/10 dark:text-white dark:text-accent px-4 py-1 rounded-full text-sm font-medium mb-6 animate-fadeIn">
              Maximize the value of your unused software
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-stylish text-primary dark:text-white mb-6 leading-tight animate-fadeInUp">
              Turn Unused Software Licenses Into <span className="dark:text-white">Cash</span>
            </h1>

            <p className="text-lg md:text-xl text-secondary dark:text-muted-light mb-8 animate-fadeInUp animation-delay-100">
              SoftSell helps businesses recoup costs from unused software licenses with a simple, secure, and profitable resale platform.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fadeInUp animation-delay-200">
              <button
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
                onClick={() => scrollToSection('contact')}
              >
                Get Started Now
              </button>
              <button
                className="bg-background-light dark:bg-muted-dark hover:bg-muted-light dark:hover:bg-secondary text-primary dark:text-white border border-muted-light dark:border-muted-dark px-6 py-3 rounded-lg font-medium transition-all"
                onClick={() => scrollToSection('how-it-works')}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 animate-fadeInUp animation-delay-300">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25"></div>
              <div className="relative bg-card rounded-lg shadow-xl p-6">
                <img
                  src="https://miro.medium.com/v2/resize:fit:720/1*dTh0_c_nMimjKjDRjpVTFw.png"
                  alt="Software license management"
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="bg-background-light dark:bg-muted-dark rounded-full p-2 shadow-md hover:shadow-lg transition-all"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} className="text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;