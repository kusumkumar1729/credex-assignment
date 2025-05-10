import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "SoftSell transformed our approach to managing software assets. We recouped over $50,000 from unused licenses that would have otherwise gone to waste. The process was incredibly simple and secure.",
    author: "Jennifer Martinez",
    position: "CTO, TechVision Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 2,
    content: "As a growing startup, every dollar counts. SoftSell helped us recover significant costs from software licenses we no longer needed. The valuation was fair and the payment was prompt. Highly recommended!",
    author: "Marcus Johnson",
    position: "Operations Manager, Startup Ventures",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-teal-600 dark:text-teal-400">Customers Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Don't take our word for it — see what businesses like yours have achieved with SoftSell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 relative"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                <Quote size={20} />
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-teal-500"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;