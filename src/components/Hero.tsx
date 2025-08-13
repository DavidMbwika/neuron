import React from 'react';
import { Calendar, ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  const countries = [
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'US', flag: '🇺🇸' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Sweden', flag: '🇸🇪' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">We've Generated millions</span> in Client Revenue
            <span className="block">Through Strategic Design & Marketing</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong>50+ businesses</strong> across UAE, UK, US, Australia, Canada, and Sweden trust us to build 
            their digital empire. From Fortune 500 companies to ambitious startups — we deliver results that matter.
          </p>
          
          <p className="text-lg text-gray-600 mb-10">
            <strong>Average client sees 34% ROI within 90 days.</strong> No long waits. No guesswork. Just proven systems that work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Explore your options
            </button>
            <a 
              href="https://wa.me/254790999276?text=Hi! I'm interested in WebshipSites services. Can we discuss my project?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp CEO Now
            </a>
    
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 opacity-75">
            <span className="text-sm text-gray-600 font-medium">Serving businesses in:</span>
            {countries.map((country) => (
              <div key={country.name} className="flex items-center space-x-2">
                <span className="text-2xl">{country.flag}</span>
                <span className="text-sm text-gray-600">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
      </div>
    </section>
  );
};

export default Hero;