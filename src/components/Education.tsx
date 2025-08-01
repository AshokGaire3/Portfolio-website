import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import SectionEffects from './SectionEffects';

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="py-20 section-cosmic relative overflow-hidden">
      <SectionEffects effectType="education" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-orbitron text-glow-blue">Education</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light font-exo">
            My academic journey in Computer Science with a focus on Data Science and Mathematics, 
            building the foundation for innovative problem-solving and technical excellence.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className={`group card-cosmic rounded-lg transition-all duration-500 overflow-hidden ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}>
            <div className="p-8">
              {/* University Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="glass-morphism p-4 rounded-lg group-hover:glow-blue transition-all duration-300">
                  <GraduationCap className="text-blue-400" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight font-orbitron text-glow-blue">
                    Northern Kentucky University
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-slate-400" />
                    <span className="text-slate-400 font-light font-exo">Highland Heights, Kentucky</span>
                  </div>
                </div>
              </div>

              {/* Degree Information */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-purple-400" size={20} />
                    <h4 className="text-lg font-semibold text-white font-exo">Degree Program</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 glass-morphism rounded-lg">
                      <h5 className="font-bold text-blue-400 mb-1 font-exo">Bachelor of Science</h5>
                      <p className="text-slate-300 font-light font-exo">Computer Science</p>
                    </div>
                    <div className="p-4 glass-morphism rounded-lg">
                      <h5 className="font-bold text-purple-400 mb-1 font-exo">Minor Programs</h5>
                      <div className="space-y-1">
                        <p className="text-slate-300 font-light font-exo">• Data Science</p>
                        <p className="text-slate-300 font-light font-exo">• Mathematics</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-cyan-400" size={20} />
                    <h4 className="text-lg font-semibold text-white font-exo">Timeline</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 glass-morphism rounded-lg">
                      <h5 className="font-bold text-cyan-400 mb-1 font-exo">Duration</h5>
                      <p className="text-slate-300 font-light font-exo">2022 - 2025</p>
                    </div>
                    <div className="p-4 glass-morphism rounded-lg">
                      <h5 className="font-bold text-green-400 mb-1 font-exo">Status</h5>
                      <p className="text-slate-300 font-light font-exo">Currently Enrolled</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Focus Areas */}
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-yellow-400" size={20} />
                  <h4 className="text-lg font-semibold text-white font-exo">Key Focus Areas</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 glass-morphism rounded-lg text-center group-hover:glow-blue transition-all duration-300">
                    <h5 className="font-semibold text-blue-400 mb-2 font-exo">Computer Science</h5>
                    <p className="text-slate-300 text-sm font-light font-exo">Software Development, Algorithms, System Design</p>
                  </div>
                  <div className="p-4 glass-morphism rounded-lg text-center group-hover:glow-purple transition-all duration-300">
                    <h5 className="font-semibold text-purple-400 mb-2 font-exo">Data Science</h5>
                    <p className="text-slate-300 text-sm font-light font-exo">Machine Learning, Data Analysis, Statistical Modeling</p>
                  </div>
                  <div className="p-4 glass-morphism rounded-lg text-center group-hover:glow-cyan transition-all duration-300">
                    <h5 className="font-semibold text-cyan-400 mb-2 font-exo">Mathematics</h5>
                    <p className="text-slate-300 text-sm font-light font-exo">Applied Mathematics, Statistics, Computational Methods</p>
                  </div>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="mt-8 p-6 glass-morphism-dark rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 font-exo">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Academic Highlights
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-slate-300 leading-relaxed flex items-start gap-2 font-light text-sm font-exo">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Comprehensive curriculum combining theoretical foundations with practical applications
                    </p>
                    <p className="text-slate-300 leading-relaxed flex items-start gap-2 font-light text-sm font-exo">
                      <span className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      Hands-on experience with modern data science tools and methodologies
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-300 leading-relaxed flex items-start gap-2 font-light text-sm font-exo">
                      <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                      Strong mathematical foundation supporting advanced computational thinking
                    </p>
                    <p className="text-slate-300 leading-relaxed flex items-start gap-2 font-light text-sm font-exo">
                      <span className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      Active participation in academic and professional development programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Certificates Section Placeholder - Commented out for now */}
        {/* <div className="text-center mt-16 animate-fade-in-up animation-delay-500">
          <div className="max-w-2xl mx-auto card-cosmic rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-orbitron text-glow-purple">Professional Certifications</h3>
            <p className="text-slate-300 leading-relaxed font-light font-exo">
              Professional certifications and additional qualifications will be showcased here as they are completed.
            </p>
            <div className="mt-4 text-slate-400 text-sm font-light font-exo">
              Coming Soon...
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;