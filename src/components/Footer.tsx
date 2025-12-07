import React from 'react';
import { Heart, Instagram, Mail, Camera, Star } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 border-t-4 border-orange-300 py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <span className="text-orange-600">Alika</span>
                <Star className="w-4 h-4 absolute -top-1 -right-5 text-orange-500 fill-orange-500" />
              </div>
            </div>
            <p className="text-gray-600">
              Sharing my passion for cooking, traveling, and photography with the world! ✨
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-orange-600">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 group-hover:scale-150 transition-transform"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 group-hover:scale-150 transition-transform"></span>
                  About Me
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 group-hover:scale-150 transition-transform"></span>
                  Blog Posts
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 group-hover:scale-150 transition-transform"></span>
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-pink-600">Connect With Me</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-pink-500 hover:text-white transition-all shadow-md hover:shadow-xl hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 text-pink-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-400 hover:to-cyan-500 hover:text-white transition-all shadow-md hover:shadow-xl hover:scale-110 group"
              >
                <Camera className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-yellow-500 hover:text-white transition-all shadow-md hover:shadow-xl hover:scale-110 group"
              >
                <Mail className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              Feel free to reach out for collabs or just to say hi! 👋
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-orange-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Alika
            </p>
            <p className="text-gray-500 text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}