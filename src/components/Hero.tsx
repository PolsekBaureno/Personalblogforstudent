import React from 'react';
import { Camera, ChefHat, Plane } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image dengan Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1724139435063-1f233b17f596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlJTIwZ2lybCUyMHN0dWRlbnQlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY1MDgzMjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay untuk readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-pink-900/30 to-blue-900/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Border Orange di Mobile */}
      <div className="absolute inset-0 md:hidden border-8 border-orange-500 pointer-events-none"></div>

      {/* Vertical Text di Mobile */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden">
        <div className="writing-mode-vertical text-white tracking-widest opacity-80">
          WELCOME TO MY WORLD
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 text-center z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621962366578-7364ccb3352b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjBhc2lhbnxlbnwxfHx8fDE3NjM3MDI1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white">👋</span>
            </div>
          </div>
        </div>

        <h1 className="mb-4 text-white drop-shadow-lg">
          Hi, Aku Alika!
        </h1>
        
        <p className="max-w-2xl mx-auto text-white/95 mb-8 drop-shadow-md">
          Seorang pelajar SMA yang senang mengeksplorasi dunia lewat lensa kamera, 
          mencoba resep baru di dapur, dan menjelajahi tempat-tempat menarik. 
          Selamat datang di blog pribadiku! ✨
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <div className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <ChefHat className="w-5 h-5 text-orange-500" />
            <span className="text-gray-700">Cooking</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Plane className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">Traveling</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Camera className="w-5 h-5 text-pink-500" />
            <span className="text-gray-700">Photography</span>
          </div>
        </div>
      </div>
    </div>
  );
}