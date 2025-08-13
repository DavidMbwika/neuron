import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowWeHelp from './components/HowWeHelp';
import Services from './components/Services';
import Difference from './components/Difference';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowWeHelp />
      <Services />
      <Difference />
      <Process />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;