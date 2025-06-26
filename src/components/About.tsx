import React from 'react';
import { Code, BarChart3, Brain, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-blue-600 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Me</h2>
            <Sparkles className="text-purple-600 animate-pulse" size={32} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science student with a minor in Data Science, passionate about 
            leveraging technology to solve real-world problems through data-driven insights and innovative software solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Working"
                className="rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Building Tomorrow's Solutions Today
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              As a Computer Science student with a Data Science minor, I combine analytical thinking 
              with technical expertise to create impactful solutions. My journey spans from data analysis 
              and machine learning to full-stack development, always focusing on delivering value through technology.
            </p>
            
            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                  <Code className="text-blue-600" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Software Development</h4>
                  <p className="text-gray-600">Full-stack applications with modern technologies</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-full group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                  <BarChart3 className="text-purple-600" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Data Analysis</h4>
                  <p className="text-gray-600">Extracting insights from complex datasets</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-full group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                  <Brain className="text-green-600" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">AI/ML Solutions</h4>
                  <p className="text-gray-600">Machine learning models and intelligent systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;