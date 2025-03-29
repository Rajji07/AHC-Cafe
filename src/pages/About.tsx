import React from "react";
import { motion } from "framer-motion";
import { Coffee, Clock, MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#1a0f07] text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where every cup tells a story, and every visit becomes a memory.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#d4a574]">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2024, AHC-Cafe emerged from a passion for exceptional coffee and a desire to create a welcoming space for coffee enthusiasts. Our journey began with a simple idea: to serve the perfect cup of coffee while fostering a community of coffee lovers.
            </p>
            <p className="text-gray-300">
              Today, we're proud to be your go-to destination for premium coffee, delectable treats, and memorable moments. Our commitment to quality and customer satisfaction drives us to continuously improve and innovate.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="/images/hero.png"
              alt="Our Cafe"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#d4a574]">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2a1f17] p-6 rounded-lg text-center">
              <Coffee className="h-12 w-12 mx-auto mb-4 text-[#d4a574]" />
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-300">
                We source the finest ingredients and maintain the highest standards in every cup we serve.
              </p>
            </div>
            <div className="bg-[#2a1f17] p-6 rounded-lg text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-[#d4a574]" />
              <h3 className="text-xl font-semibold mb-2">Consistency</h3>
              <p className="text-gray-300">
                Every visit should feel like coming home, with the same exceptional experience every time.
              </p>
            </div>
            <div className="bg-[#2a1f17] p-6 rounded-lg text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-[#d4a574]" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-300">
                We're more than just a cafe - we're a gathering place for friends, family, and coffee lovers.
              </p>
            </div>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#2a1f17] p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#d4a574]">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-[#d4a574]" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-300">+91 1234567890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-[#d4a574]" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">info@ahccafe.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-[#d4a574]" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-300">Pratibha Tower, Sector 41, Gurgaon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 