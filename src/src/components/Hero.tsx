import React from 'react';
import { ChevronDown, Instagram, Facebook, Youtube } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1762180335978-0a72268bcff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG91dGRvb3IlMjBtb3VudGFpbiUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjQyNjI3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Mobile Orange Border */}
      <div className="absolute inset-4 border-4 border-orange-400 rounded-lg pointer-events-none md:hidden"></div>

      {/* Vertical Text - Mobile */}
      <div className="absolute left-6 top-24 bottom-24 md:hidden">
        <div 
          className="text-[10px] tracking-wider text-orange-400"
          style={{ 
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          LEARNING TRAVELING COOCKING PHOTOGRAPHY
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 text-left md:text-left w-full">
        <div className="max-w-2xl">
          {/* Small Text Above */}
          <p className="text-xs md:text-sm text-orange-300 tracking-widest mb-4 uppercase">
            Learning Traveling Coocking Photography
          </p>

          {/* Main Heading */}
          <h1 className="mb-6">
            <span className="block text-white text-5xl md:text-7xl lg:text-8xl mb-2">
              welcome
            </span>
            <span className="block text-orange-400 text-4xl md:text-6xl lg:text-7xl">
              to My Blog
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            Sharing stories of travel adventures, culinary exploration, photography journeys, and inspiring learning experiences.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/80 text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-white/80" />
          <ChevronDown className="w-6 h-6 text-white/80 -mt-4" />
        </div>
      </div>

      {/* Social Media Icons - Desktop Only */}
      <div className="hidden md:flex absolute right-8 bottom-8 gap-3 z-10">
        <a 
          href="#" 
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
        >
          <Instagram className="w-6 h-6 text-white" />
        </a>
        <a 
          href="#" 
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
        >
          <Facebook className="w-6 h-6 text-white" />
        </a>
        <a 
          href="#" 
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
        >
          <Youtube className="w-6 h-6 text-white" />
        </a>
        <a 
          href="#" 
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
