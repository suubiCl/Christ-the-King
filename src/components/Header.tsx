import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, HandHeart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Course Outline', path: '/course-outline' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-blue-100 py-0'
        : 'bg-white/90 backdrop-blur-sm shadow-lg py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'h-20' : 'h-36'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img
                src="/202-01.png"
                alt="Christ the King Nursery Teachers' College Logo"
                className={`object-contain transition-all duration-500 ${
                  isScrolled ? 'h-16 w-16' : 'h-32 w-32'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-pink-300/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-blue-800 group-hover:text-blue-900 transition-colors ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                Christ the King
              </h1>
              <p className={`text-gray-600 group-hover:text-blue-800 transition-colors ${
                isScrolled ? 'hidden' : 'text-sm block'
              }`}>
                Nursery Teachers' College
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <nav className="flex space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                    isActive(item.path)
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
                  } ${
                    isScrolled ? 'text-sm py-1' : ''
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-800 to-pink-300 rounded-full ${
                      isScrolled ? 'w-4 h-0.5' : 'w-6 h-0.5'
                    }`}></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 to-pink-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-6 border-l border-gray-200 pl-6">
              <a
                href="mailto:christthekingntc@gmail.com?subject=Donation%20Inquiry&body=Hello,%20I%20would%20like%20to%20make%20a%20donation%20to%20support%20Christ%20the%20King%20Nursery%20Teachers'%20College."
                className={`group bg-gradient-to-r from-pink-300 to-pink-200 hover:from-pink-200 hover:to-pink-100 text-blue-900 font-semibold transition-all duration-300 rounded-lg inline-flex items-center shadow-lg hover:shadow-xl hover:scale-105 ${
                  isScrolled ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-sm'
                }`}
              >
                <Heart className={`mr-1.5 group-hover:scale-110 transition-transform ${isScrolled ? 'h-3 w-3' : 'h-4 w-4'}`} />
                Donate
              </a>
              <Link
                to="/volunteer"
                className={`group bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all duration-300 rounded-lg inline-flex items-center shadow-lg hover:shadow-xl hover:scale-105 ${
                  isScrolled ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-sm'
                }`}
              >
                <HandHeart className={`mr-1.5 group-hover:scale-110 transition-transform ${isScrolled ? 'h-3 w-3' : 'h-4 w-4'}`} />
                Volunteer
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-blue-100">
          <div className="px-4 py-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 font-medium rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-blue-800 bg-blue-50 border-l-4 border-blue-800'
                    : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-blue-100 mt-4 space-y-3">
              <a
                href="mailto:christthekingntc@gmail.com?subject=Donation%20Inquiry&body=Hello,%20I%20would%20like%20to%20make%20a%20donation%20to%20support%20Christ%20the%20King%20Nursery%20Teachers'%20College."
                className="group bg-gradient-to-r from-pink-300 to-pink-200 hover:from-pink-200 hover:to-pink-100 text-blue-900 px-4 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center w-full justify-center shadow-lg hover:shadow-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Make a Donation
              </a>
              <Link
                to="/volunteer"
                className="group bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center w-full justify-center shadow-lg hover:shadow-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <HandHeart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;