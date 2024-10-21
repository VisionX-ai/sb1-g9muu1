import React from 'react';
import { Facebook, Twitter, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AI Innovate</h3>
            <p className="text-gray-400">Transforming the future with AI</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">Services</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">Case Studies</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">123 AI Street, Tech City</p>
            <p className="text-gray-400">contact@aiinnovate.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2023 AI Innovate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;