import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { BlogSection } from "./components/BlogSection";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Observer untuk detect section yang aktif
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ['home', 'about', 'blog', 'gallery'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-20 px-4">
          <AboutMe />
        </section>

        <section id="blog" className="py-20 px-4 bg-white/50">
          <BlogSection />
        </section>

        <section id="gallery" className="py-20 px-4">
          <Gallery />
        </section>
      </main>

      <Footer />
    </div>
  );
}