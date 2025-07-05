import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => [...prev, index]);
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const projects = [
    {
      title: 'Sales Insights Dashboard',
      description: 'A dynamic dashboard analyzing sales performance and regional trends using mock real estate data. Built with SQL for data extraction and transformation, Power BI for interactive visualizations with slicers, drilldowns, and KPIs. Delivers actionable insights on pricing patterns, customer preferences, and monthly revenue breakdowns.',
      technologies: ['SQL', 'Power BI', 'Excel', 'Data Analysis'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshIVg',
      keySkills: ['Data Visualization', 'Business Intelligence', 'KPI Development', 'Interactive Dashboards', 'Sales Analytics'],
      featured: true
    },
    {
      title: 'Urban Housing Data Integration',
      description: 'Designed and implemented a data integration pipeline to centralize fragmented urban housing market data. Collected, cleaned, and transformed information from APIs, web scraping, and various file types using Python and SQL. This ensured structured, high-quality datasets, significantly improving efficiency and enabling comprehensive analysis for data-driven insights.',
      technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'APIs', 'Web Scraping'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshIVg',
      keySkills: ['Data Collection & Wrangling', 'ETL', 'SQL Integration', 'Data Quality', 'API Interaction']
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive full-stack web application for managing student records with advanced features including enrollment tracking, grade management, and automated report generation. Built with modern web technologies to provide a seamless user experience for educational institutions.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshIVg',
      keySkills: ['Full-Stack Development', 'Database Design', 'User Authentication', 'RESTful APIs', 'Educational Technology']
    },
    {
      title: 'Stock Price Predictor',
      description: 'An advanced machine learning model that predicts stock prices using historical data, technical indicators, and LSTM neural networks for time series forecasting. Features real-time data processing and interactive visualizations to help users make informed investment decisions.',
      technologies: ['Python', 'TensorFlow', 'NumPy', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshIVg',
      keySkills: ['Machine Learning', 'Time Series Analysis', 'Neural Networks', 'Financial Modeling', 'Predictive Analytics']
    },
    {
      title: 'E-Commerce Analytics Platform',
      description: 'A comprehensive data-driven e-commerce platform featuring real-time analytics, customer behavior tracking, and automated inventory management. Built with modern web technologies and containerized for scalable deployment across different environments.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshIVg',
      keySkills: ['Real-Time Analytics', 'Customer Insights', 'Inventory Management', 'Containerization', 'E-Commerce Solutions']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-light">
            Here are some of my recent projects showcasing data analysis, machine learning, and full-stack development skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              ref={el => projectRefs.current[index] = el}
              className={`group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden card-hover-subtle border border-gray-100 ${
                project.featured ? 'ring-1 ring-blue-200' : ''
              } ${
                visibleProjects.includes(index) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {project.featured && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Featured Project
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Skills section */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.keySkills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="group/link flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300 font-medium btn-hover-lift"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all duration-300 font-medium btn-hover-lift"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-sm hover:shadow-md btn-hover-lift mx-auto"
          >
            <span>Want to see more? Let's connect!</span>
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;