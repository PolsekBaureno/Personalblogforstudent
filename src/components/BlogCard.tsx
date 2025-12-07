import React from 'react';
import { Calendar, Clock, LucideIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  icon: LucideIcon;
  image: string;
  date: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const Icon = post.icon;
  
  const categoryColorClasses = {
    orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200 border-orange-300',
    blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-300',
    pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200 border-pink-300'
  };

  const categoryGradients = {
    orange: 'from-orange-500/10 to-pink-500/10',
    blue: 'from-blue-500/10 to-cyan-500/10',
    pink: 'from-pink-500/10 to-purple-500/10'
  };

  return (
    <Card className={`overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer group border-2 bg-gradient-to-br ${categoryGradients[post.categoryColor as keyof typeof categoryGradients]}`}>
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="absolute top-3 right-3">
          <Badge className={`${categoryColorClasses[post.categoryColor as keyof typeof categoryColorClasses]} border shadow-md`}>
            <Icon className="w-3 h-3 mr-1" />
            {post.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-5 bg-white">
        <h3 className="mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}