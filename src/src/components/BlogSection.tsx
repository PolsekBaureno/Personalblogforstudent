import React from 'react';
import { BlogCard } from './BlogCard';
import { Calendar, ChefHat, Camera, Plane } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Resep Brownies Coklat Super Gooey!',
    excerpt: 'Akhirnya berhasil bikin brownies yang teksturnya pas - crispy di luar, super lembut di dalam! Ini dia resep rahasia yang aku pake...',
    category: 'Cooking',
    categoryColor: 'orange',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1609501885647-9cf9deffdb23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtpbmclMjBkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NjM3MDQ0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '15 November 2025',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Weekend Trip ke Bromo - Worth It Banget!',
    excerpt: 'Sunrise di Bromo itu beneran magical! Ceritanya dimulai dari perjalanan 8 jam naik bus malam, sampai...',
    category: 'Traveling',
    categoryColor: 'blue',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjM2ODE0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '10 November 2025',
    readTime: '7 min'
  },
  {
    id: 3,
    title: 'Tips Street Photography untuk Pemula',
    excerpt: 'Street photography itu seni menangkap kehidupan sehari-hari. Ini beberapa tips yang aku pelajari selama setahun terakhir...',
    category: 'Photography',
    categoryColor: 'pink',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1762436933065-fe6d7f51d4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzNzA0NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '5 November 2025',
    readTime: '6 min'
  },
  {
    id: 4,
    title: 'Eksperimen Pasta Aglio Olio ala Sarah',
    excerpt: 'Simple tapi enak! Pasta Aglio Olio ini jadi comfort food favorit aku. Cuma butuh beberapa bahan dan 20 menit...',
    category: 'Cooking',
    categoryColor: 'orange',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1712217278614-a4e51956f66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwYXN0YSUyMGZvb2R8ZW58MXx8fHwxNzYzNjE0NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '28 Oktober 2025',
    readTime: '4 min'
  },
  {
    id: 5,
    title: 'Hidden Beach di Bali yang Wajib Dikunjungi',
    excerpt: 'Bosan sama pantai mainstream? Aku nemu pantai hidden gem yang sepi dan cantik banget! Lokasinya di...',
    category: 'Traveling',
    categoryColor: 'blue',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1637733948124-4239eb4b2b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHRyYXZlbHxlbnwxfHx8fDE3NjM2NjY2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '20 Oktober 2025',
    readTime: '5 min'
  },
  {
    id: 6,
    title: 'Review Gear Fotografi Budget Friendly',
    excerpt: 'Untuk pemula yang mau mulai belajar fotografi tapi budget terbatas, ini rekomendasi gear yang worth it...',
    category: 'Photography',
    categoryColor: 'pink',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1662367532361-ad43453c611f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGdlYXJ8ZW58MXx8fHwxNzYzNzA0NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '12 Oktober 2025',
    readTime: '8 min'
  }
];

export function BlogSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="mb-4">Latest Posts</h2>
        <p className="text-gray-600">Cerita dan pengalaman terbaru dari aku 📝</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
