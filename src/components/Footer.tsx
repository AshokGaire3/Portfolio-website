import React from 'react';
import { Github, Linkedin, Mail, Heart, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="section-cosmic-alt text-white py-12 relative overflow-hidden border-t border-blue-500/20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 tracking-tight">
              <span className="font-orbitron text-glow-blue">Ashok Gaire</span>
            </h3>
            <p className="text-slate-300 mb-2 font-light font-exo">Computer Science Student | Data Enthusiast | Creative Developer</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
              <MapPin size={16} />
              <span className="text-sm font-light font-exo">Cincinnati, Ohio, USA</span>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/AshokGaire3"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <div className="p-2 rounded-md glass-morphism group-hover:glow-blue transition-all duration-300">
                <Github size={24} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ashok-gaire-077562246"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-slate-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <div className="p-2 rounded-md glass-morphism group-hover:glow-purple transition-all duration-300">
                <Linkedin size={24} />
              </div>
            </a>
            <a
              href="mailto:gaireashok79@gmail.com"
              className="group text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <div className="p-2 rounded-md glass-morphism group-hover:glow-cyan transition-all duration-300">
                <Mail size={24} />
              </div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-500/20 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2 font-light font-exo">
            Ashok Gaire © 2025 <br></br>
            Built with React, TypeScript(JSX) and <Heart size={25} className="text-red-400" />
          </p>
          <p className="text-slate-500 text-sm mt-2 font-light font-exo">
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;