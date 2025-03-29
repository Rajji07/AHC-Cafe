import React, { useState } from 'react';
import { MapPin, Clock, Phone, Facebook, Instagram, Twitter, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-[#1a0f07] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#d4a574]">Subscribe Us</h3>
              <p className="text-gray-400 mb-6">
                Stay updated with our latest offers, new menu items, and special events.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full bg-[#2a1f17] border border-gray-700 focus:outline-none focus:border-[#d4a574] text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#d4a574] text-white rounded-full hover:bg-[#c39464] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-8 w-8 text-[#d4a574]" />
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <p className="text-gray-400">Pratibha Tower, Sector 41, Gurgaon.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-8 w-8 text-[#d4a574]" />
              <h3 className="text-lg font-semibold">Opening Times</h3>
            </div>
            <p className="text-gray-400">Mo - Fr. : 7:00 AM - 9:00 PM</p>
            <p className="text-gray-400">Sa - Su. : 8:00 AM - 10:00 PM</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="h-8 w-8 text-[#d4a574]" />
              <h3 className="text-lg font-semibold">Contact</h3>
            </div>
            <p className="text-gray-400">+91 1234567890</p>
            <p className="text-gray-400">Info@ahccafe.com</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#d4a574]"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-[#d4a574]"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-[#d4a574]"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AHC-Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
