import React from 'react';
import { Zap, Target, Smartphone, Settings, TrendingUp } from 'lucide-react';

const HowWeHelp = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Average 2.1s load time",
      description: "98% faster than competitor sites (Google PageSpeed verified)"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "340% average conversion boost", 
      description: "AI-powered lead capture + WhatsApp automation"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile conversion rate: 89%",
      description: "Industry average is 23% — we're different"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Zero technical headaches",
      description: "White-glove management + 24/7 monitoring included"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Millions Generated.</span> 50+ Success Stories.
            <span className="block">Here's How We Do It.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            After 5 years and 500+ projects, we've perfected the formula. 
            Our battle-tested systems don't just look good — they generate serious revenue:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:from-blue-100 group-hover:to-purple-100 transition-all shadow-md">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Online Presence?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Stop losing potential customers to slow, confusing websites. 
              Let's build you a site that works as hard as you do.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;