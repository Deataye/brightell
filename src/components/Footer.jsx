import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add all solid and brand icons
library.add(fas, fab);

const Footer = () => {
  return (
    <footer className="bg-black text-white font-text">
      {/* Top text */}
      <div className="container mx-auto px-4 py-2">
        
          
       

        <hr className="border-gray-800 my-8" />

        {/* Four columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact */}
          <div className="space-y-4">
            {[
              { icon: 'phone-alt', title: 'Call Us', text: '(+1)925-526-5821' },
              { icon: 'envelope', title: 'Email', text: 'brightel@brightellc.com' },
              { icon: 'map-marker-alt', title: 'Address', text: 'Virginia' },
              { icon: 'calendar', title: 'Schedule Meeting', text: '' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="text-orange-500 text-2xl">
                  <FontAwesomeIcon icon={['fas', item.icon]} />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-heading">{item.title}</h3>
                  {item.text && <p>{item.text}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Clients', 'Services', 'Success Stories', 'Team', 'About'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-orange-500 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-4 font-heading">Services</h3>
            <ul className="space-y-3">
              {['Business Transformation', 'Turnkey Business Launchpad', 'Smart Tech & IT Services', 'Workforce & Talent Growth Platform','Digital Operations Hub','']
              .map((service, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-orange-500 transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Company */}
          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-4 font-heading">About Company</h3>
            <p className="mb-4">
              As a women-owned small business, we specialize in empowering startups, small businesses, and government agencies through strategic consulting, IT services, document digitization, and workforce development. Our client-centered approach blends innovation with deep industry expertise—driving real results that move your mission forward.
            </p>
            
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© Copyright Brightel LLC All rights reserved.</p>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Social icons */}
            <div className="flex space-x-4">
              {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors"
                >
                  <FontAwesomeIcon icon={['fab', icon]} />
                </a>
              ))}
            </div>

            {/* Scroll to top arrow with margin-left */}
            <a
              href="#top"
              className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center ml-4"
              title="Back to Top"
            >
              <FontAwesomeIcon icon={['fas', 'arrow-up']} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
