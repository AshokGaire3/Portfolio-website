import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Users, Award, TrendingUp, MapPin, Clock, Building } from 'lucide-react';
import SectionEffects from './SectionEffects';

const Journey: React.FC = () => {
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

  const experiences = [
    {
      year: "2025 – Present",
      title: "Student Assistant",
      organization: "First-Year Student Success Hub",
      location: "Northern Kentucky University",
      type: "Academic Support",
      description: "Supporting first-year students through administrative coordination and student services management.",
      keyPoints: [
        "Manage front-desk operations and coordinate student appointments using SAP and Navigate systems",
        "Provide professional communication support for student inquiries via phone and in-person",
        "Streamline appointment workflows and assist with daily office operations"
      ],
      icon: Users,
      color: "blue"
    },
    {
      year: "2024 – Present",
      title: "STEM Peer Mentor",
      organization: "NKU STEM Program",
      location: "Northern Kentucky University",
      type: "Student Leadership",
      description: "Mentoring first-year STEM students to enhance academic success and campus engagement.",
      keyPoints: [
        "Guide students through academic planning and connect them with campus resources",
        "Facilitate study sessions and provide personalized mentoring strategies",
        "Support student retention and engagement within the STEM community"
      ],
      icon: TrendingUp,
      color: "gray"
    },
    {
      year: "2023 – Present",
      title: "College of Informatics Ambassador",
      organization: "College of Informatics",
      location: "Northern Kentucky University",
      type: "Student Representation",
      description: "Representing the College of Informatics through outreach and recruitment initiatives.",
      keyPoints: [
        "Lead campus tours and orientations for prospective students and families",
        "Deliver presentations about academic programs and student life experiences",
        "Collaborate with faculty and staff on recruitment and engagement events"
      ],
      icon: Award,
      color: "blue"
    },
    {
      year: "2023 – Present",
      title: "Norse IoT Member",
      organization: "Norse IoT Organization",
      location: "Northern Kentucky University",
      type: "Technical Collaboration",
      description: "Participating in hands-on IoT projects and technical skill development.",
      keyPoints: [
        "Collaborate on Internet of Things projects involving sensors and smart devices",
        "Engage in technical workshops focused on automation and connected systems",
        "Develop hardware-software integration skills through practical prototyping"
      ],
      icon: Building,
      color: "gray"
    }
  ];

  return (
    <section ref={sectionRef} id="journey" className="py-20 section-cosmic relative overflow-hidden">
      <SectionEffects effectType="journey" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-orbitron text-glow-purple">Professional Journey</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-300 leading-relaxed mb-6 font-light font-exo">
              My professional development has been shaped by diverse experiences in academic support, 
              student leadership, and technical collaboration at Northern Kentucky University.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <MapPin size={18} />
              <span className="font-light text-slate-400 font-exo">Northern Kentucky University • Cincinnati, Ohio</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - responsive positioning */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-30"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((experience, index) => (
              <div 
                key={experience.title}
                className={`group relative animate-slide-up ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex lg:items-center lg:gap-12`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-slate-900 rounded-full z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30"></div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="card-cosmic rounded-lg transition-all duration-300 p-6 group-hover:-translate-y-1 transform">
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                      <div className={`glass-morphism p-3 rounded-lg transition-colors duration-300 ${
                        experience.color === 'blue' 
                          ? 'group-hover:glow-blue' 
                          : 'group-hover:glow-purple'
                      }`}>
                        <experience.icon className={`${
                          experience.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                        }`} size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock size={14} className="text-gray-500 flex-shrink-0" />
                          <span className="text-sm font-medium px-3 py-1 rounded-full glass-morphism text-slate-300 border border-blue-500/20 font-exo">
                            {experience.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1 tracking-tight font-exo">{experience.title}</h3>
                        <p className="text-base font-medium text-slate-300 mb-1 font-exo">{experience.organization}</p>
                        <p className="text-sm text-slate-400 font-light mb-2 font-exo">{experience.type}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-4 leading-relaxed font-light text-sm font-exo">
                      {experience.description}
                    </p>

                    {/* Key Points */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2 font-exo">
                        <div className={`w-2 h-2 rounded-full ${
                          experience.color === 'blue' ? 'bg-blue-400' : 'bg-purple-400'
                        }`}></div>
                        Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {experience.keyPoints.map((point, idx) => (
                          <li key={idx} className="text-slate-300 leading-relaxed flex items-start gap-2 font-light text-sm font-exo">
                            <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="max-w-4xl mx-auto card-cosmic rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight font-orbitron text-glow-blue">Building Tomorrow's Skills Today</h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-6 font-light font-exo">
              These experiences have strengthened my communication, leadership, and technical skills while 
              fostering a deep understanding of student success and technology's role in education. 
              Each role has contributed to my growth as a future data scientist and software developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-cosmic-primary px-8 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 font-medium font-exo"
              >
                View My Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-cosmic px-8 py-3 rounded-md transition-all duration-300 font-medium font-exo"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;