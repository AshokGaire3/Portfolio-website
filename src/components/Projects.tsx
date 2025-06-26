import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Sales Insights Dashboard',
      description: 'A dynamic dashboard analyzing sales performance and regional trends using mock real estate data. Built with SQL for data extraction and transformation, Power BI for interactive visualizations with slicers, drilldowns, and KPIs. Delivers actionable insights on pricing patterns, customer preferences, and monthly revenue breakdowns.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['SQL', 'Power BI', 'Excel', 'Data Analysis'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshIVg',
      featured: true
    },
    {
      title: 'Student Management System',
      description: 'A full-stack web application for managing student records with features like enrollment tracking, grade management, and automated report generation.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshIVg'
    },
    {
      title: 'Stock Price Predictor',
      description: 'A machine learning model that predicts stock prices using historical data, technical indicators, and LSTM neural networks for time series forecasting.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'NumPy', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshIVg'
    },
    {
      title: 'E-Commerce Analytics Platform',
      description: 'A data-driven e-commerce platform with real-time analytics, customer behavior tracking, and automated inventory management using modern web technologies.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshIVg'
    },
    {
      title: 'Social Media Sentiment Analyzer',
      description: 'An NLP-based application that analyzes social media posts to determine sentiment trends, featuring real-time data processing and interactive visualizations.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'NLTK', 'Twitter API', 'Dash'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshIVg'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-purple-600 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Featured Projects</h2>
            <Sparkles className="text-blue-600 animate-pulse" size={32} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing data analysis, machine learning, and full-stack development skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-slide-up border border-gray-100 ${
                project.featured ? 'ring-2 ring-purple-200 ring-opacity-50' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-2 text-sm font-semibold">
                  ⭐ Featured Project
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="text-gray-700" size={16} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        techIndex % 4 === 0 ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' :
                        techIndex % 4 === 1 ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' :
                        techIndex % 4 === 2 ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                        'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="group/link flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-200 font-medium"
                  >
                    <ExternalLink size={16} className="group-hover/link:animate-bounce" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all duration-200 font-medium"
                  >
                    <Github size={16} className="group-hover/link:animate-bounce" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;