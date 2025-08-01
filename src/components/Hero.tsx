import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Eye, MapPin, ChevronDown } from 'lucide-react';
import SectionEffects from './SectionEffects';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const titles = ['Data Analyst', 'Software Engineer', 'Web Developer'];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Continuous cycling through titles every 2 seconds
    const timer = setInterval(() => {
      setCurrentTitleIndex(prev => (prev + 1) % titles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(timer);
  }, [titles.length]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 py-20 section-cosmic relative overflow-hidden">
              <SectionEffects effectType="hero" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Welcome Message */}
          <div className="mb-8 animate-fade-in-up">
            <p className="text-lg text-slate-400 mb-4 font-light tracking-wide font-inter">
              Welcome to my website
            </p>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in-up animation-delay-200 tracking-tight font-heading text-glow-blue">
            Ashok Gaire
          </h1>
          
          {/* Dynamic Title with Smooth Transition */}
          <div className="mb-8 animate-fade-in-up animation-delay-500">
            <div className="text-2xl md:text-3xl text-cyan-400 font-semibold h-12 flex items-center justify-center">
              <span className="transition-all duration-500 ease-in-out font-inter text-glow-cyan">
                {titles[currentTitleIndex]}
              </span>
              <span className="text-cyan-400 ml-1 font-normal animate-cursor-blink-refined">|</span>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in-up animation-delay-700">
            <MapPin className="text-purple-400" size={18} />
            <span className="text-slate-300 font-light font-inter">Cincinnati, Ohio, USA</span>
          </div>
          
          {/* Description */}
          <div className="animate-fade-in-up animation-delay-1000">
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light font-body">
              Computer Science Student with Data Science Minor, passionate about leveraging technology 
              to solve real-world problems through data-driven insights and innovative software solutions.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-1000">
            <a
              href="/Ashok_Gaire_Tech_Resume01.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-cosmic-primary px-8 py-3 rounded-md transition-all duration-300 flex items-center gap-2 font-medium font-inter"
            >
              <Eye size={18} className="group-hover:animate-bounce" />
              <span>View Resume</span>
            </a>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group btn-cosmic px-8 py-3 rounded-md transition-all duration-300 font-medium font-inter"
            >
              <span>Get In Touch</span>
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-1000">
            <a 
              href="https://github.com/AshokGaire3" 
              target="_blank"
              rel="noopener noreferrer"
              className="group text-slate-400 hover:text-blue-400 transition-all duration-300"
            >
              <div className="p-3 rounded-md glass-morphism group-hover:glow-blue transition-all duration-300">
                <Github size={24} />
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/ashok-gaire-077562246" 
              target="_blank"
              rel="noopener noreferrer"
              className="group text-slate-400 hover:text-purple-400 transition-all duration-300"
            >
              <div className="p-3 rounded-md glass-morphism group-hover:glow-purple transition-all duration-300">
                <Linkedin size={24} />
              </div>
            </a>
            <a 
              href="mailto:ashok.gaire39@gmail.com"
              className="group text-slate-400 hover:text-cyan-400 transition-all duration-300"
            >
              <div className="p-3 rounded-md glass-morphism group-hover:glow-cyan transition-all duration-300">
                <Mail size={24} />
              </div>
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition-all duration-300"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;