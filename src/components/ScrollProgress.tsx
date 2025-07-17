import React, { useEffect, useState } from 'react';
import { Home, User, GraduationCap, Zap, MapPin, Code, Mail } from 'lucide-react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine active section
      const sections = ['home', 'about', 'education', 'skills', 'journey', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 16); // ~60fps
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Throttle function to prevent excessive scroll events
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };

  const sectionConfig = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'skills', icon: Zap, label: 'Skills' },
    { id: 'journey', icon: MapPin, label: 'Journey' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <>
      {/* Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Section Indicators with Symbols */}
      <div className="section-indicators">
        {sectionConfig.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            className={`section-indicator ${activeSection === id ? 'active' : ''}`}
            onClick={() => {
              document.getElementById(id)?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            onMouseEnter={() => setHoveredSection(id)}
            onMouseLeave={() => setHoveredSection(null)}
            aria-label={`Go to ${label} section`}
          >
            <div className="indicator-symbol">
              <Icon size={16} />
            </div>
            {hoveredSection === id && (
              <span className="indicator-tooltip">{label}</span>
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default ScrollProgress;