import React from 'react';
import { Phone, Paintbrush, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      step: 1,
      icon: <Phone className="h-8 w-8" />,
      title: "Free 15-Minute Strategy Call",
      description: "We learn about your business and goals.",
      details: "Quick, focused call to understand your vision, target audience, and success metrics."
    },
    {
      step: 2, 
      icon: <Paintbrush className="h-8 w-8" />,
      title: "We Design & Build",
      description: "You approve the mockup, we launch your site fast.",
      details: "Professional design mockup for approval, then rapid development and testing."
    },
    {
      step: 3,
      icon: <Rocket className="h-8 w-8" />,
      title: "You Start Selling", 
      description: "Your site works 24/7 to bring in leads & sales.",
      details: "Launch day support and ongoing guidance to maximize your website's performance."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            From Idea to Live in Days
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process gets your website launched quickly without compromising on quality.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-white border-4 border-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 relative z-10">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-20">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 font-medium">
                  {step.description}
                </p>
                <p className="text-sm text-gray-500">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your free consultation today and take the first step toward a website that sells.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all">
              Schedule Your Free Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;