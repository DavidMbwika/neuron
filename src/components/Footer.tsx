import React from 'react';
import { Globe, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const countries = [
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'US', flag: '🇺🇸' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Sweden', flag: '🇸🇪' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">WebshipSites</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We help businesses capture more leads and sales with custom-built, 
              fast-launch websites designed to win customers from day one.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-sm text-gray-400">Serving businesses in:</span>
              {countries.map((country) => (
                <div key={country.name} className="flex items-center space-x-1">
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-sm text-gray-300">{country.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Business Websites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Lead Capture Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Local SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Sales Copywriting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Basic Branding</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-sm">Response in 2 hours</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-sm">6 Countries Served</span>
              </div>
              
              <div className="space-y-2">
                <a 
                  href="mailto:sales@webship.sites?subject=Quote Request&body=Hi! I'd like to get a quote for my project. Please contact me."
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Get Quote
                </a>
                <a 
                  href="https://wa.me/254790999276?text=Hi! I found your website and I'm interested in your services. Can we chat?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 WebshipSites. All rights reserved. Built with precision for business growth.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;