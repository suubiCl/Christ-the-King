import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <img 
                  src="/202-01.png" 
                  alt="Christ the King Logo" 
                  className="h-16 w-16 object-contain bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-blue-700/20 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  Christ the King
                </h3>
                <p className="text-blue-200 font-medium">Nursery Teachers' College</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              An affiliate of Ndejje University, committed to excellence in early childhood education
              with Christian values. Shaping tomorrow's educators with faith, knowledge, and dedication.
            </p>
            <div className="bg-gradient-to-r from-pink-300 to-pink-200 text-blue-900 px-6 py-3 rounded-full inline-block font-bold text-lg mb-6">
              "Your Future Is Our Vision"
            </div>
            <div className="flex space-x-4">
              <a href="#" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <Facebook className="h-5 w-5" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <Twitter className="h-5 w-5" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-300">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Faculty', path: '/faculty' },
                { name: 'Gallery', path: '/gallery' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-indigo-200 hover:text-amber-300 transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="border-b border-transparent group-hover:border-amber-300 transition-all duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-300">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="bg-amber-500/20 p-2 rounded-lg group-hover:bg-amber-500/30 transition-colors">
                  <MapPin className="h-5 w-5 text-amber-300" />
                </div>
                <div>
                  <p className="text-indigo-100 text-sm leading-relaxed">
                    P.O Box 22, Lira Uganda<br />
                    Ngetta, Anyangapuc Ward<br />
                    8 km from Lira City Centre
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="bg-pink-300/20 p-2 rounded-lg group-hover:bg-pink-300/30 transition-colors">
                  <Phone className="h-5 w-5 text-pink-200" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">0772037994 / 0785321628</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="bg-pink-300/20 p-2 rounded-lg group-hover:bg-pink-300/30 transition-colors">
                  <Mail className="h-5 w-5 text-pink-200" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">christthekingntc@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-center md:text-left">
              &copy; 2025 Christ the King Nursery Teachers' College. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <span className="text-blue-200">
                Developed by{' '}
                <a
                  href="https://cavemotions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 transition-colors duration-300 underline"
                >
                  Cave Motions
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;