import React, { useState } from 'react';
import { Calendar, Mail, MessageCircle, Send, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'd like to get my revenue projection.%0D%0A%0D%0AName: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0ARevenue Goals & Challenges: ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/254790999276?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Join the $47M+ Success Story?
            <span className="block text-blue-400">Your Competitors Are Already Losing Ground.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong>500+ businesses</strong> have already transformed their revenue with our systems. 
            Every day you wait is revenue walking to your competitors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Get Your Revenue Projection in 24 Hours</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Revenue Goals & Current Challenges
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="What's your monthly revenue goal? What's currently holding you back from reaching it?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Get My Revenue Projection
              </button>
            </form>
          </div>

          {/* Contact Info & CTAs */}
          <div className="space-y-8">
            <div className="bg-blue-800 rounded-xl p-8">
              <Calendar className="h-12 w-12 text-blue-200 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Free Revenue Strategy Session</h3>
              <p className="text-blue-100 mb-6">
                Get a personalized 47-point revenue audit. We'll analyze your current situation, 
                identify profit leaks, and create a custom growth roadmap — completely free.
              </p>
              <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Strategy Session
              </button>
            </div>

            <div className="bg-green-800 rounded-xl p-8">
              <MessageCircle className="h-12 w-12 text-green-200 mb-4" />
              <h3 className="text-2xl font-bold mb-4">WhatsApp Direct Line</h3>
              <p className="text-green-100 mb-6">
                Urgent growth question? Message our CEO directly on WhatsApp. 
                Average response time: 47 minutes during business hours.
              </p>
              <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Message CEO Now
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <Clock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Response Time</h4>
                <p className="text-sm text-gray-400">47 minutes avg</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Success Rate</h4>
                <p className="text-sm text-gray-400">340% Avg ROI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400 mb-4">
            <strong>Warning:</strong> We only take 12 new clients per quarter. 8 spots remaining for Q1 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:sales@webship.sites?subject=Strategy Session Request&body=Hi! I'd like to claim my free strategy session. Please send me available times."
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              📅 Claim Your Strategy Session
            </a>
            <a 
              href="https://wa.me/254790999276?text=Hi! I want to get my revenue projection. Can we discuss my business goals?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              📩 Get Revenue Projection Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;