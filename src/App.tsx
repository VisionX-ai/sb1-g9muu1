import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AIShowcaseSection from './components/AIShowcaseSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop - window.innerHeight / 2 &&
            scrollPosition < sectionTop + sectionHeight - window.innerHeight / 2) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-electric-blue">AI Innovate</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Services</a>
                <a href="#testimonials" className="hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Testimonials</a>
                <a href="#ai-showcase" className="hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">AI Showcase</a>
                <a href="#contact" className="bg-electric-blue hover:bg-electric-blue-dark text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contact Us</a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block hover:bg-gray-900 px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#testimonials" className="block hover:bg-gray-900 px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
              <a href="#ai-showcase" className="block hover:bg-gray-900 px-3 py-2 rounded-md text-base font-medium">AI Showcase</a>
              <a href="#contact" className="block bg-electric-blue hover:bg-electric-blue-dark text-black px-4 py-2 rounded-md text-base font-medium">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <AIShowcaseSection />
      </main>

      <Footer />

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          className="bg-electric-blue hover:bg-electric-blue-dark text-black p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      </div>
      {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}
    </div>
  );
}

export default App;