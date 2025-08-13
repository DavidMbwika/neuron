import React from 'react';
import { Clock, Zap, TrendingUp } from 'lucide-react';

const Difference = () => {
  const differences = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Rapid deployment",
      subtitle: "7-14 days max",
      description: "Fortune 500 speed with startup agility. Most agencies take 3-6 months — we deliver in weeks."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning performance",
      subtitle: "2.1s average load",
      description: "98% faster than competitors. Google PageSpeed scores of 95+ guaranteed."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Explosive growth",
      subtitle: "340% average ROI",
      description: "Built to scale from startup to IPO. Enterprise-grade infrastructure from day one."
    }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Fortune 500 Companies & Smart Startups Choose Us
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            <strong>5 years. 500+ projects. $47M+ generated.</strong> We don't just build websites — we build profit machines.
          </p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            While other agencies focus on "pretty," we focus on profit. Our battle-tested approach delivers:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {differences.map((difference, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-200 group-hover:bg-blue-700 transition-colors">
                {difference.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">
                {difference.title}
              </h3>
              <p className="text-blue-300 font-medium mb-3">
                {difference.subtitle}
              </p>
              <p className="text-blue-100">
                {difference.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-blue-100 mb-6">
              Join hundreds of businesses who've transformed their online presence with WebshipSites.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all">
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;