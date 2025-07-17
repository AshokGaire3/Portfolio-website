import React, { useEffect, useRef, useState } from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  children, 
  className = '',
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { 
        threshold,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  return (
    <div 
      ref={sectionRef}
      className={`section-transition ${isVisible ? 'section-visible' : 'section-hidden'} ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionTransition;