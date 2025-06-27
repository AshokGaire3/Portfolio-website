import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className="relative inline-block">
              {/*
              <img
                src="/IMG_8014.png"
                alt="Ashok Gaire"
                className="w-48 h-48 rounded-full mx-auto mb-6 shadow-2xl animate-float border-4 border-white object-cover object-center"
              />
              */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-20 animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 animate-slide-in-left">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">Ashok Gaire</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-4 animate-slide-in-right">
            <MapPin className="text-gray-500" size={20} />
            <span className="text-lg text-gray-600">Cincinnati, Ohio, USA</span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed">
            Computer Science Student with Data Science Minor | Passionate about 
            <span className="text-blue-600 font-semibold"> Data Analysis</span>, 
            <span className="text-purple-600 font-semibold"> Full Stack Development</span>, 
            <span className="text-indigo-600 font-semibold"> Software Engineering</span>, and 
            <span className="text-green-600 font-semibold"> AI/ML Solutions</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up-delayed">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="group-hover:animate-pulse">Get In Touch</span>
            </button>
          </div>
          
          <div className="flex justify-center space-x-8 animate-fade-in-up-delayed">
            <a 
              href="https://github.com/AshIVg" 
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <div className="p-3 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Github size={28} className="group-hover:animate-pulse" />
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/ashok-gaire-077562246" 
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <div className="p-3 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Linkedin size={28} className="group-hover:animate-pulse" />
              </div>
            </a>
            <a 
              href="mailto:ashok.gaire39@gmail.com"
              className="group text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <div className="p-3 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Mail size={28} className="group-hover:animate-pulse" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;