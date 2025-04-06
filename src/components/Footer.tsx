"use client";

import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-deep-black border-t border-gray-800">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">Titan Enterprises</h3>
            <p className="text-gray-400 mb-4">
              Empowering coaches and content creators with AI solutions that transform workflows and boost competitive edge.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors">
                <FiGithub size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-neon-cyan transition-colors">About Us</a></li>
              <li><a href="#tools" className="text-gray-400 hover:text-neon-cyan transition-colors">AI Tools</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-neon-cyan transition-colors">Resources</a></li>
              <li><a href="#audit" className="text-gray-400 hover:text-neon-cyan transition-colors">Book an Audit</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">AI Implementation Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FiMail className="mr-2" /> <a href="mailto:info@titanenterprises.com" className="hover:text-neon-cyan transition-colors">info@titanenterprises.com</a>
              </li>
              <li className="flex items-center text-gray-400">
                <FiPhone className="mr-2" /> <a href="tel:+1234567890" className="hover:text-neon-cyan transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-start text-gray-400">
                <FiMapPin className="mr-2 mt-1" /> 
                <span>123 Innovation Way<br />Tech District, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Titan Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
