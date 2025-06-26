import React, { useEffect, useRef, useState } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
      ]
    },
    {
      title: 'Data Science & AI/ML',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'Pandas & NumPy', level: 85 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'TensorFlow', level: 75 },
      ]
    },
    {
      title: 'Data Visualization',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Excel', level: 90 },
        { name: 'Tableau', level: 75 },
        { name: 'Matplotlib', level: 80 },
      ]
    },
    {
      title: 'Web Development',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Express.js', level: 80 },
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I use to analyze data, build applications, and create AI/ML solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border border-gray-100`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className={`bg-gradient-to-r ${category.bgColor} rounded-xl p-4 mb-6 group-hover:scale-105 transition-transform duration-300`}>
                <h3 className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent text-center`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium text-sm group-hover/skill:text-gray-900 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2.5 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;