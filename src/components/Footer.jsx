import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <p className="max-w-4xl mx-auto">
            With offices in five countries, we are ready to support our clients in their business-critical initiatives. 
            We have invested heavily in recognized quality processes and standards, such as PMBOK and ITIL.
          </p>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        {/* Footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="text-orange-500 text-2xl">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p>(+1)925-526-5821</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-orange-500 text-2xl">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p>brightel@brightellc.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-orange-500 text-2xl">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p>Virginia</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-orange-500 text-2xl">
                <i className="fas fa-calendar"></i>
              </div>
              <div>
                <h3 className="font-bold text-lg">Schedule Meeting</h3>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Clients</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">About</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Automation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Modernization</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Microsoft Fabric</a></li>
            </ul>
          </div>
          
          {/* About Company */}
          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-4">About Company</h3>
            <p className="mb-4">As a women-owned small business, we specialize in empowering startups, small businesses, and government agencies through strategic consulting, IT services, document digitization, and workforce development.</p>
            
            <div className="flex space-x-2 mt-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-800">Capability</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-800">Seaport</span>
              </div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-xs">GSA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© Copyright Technoz. All rights reserved.</p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Scroll to top button - moved before social icons */}
            <a href="#top" className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center">
              <i className="fas fa-arrow-up"></i>
            </a>
            
            {/* Social media icons - now at the very end */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;