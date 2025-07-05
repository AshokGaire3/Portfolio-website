import React from 'react';
import { Code, BarChart3, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            I'm a dedicated Computer Science student with a minor in Data Science, passionate about 
            leveraging technology to solve real-world problems through data-driven insights and innovative software solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Building Tomorrow's Solutions Today
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
              As a Computer Science student with a Data Science minor, I combine analytical thinking 
              with technical expertise to create impactful solutions. My journey spans from data analysis 
              and machine learning to full-stack development, always focusing on delivering value through technology.
            </p>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              <div className="group flex items-start gap-6 p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 card-hover-subtle">
                <div className="bg-blue-50 p-4 rounded-lg group-hover:bg-blue-100 transition-all duration-300">
                  <Code className="text-blue-600" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Software Development</h4>
                  <p className="text-gray-600 font-light">Full-stack applications with modern technologies</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-6 p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 card-hover-subtle">
                <div className="bg-gray-50 p-4 rounded-lg group-hover:bg-gray-100 transition-all duration-300">
                  <BarChart3 className="text-gray-700" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Data Analysis</h4>
                  <p className="text-gray-600 font-light">Extracting insights from complex datasets</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-6 p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 card-hover-subtle">
                <div className="bg-blue-50 p-4 rounded-lg group-hover:bg-blue-100 transition-all duration-300">
                  <Brain className="text-blue-600" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">AI/ML Solutions</h4>
                  <p className="text-gray-600 font-light">Machine learning models and intelligent systems</p>
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