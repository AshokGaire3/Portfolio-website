import React from 'react';
import { Code, BarChart3, Brain } from 'lucide-react';
import SectionEffects from './SectionEffects';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 section-cosmic relative overflow-hidden">
      <SectionEffects effectType="about" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-orbitron text-glow-blue">About Me</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light font-exo">
            I specialize in turning data into action and ideas into products—combining analytics,
            ML, and modern web development to deliver measurable impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight font-orbitron text-glow-purple">
              Building Tomorrow's Solutions Today
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed text-lg font-light font-exo">
              I love shipping useful things. From dashboards to end‑to‑end apps, I focus on clarity,
              performance, and user experience—using the right tools to solve the right problems.
            </p>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              <div className="group flex items-start gap-6 p-6 rounded-lg card-cosmic">
                <div className="glass-morphism p-4 rounded-lg group-hover:glow-blue transition-all duration-300">
                  <Code className="text-blue-400" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2 font-exo">Software Development</h4>
                  <p className="text-slate-300 font-light font-exo">Full-stack applications with modern technologies</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-6 p-6 rounded-lg card-cosmic">
                <div className="glass-morphism p-4 rounded-lg group-hover:glow-purple transition-all duration-300">
                  <BarChart3 className="text-purple-400" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2 font-exo">Data Analysis</h4>
                  <p className="text-slate-300 font-light font-exo">Extracting insights from complex datasets</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-6 p-6 rounded-lg card-cosmic">
                <div className="glass-morphism p-4 rounded-lg group-hover:glow-cyan transition-all duration-300">
                  <Brain className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2 font-exo">AI/ML Solutions</h4>
                  <p className="text-slate-300 font-light font-exo">Machine learning models and intelligent systems</p>
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