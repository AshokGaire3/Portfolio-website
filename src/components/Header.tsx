import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'nav-cosmic' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Name - Ultra-refined */}
          <div className="text-xl font-semibold transition-all duration-300">
            <span className="tracking-tight font-bold font-orbitron text-glow-blue text-blue-400">Ashok Gaire</span>
          </div>
          
          {/* Desktop Navigation - Streamlined and Elegant */}
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'About', 'Education', 'Skills', 'Journey', 'Projects', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-link-cosmic font-medium text-sm tracking-wide font-exo animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Refined */}
          <button
            className="md:hidden p-2 rounded-md transition-all duration-300 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-5 h-5">
              <Menu 
                size={20} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                size={20} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-morphism-dark rounded-lg animate-slide-down">
            {['Home', 'About', 'Education', 'Skills', 'Journey', 'Projects', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 px-4 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-200 rounded-md mx-2 my-1 font-medium font-exo"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;