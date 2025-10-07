import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, CheckCircle } from 'lucide-react';
import SectionEffects from './SectionEffects';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

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
      description: 'The Sales Insights Dashboard provides a clear, interactive view of sales performance across products, regions, and time. Built in Power BI with Power Query for data shaping and DAX for advanced measures, it tracks KPIs like revenue, profit margin, average order value, and YoY growth. Users can drill through, slice by date or region, and explore trends to pinpoint underperforming segments and growth opportunities. ',
      technologies: ['SQL', 'Power BI', 'Excel', 'Data Analysis'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshokGaire3',
      keySkills: ['Data Visualization', 'Interactive Dashboards', 'Sales Analytics'],
      featured: false
    },
    {
      title: 'Medical Dashboard',
      description: 'A comprehensive healthcare analytics dashboard built with React Native and Django, featuring patient management for 30 sample patients, interactive medical metrics visualization using Recharts, and a responsive design with collapsible sidebar. Includes professional medical UI/UX with smooth animations powered by Framer Motion.',
      technologies: ['React Native', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Django', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshokGaire3/medical-dashboard',
      keySkills: ['Healthcare Analytics', 'Patient Management', 'Interactive Visualizations', 'Responsive Design', 'Medical UI/UX'],
      featured: false
    },
    {
      title: 'Urban Housing Data Integration',
      description: 'Designed and implemented a data integration pipeline to centralize fragmented urban housing market data. Collected, cleaned, and transformed information from APIs, web scraping, and various file types using Python and SQL. This ensured structured, high-quality datasets, significantly improving efficiency and enabling comprehensive analysis for data-driven insights.',
      technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'APIs', 'Web Scraping'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshokGaire3/Urban-Housing-Data-Integration',
      keySkills: ['Data Collection & Wrangling', 'ETL', 'SQL Integration', 'Data Quality', 'API Interaction']
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive full-stack web application for managing student records with advanced features including enrollment tracking, grade management, and automated report generation. Built with modern web technologies to provide a seamless user experience for educational institutions.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Rest API'],
      liveUrl: 'https://ashokgaire3.github.io/Student-Management-System/',
      githubUrl: 'https://github.com/AshokGaire3/Student-Management-System',
      keySkills: ['Full-Stack Development', 'Database Design', 'User Authentication', 'RESTful APIs', 'Educational Technology']
    },
    {
      title: 'Stock Price Predictor',
      description: 'An advanced machine learning model that predicts stock prices using historical data, technical indicators, and LSTM neural networks for time series forecasting. Features real-time data processing and interactive visualizations to help users make informed investment decisions.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshokGaire3',
      keySkills: ['Machine Learning', 'Time Series Analysis', 'Neural Networks', 'Financial Modeling', 'Predictive Analytics']
    },
    // {
    //   title: 'E-Commerce Analytics Platform',
    //   description: 'A comprehensive data-driven e-commerce platform featuring real-time analytics, customer behavior tracking, and automated inventory management. Built with modern web technologies and containerized for scalable deployment across different environments.',
    //   technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    //   liveUrl: '#',
    //   githubUrl: 'https://github.com/AshokGaire3',
    //   keySkills: ['Real-Time Analytics', 'Customer Insights', 'Inventory Management', 'Containerization', 'E-Commerce Solutions']
    // },
    {
      title: 'Expense Tracker',
      description: 'A web-based simple expense tracker that allows a user to add, view, and delete daily expenses. It provides a visual and interactive way to manage personal finances. The core functionality is handled by JavaScript, while HTML provides the structure and CSS handles the styling.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AshokGaire3/expense-tracker',
      keySkills: ['DOM Manipulation', 'Event Handling', 'Local Storage', 'Responsive Design']
    }
  ];

  // Helpers
  const getShortDescription = (text: string, maxChars = 180) => {
    if (!text) return '';
    if (text.length <= maxChars) return text.trim();
    const cut = text.slice(0, maxChars);
    const lastPeriod = cut.lastIndexOf('.');
    const safeCut = lastPeriod > 80 ? cut.slice(0, lastPeriod + 1) : cut;
    return safeCut.trim() + (safeCut.endsWith('.') ? '' : '...');
  };

  const getCategories = (technologies: string[]) => {
    const tech = technologies.map(t => t.toLowerCase());
    const categories: { name: string; score: number }[] = [];

    const hasAny = (keys: string[]) => tech.some(t => keys.some(k => t.includes(k)));

    if (hasAny(['tensorflow', 'pytorch', 'lstm', 'scikit-learn', 'ml', 'machine'])) {
      categories.push({ name: 'Machine learning', score: 5 });
    }
    if (hasAny(['spark', 'airflow', 'dbt', 'pipeline', 'etl', 'snowflake', 'bigquery'])) {
      categories.push({ name: 'Data Engineering', score: 4 });
    }
    if (hasAny(['power bi', 'excel', 'tableau', 'bi', 'dax'])) {
      categories.push({ name: 'Data Analyst', score: 4 });
    }
    if (hasAny(['react native'])) {
      categories.push({ name: 'Web development', score: 3 });
    }
    if (hasAny(['react', 'node', 'express', 'django', 'flask', 'mongo', 'postgres', 'typescript', 'javascript'])) {
      categories.push({ name: 'Web development', score: 3 });
    }
    if (hasAny(['css', 'tailwind', 'ui', 'ux', 'design'])) {
      categories.push({ name: 'Web design', score: 2 });
    }
    if (hasAny(['ai', 'llm'])) {
      categories.push({ name: 'AI', score: 1 });
    }

    // Deduplicate by name and sort by score desc, then pick top 2
    const unique = Array.from(new Map(categories.map(c => [c.name, c])).values())
      .sort((a, b) => b.score - a.score)
      .slice(0, 2)
      .map(c => c.name);

    if (unique.length === 0) return ['Web development'];
    return unique;
  };

  const categoryStyle = (category: string) => {
    switch (category) {
      case 'Machine learning':
        return { badge: 'text-emerald-300 border-emerald-500/40', header: 'from-emerald-500/15 via-cyan-500/10 to-blue-500/10' };
      case 'Data Engineering':
        return { badge: 'text-cyan-300 border-cyan-500/40', header: 'from-cyan-500/15 via-blue-500/10 to-purple-500/10' };
      case 'Data Analyst':
        return { badge: 'text-sky-300 border-sky-500/40', header: 'from-sky-500/15 via-cyan-500/10 to-indigo-500/10' };
      case 'Web development':
        return { badge: 'text-blue-300 border-blue-500/40', header: 'from-blue-500/15 via-cyan-500/10 to-indigo-500/10' };
      case 'Web design':
        return { badge: 'text-purple-300 border-purple-500/40', header: 'from-purple-500/15 via-pink-500/10 to-blue-500/10' };
      case 'AI':
        return { badge: 'text-fuchsia-300 border-fuchsia-500/40', header: 'from-fuchsia-500/15 via-purple-500/10 to-blue-500/10' };
      default:
        return { badge: 'text-slate-300 border-slate-500/40', header: 'from-slate-500/10 via-slate-400/10 to-slate-500/10' };
    }
  };

  return (
    <section id="projects" className="py-20 section-cosmic-alt relative overflow-hidden">
      <SectionEffects effectType="projects" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-orbitron text-glow-cyan">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-light font-exo">
            Here are some of my recent projects showcasing data analysis, machine learning, and full-stack development skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const categories = getCategories(project.technologies);
            const headerStyles = categoryStyle(categories[0]);
            const isExpanded = !!expandedCards[index];
            return (
            <div 
              key={project.title}
              ref={el => projectRefs.current[index] = el}
              className={`group card-cosmic rounded-xl transition-all duration-500 overflow-hidden relative ${
                visibleProjects.includes(index) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {project.featured && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium font-exo">
                  Featured Project
                </div>
              )}

              <div className={`p-6`}>
                <div className="flex flex-wrap gap-1 mb-2">
                  {categories.map(cat => {
                    const style = categoryStyle(cat);
                    return (
                      <span key={cat} className={`px-2 py-0.5 rounded-full text-[11px] font-medium border ${style.badge} bg-black/20 backdrop-blur-sm font-exo`}>{cat}</span>
                    );
                  })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 tracking-tight font-orbitron">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium glass-morphism text-slate-200 border border-slate-600/40 font-exo"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 mb-3 leading-relaxed text-[15px] font-light font-exo">
                  {isExpanded ? project.description.trim() : getShortDescription(project.description)}
                </p>
                {project.description.length > 200 && (
                  <button
                    className="text-blue-300 hover:text-white text-sm font-medium font-exo"
                    onClick={() => setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }))}
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                  </button>
                )}

                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2 font-exo">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {project.keySkills.slice(0, 3).map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-[13px] text-slate-300 font-exo">
                        <CheckCircle size={14} className="text-cyan-400" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 mt-2">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      className="group/link inline-flex items-center gap-2 text-blue-300 hover:text-white transition-all duration-300 font-medium font-exo px-3 py-2 rounded-md bg-blue-500/10 border border-blue-500/30"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 font-medium font-exo px-3 py-2 rounded-md bg-slate-500/10 border border-slate-500/30"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          );})}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-cosmic-primary px-8 py-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 font-medium mx-auto font-exo"
          >
            <span>Want to see more? Let's connect!</span>
            {/* <ExternalLink size={20} /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;