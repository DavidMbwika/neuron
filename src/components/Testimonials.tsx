import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Mitchell Consulting - $2.3M Revenue",
      location: "London, UK",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "ROI of 420% in 6 months. We went from 2 leads per month to 47 qualified prospects. The UGC campaign alone generated $340K in new business. This team doesn't just build websites — they build profit machines."
    },
    {
      name: "Ahmed Al-Rashid", 
      company: "Dubai Tech Solutions - $1.8M Revenue",
      location: "Dubai, UAE",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From 0 to $1.8M in 18 months. Their system generated 340% more qualified leads in the first 90 days. The WhatsApp automation alone saves us 20 hours per week while converting 67% better than our old forms."
    },
    {
      name: "Jennifer Thompson",
      company: "Thompson Marketing - $890K Revenue",
      location: "Toronto, Canada", 
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Best $5,500 we ever spent. 890% ROI in year one. We're now the #1 marketing agency in Toronto for our keywords, and our average client value increased 340% thanks to the authority positioning they created."
    },
    {
      name: "Marcus Johnson",
      company: "Johnson & Associates - $1.2M Revenue",
      location: "Sydney, Australia",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From bankruptcy to $1.2M revenue in 14 months. Their system transformed us from a commodity service to the premium choice. We now charge 3x more than competitors and have a 6-month waiting list."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            $47M+ Generated. Here's What Our Clients Say.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            <strong>500+ success stories.</strong> From Fortune 500 companies to ambitious startups — results speak louder than promises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 relative hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-200" />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Your business could be our next success story. Let's discuss how we can help you achieve similar results.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;