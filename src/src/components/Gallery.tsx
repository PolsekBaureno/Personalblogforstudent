import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1672056778226-f2b5d13fe159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwZm9vZCUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc2MzcwNDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cooking',
    title: 'Cooking Session'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1669986480140-2c90b8edb443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBtb3VudGFpbnxlbnwxfHx8fDE3NjM2NDkyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Travel',
    title: 'Mountain Adventure'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjM2OTM1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cooking',
    title: 'Latte Art'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1547669205-39038d0a1df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzY0ODA2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Photography',
    title: 'Urban Architecture'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1712217278614-a4e51956f66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwYXN0YSUyMGZvb2R8ZW58MXx8fHwxNzYzNjE0NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cooking',
    title: 'Homemade Pasta'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1563141415-2ae640ce9c5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBoaWtpbmclMjB0cmFpbHxlbnwxfHx8fDE3NjM1OTc2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Travel',
    title: 'Forest Trail'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1637733948124-4239eb4b2b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHRyYXZlbHxlbnwxfHx8fDE3NjM2NjY2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Travel',
    title: 'Beach Sunset'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1762436933065-fe6d7f51d4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzNzA0NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Photography',
    title: 'Street Life'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1609501885647-9cf9deffdb23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtpbmclMjBkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NjM3MDQ0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cooking',
    title: 'Chocolate Brownies'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjM2ODE0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Photography',
    title: 'Mountain View'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1662367532361-ad43453c611f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGdlYXJ8ZW58MXx8fHwxNzYzNzA0NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Photography',
    title: 'Camera Gear'
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Cooking', 'Travel', 'Photography'];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="mb-4">Photo Gallery</h2>
        <p className="text-gray-600 mb-8">Koleksi foto hasil jepretanku 📸</p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
          >
            <ImageWithFallback
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-4 w-full">
                <p className="text-white">{image.title}</p>
                <p className="text-white/70 text-sm">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-white">{selectedImage.title}</p>
              <p className="text-white/70">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
