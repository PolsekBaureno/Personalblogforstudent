import React from 'react';
import { Menu, X, Star } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Detect scroll untuk mengubah header style
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'blog', label: 'Blog' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo "Alika" dengan bintang */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <span className={`transition-colors ${
                isScrolled ? 'text-orange-600' : 'text-white'
              }`}>
                Alika
              </span>
              <Star className={`w-4 h-4 absolute -top-1 -right-5 transition-colors ${
                isScrolled ? 'text-orange-500 fill-orange-500' : 'text-yellow-300 fill-yellow-300'
              }`} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors hover:text-orange-500 ${
                  activeSection === item.id 
                    ? 'text-orange-500' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation - Sticky Notes Style */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="bg-pink-100 rounded-lg p-4 shadow-lg border-2 border-pink-200 relative">
              {/* Sticky note decoration */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-pink-200/50 rounded-t-lg"></div>
              
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 rounded-lg transition-all transform hover:rotate-1 ${
                      activeSection === item.id
                        ? 'bg-orange-200 text-orange-700 shadow-md'
                        : 'bg-white/80 text-gray-700 hover:bg-orange-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}