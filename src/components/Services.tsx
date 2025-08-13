import React from 'react';
import { Globe, MessageCircle, Search, PenTool, Palette, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Revenue-Focused Business Websites",
      description: "Average client sees 340% ROI within 90 days. Built with 5 years of conversion data.",
      features: ["Conversion-optimized design", "Sub-2-second loading", "A/B tested layouts", "Revenue tracking dashboard"]
    },
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "AI-Powered Lead Generation", 
      description: "Our clients average 340% more qualified leads. WhatsApp + email automation included.",
      features: ["Smart WhatsApp integration", "Behavioral email triggers", "Lead scoring system", "CRM integration"]
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "Dominate Local Search",
      description: "Average client ranks #1-3 for their main keywords within 60 days.",
      features: ["Google My Business mastery", "Local keyword domination", "Review generation system", "Competitor analysis"]
    },
    {
      icon: <PenTool className="h-10 w-10" />,
      title: "Psychology-Based Copywriting",
      description: "Copy that converts 340% better than industry standard. Written by certified conversion specialists.",
      features: ["Neuro-marketing principles", "A/B tested headlines", "Emotional trigger mapping", "Conversion psychology"]
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Authority Brand Positioning",
      description: "Transform from commodity to premium choice. Brand psychology that commands higher prices.",
      features: ["Premium visual identity", "Authority positioning strategy", "Trust signal optimization", "Competitive differentiation"]
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Viral UGC Content Engine",
      description: "Our UGC campaigns average 2.3M impressions/month. Turn customers into your sales army.",
      features: ["Vetted micro-influencer network", "Viral content strategy", "Performance tracking", "ROI optimization", "From $399/month", "Full campaign management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Revenue-Generating Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>5 years. 100+ projects. $millions generated.</strong> These aren't just services — they're battle-tested profit engines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                index === 5 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className={`w-2 h-2 rounded-full mr-3 mt-2 ${
                      feature.includes('$399') ? 'bg-orange-500' : 'bg-green-500'
                    }`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;