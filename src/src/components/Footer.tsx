import React from 'react';
import { Heart, Instagram, Mail, Camera } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-50 to-pink-50 border-t border-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white">✨</span>
              </div>
              <span>Sarah's Blog</span>
            </div>
            <p className="text-gray-600">
              Sharing my passion for cooking, traveling, and photography with the world! 
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Blog Posts
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Connect With Me</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors shadow-md"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors shadow-md"
              >
                <Camera className="w-5 h-5 text-blue-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors shadow-md"
              >
                <Mail className="w-5 h-5 text-orange-600" />
              </a>
            </div>
            <p className="text-gray-600 mt-4">
              Feel free to reach out for collabs or just to say hi! 👋
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Sarah © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
