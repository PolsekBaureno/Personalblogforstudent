import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { BlogSection } from './components/BlogSection';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-16 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50">
          <AboutMe />
        </section>
        
        <section id="blog" className="py-16 px-4 bg-white/50">
          <BlogSection />
        </section>
        
        <section id="gallery" className="py-16 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50">
          <Gallery />
        </section>
        
        <section id="contact" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:hello@example.com" 
                className="px-8 py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-colors"
              >
                Email Me
              </a>
              <a 
                href="#" 
                className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
