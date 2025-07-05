import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Eye, MapPin, ChevronDown } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      {/* Sophisticated Background Animation - Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-float-gentle"></div>
        
        {/* Subtle geometric particles */}
        <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-blue-600 rounded-full opacity-10 animate-drift-1"></div>
        <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-gray-600 rounded-full opacity-15 animate-drift-2"></div>
        <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-blue-600 rounded-full opacity-8 animate-drift-3"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-700 rounded-full opacity-12 animate-drift-4"></div>
        
        {/* Connecting lines - very subtle */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#2563eb" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="animate-grid-pulse" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Welcome Message */}
          <div className="mb-8 animate-fade-in-up">
            <p className="text-lg text-gray-600 mb-4 font-light tracking-wide">
              Welcome to my website
            </p>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 animate-fade-in-up animation-delay-200 tracking-tight">
            Ashok Gaire
          </h1>
          
          {/* Dynamic Title with Smooth Transition */}
          <div className="mb-8 animate-fade-in-up animation-delay-500">
            <div className="text-2xl md:text-3xl text-blue-600 font-semibold h-12 flex items-center justify-center">
              <span className="transition-all duration-500 ease-in-out">
                {titles[currentTitleIndex]}
              </span>
              <span className="text-blue-600 ml-1 font-normal animate-cursor-blink-refined">|</span>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in-up animation-delay-700">
            <MapPin className="text-gray-500" size={18} />
            <span className="text-gray-600 font-light">Cincinnati, Ohio, USA</span>
          </div>
          
          {/* Description */}
          <div className="animate-fade-in-up animation-delay-1000">
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Computer Science Student with Data Science Minor, passionate about leveraging technology 
              to solve real-world problems through data-driven insights and innovative software solutions.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-1000">
            <button className="group bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md btn-hover-lift font-medium">
              <Eye size={18} className="group-hover:animate-bounce" />
              <span>View Resume</span>
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md btn-hover-lift font-medium"
            >
              <span className="group-hover:text-blue-600 transition-colors duration-300">Get In Touch</span>
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-1000">
            <a 
              href="https://github.com/AshokGaire3" 
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-500 hover:text-gray-700 transition-all duration-300 icon-hover-scale"
            >
              <div className="p-3 rounded-md bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
                <Github size={24} />
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/ashok-gaire-077562246" 
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-500 hover:text-gray-700 transition-all duration-300 icon-hover-scale"
            >
              <div className="p-3 rounded-md bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
                <Linkedin size={24} />
              </div>
            </a>
            <a 
              href="mailto:ashok.gaire39@gmail.com"
              className="group text-gray-500 hover:text-gray-700 transition-all duration-300 icon-hover-scale"
            >
              <div className="p-3 rounded-md bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
                <Mail size={24} />
              </div>
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-all duration-300"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;