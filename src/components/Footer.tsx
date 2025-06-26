import React from 'react';
import { Github, Linkedin, Mail, Heart, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ashok Gaire
            </h3>
            <p className="text-gray-300 mb-2">Computer Science Student | Data Analyst | Full Stack Developer</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
              <MapPin size={16} />
              <span className="text-sm">Cincinnati, Ohio, USA</span>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/AshIVg"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <div className="p-2 rounded-full group-hover:bg-gray-700 transition-all duration-300">
                <Github size={24} className="group-hover:animate-pulse" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ashok-gaire-077562246"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <div className="p-2 rounded-full group-hover:bg-gray-700 transition-all duration-300">
                <Linkedin size={24} className="group-hover:animate-pulse" />
              </div>
            </a>
            <a
              href="mailto:ashok.gaire39@gmail.com"
              className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <div className="p-2 rounded-full group-hover:bg-gray-700 transition-all duration-300">
                <Mail size={24} className="group-hover:animate-pulse" />
              </div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Ashok Gaire © 2024
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Crafted with modern web technologies to showcase technical expertise
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;