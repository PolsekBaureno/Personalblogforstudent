import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', color: 'bg-green-300' },
    { id: 'about', label: 'About', color: 'bg-yellow-300' },
    { id: 'blog', label: 'Blog', color: 'bg-orange-300' },
    { id: 'gallery', label: 'Gallery', color: 'bg-green-400' },
    { id: 'contact', label: 'Contact', color: 'bg-gray-300' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-3xl md:text-4xl font-['Brush_Script_MT',cursive] text-white" style={{ fontFamily: 'cursive' }}>
                  Alika
                </span>
                <svg width="40" height="40" viewBox="0 0 40 40" className="ml-1">
                  <path d="M20 5 L25 18 L38 18 L28 26 L32 38 L20 30 L8 38 L12 26 L2 18 L15 18 Z" 
                    fill="#FF8C42" stroke="#FF8C42" strokeWidth="1"/>
                </svg>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-col items-end gap-2">
              <span className="text-xs text-orange-400 tracking-widest">
                LEARNING TRAVELING COOCKING PHOTOGRAPHY
              </span>
              <nav className="flex items-center gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-6 py-2 rounded-full transition-all ${
                      activeSection === item.id 
                        ? 'bg-orange-400 text-black shadow-lg scale-105' 
                        : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-orange-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" strokeWidth={3} />
              ) : (
                <Menu className="w-8 h-8" strokeWidth={3} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-pink-200 md:hidden">
          <div className="flex flex-col h-full">
            {/* Logo area placeholder */}
            <div className="h-20"></div>

            {/* Vertical Text */}
            <div className="absolute left-4 top-24 bottom-24">
              <div 
                className="text-xs tracking-widest text-orange-500"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed'
                }}
              >
                LEARNING TRAVELING COOCKING PHOTOGRAPHY
              </div>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 flex flex-col items-center justify-start gap-6 px-16 pt-12">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full max-w-xs px-8 py-3 ${item.color} rounded-md shadow-lg transform transition-all hover:scale-105`}
                  style={{
                    transform: `rotate(${(index % 2 === 0 ? 2 : -2)}deg)`,
                    boxShadow: '4px 4px 0px rgba(0,0,0,0.1)'
                  }}
                >
                  <span className="text-xl text-black">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Follow Me Section */}
            <div className="pb-12 px-8 flex items-end justify-center gap-6">
              <div className="bg-pink-300 border-4 border-pink-400 rounded-lg p-6 transform -rotate-2 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-orange-300 rounded-t-lg border-4 border-pink-400 border-b-0"></div>
                <div className="text-center">
                  <p className="text-2xl text-black mb-2">FOLLOW</p>
                  <p className="text-2xl text-black">ME</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
