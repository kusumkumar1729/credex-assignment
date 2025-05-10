import React from 'react';
import { ShieldCheck, DollarSign, Clock, UsersRound } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Secure Transactions',
    description: 'Our platform uses enterprise-grade encryption and secure payment processing for complete peace of mind.',
    icon: ShieldCheck,
    color: 'text-indigo-600 dark:text-indigo-400',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
  },
  {
    id: 2,
    title: 'Maximize Value',
    description: 'Get up to 70% of the original purchase price for your unused software licenses.',
    icon: DollarSign,
    color: 'text-teal-600 dark:text-teal-400',
    bgColor: 'bg-teal-100 dark:bg-teal-900/30',
  },
  {
    id: 3,
    title: 'Fast Processing',
    description: 'Most transactions complete within 48 hours, with funds deposited directly to your account.',
    icon: Clock,
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
  },
  {
    id: 4,
    title: 'Dedicated Support',
    description: 'Our team of experts is available 24/7 to assist with any questions or concerns.',
    icon: UsersRound,
    color: 'text-rose-600 dark:text-rose-400',
    bgColor: 'bg-rose-100 dark:bg-rose-900/30',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-teal-600 dark:text-teal-400">SoftSell</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We're committed to providing the most secure, profitable, and user-friendly software license resale experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={feature.color} size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;