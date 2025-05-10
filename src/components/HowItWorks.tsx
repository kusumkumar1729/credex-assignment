import React from 'react';
import { Upload, DollarSign, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Upload License',
    description: 'Easily upload your unused software licenses through our secure platform.',
    icon: Upload,
    color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
  },
  {
    id: 2,
    title: 'Get Valuation',
    description: 'Receive an instant market-based valuation of your licenses based on current demand.',
    icon: CheckCircle,
    color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
  },
  {
    id: 3,
    title: 'Get Paid',
    description: 'Once sold, receive payment directly to your preferred payment method within 48 hours.',
    icon: DollarSign,
    color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It <span className="text-teal-600 dark:text-teal-400">Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Our streamlined process makes selling your unused software licenses simple, secure, and profitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="relative flex flex-col items-center p-6 lg:p-8 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <step.icon size={32} />
              </div>
              
              <span className="absolute -top-4 -left-4 flex items-center justify-center w-8 h-8 bg-teal-600 dark:bg-teal-500 text-white rounded-full text-sm font-bold">
                {step.id}
              </span>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-center text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="currentColor" className="text-gray-400 dark:text-gray-500" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;