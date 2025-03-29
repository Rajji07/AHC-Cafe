import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 pb-12 bg-[#1a0f07]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400">We'd love to hear from you</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="bg-[#2a1f17] p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#1a0f07] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#d4a574]"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-[#1a0f07] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#d4a574]"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 bg-[#1a0f07] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#d4a574] h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#d4a574] text-white rounded-lg hover:bg-[#c49563] transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            
            <div className="space-y-8">
              <div className="bg-[#2a1f17] p-6 rounded-lg flex items-start space-x-4">
                <MapPin className="text-[#d4a574] w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-400">Pratibha Tower</p>
                  <p className="text-gray-400">Sector 41, Gurgaon</p>
                </div>
              </div>
              
              <div className="bg-[#2a1f17] p-6 rounded-lg flex items-start space-x-4">
                <Phone className="text-[#d4a574] w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-400">+91 1234567890</p>
                </div>
              </div>
              
              <div className="bg-[#2a1f17] p-6 rounded-lg flex items-start space-x-4">
                <Mail className="text-[#d4a574] w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-400">info@ahccafe.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;