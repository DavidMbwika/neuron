import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Market Entry",
      price: "$2,500",
      description: "For businesses ready to dominate their local market",
      features: [
        "Conversion-optimized 7-page website",
        "Mobile-first responsive design", 
        "Local SEO domination setup",
        "Lead capture & WhatsApp integration",
        "Performance analytics dashboard",
        "2 weeks delivery",
        "90 days white-glove support"
      ],
      popular: false,
      cta: "Claim Your Spot"
    },
    {
      name: "Revenue Engine", 
      price: "$5,500",
      description: "Complete profit system with automation & UGC",
      features: [
        "Everything in Market Entry",
        "AI-powered lead automation",
        "Email & WhatsApp nurture sequences",
        "Advanced conversion tracking",
        "Psychology-based copywriting",
        "UGC content strategy (3 months)",
        "3 weeks delivery",
        "6 months priority support"
      ],
      popular: true,
      cta: "Get Revenue Engine"
    },
    {
      name: "Market Domination",
      price: "$12,500+",
      description: "Enterprise-level system for serious growth",
      features: [
        "Everything in Revenue Engine",
        "Multi-location/product optimization",
        "E-commerce integration",
        "Advanced automation workflows",
        "Competitor intelligence system",
        "Dedicated account manager",
        "Monthly optimization calls",
        "Custom development timeline"
      ],
      popular: false,
      cta: "Apply Now"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Investment Levels That Deliver Serious ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            <strong>Average client ROI: 340% within 90 days.</strong> These aren't costs — they're investments in your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-sm border-2 ${
                plan.popular ? 'border-blue-500 transform scale-105' : 'border-gray-200'
              } transition-all duration-300 hover:shadow-md`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-600 ml-2">one-time</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need something custom? Have questions about which plan is right for you?
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Let's Start Your Project →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;