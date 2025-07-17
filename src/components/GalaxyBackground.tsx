import React, { useEffect, useRef } from 'react';

const GalaxyBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Performance check - reduce effects on low-end devices
    const isLowEndDevice = window.innerWidth < 768 || navigator.hardwareConcurrency < 4;

    // Create optimized star field
    const createStarField = () => {
      const starCount = isLowEndDevice ? 50 : 100;
      const stars: HTMLElement[] = [];

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random();
        const brightness = Math.random();
        const hue = Math.random() * 360;
        
        // Determine star type based on size
        let starClass = 'star ';
        if (size < 0.1) starClass += 'star-micro';
        else if (size < 0.3) starClass += 'star-tiny';
        else if (size < 0.6) starClass += 'star-small';
        else if (size < 0.8) starClass += 'star-medium';
        else if (size < 0.95) starClass += 'star-large';
        else starClass += 'star-giant';

        star.className = starClass;
        
        // Random positioning
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Simplified animations for better performance
        star.style.setProperty('--brightness', brightness.toString());
        star.style.setProperty('--twinkle-duration', `${4 + Math.random() * 2}s`);
        star.style.setProperty('--twinkle-delay', `${Math.random() * 5}s`);

        container.appendChild(star);
        stars.push(star);
      }

      return stars;
    };

    // Create cosmic particles
    const createCosmicParticles = () => {
      const particleCount = isLowEndDevice ? 10 : 20;
      const particles: HTMLElement[] = [];

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const type = Math.random();
        
        let particleClass = 'cosmic-particle ';
        if (type < 0.4) particleClass += 'cosmic-dust';
        else if (type < 0.7) particleClass += 'cosmic-energy';
        else particleClass += 'cosmic-plasma';

        particle.className = particleClass;
        
        // Random positioning
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Custom properties
        particle.style.setProperty('--size', `${1 + Math.random() * 3}px`);
        particle.style.setProperty('--opacity', `${0.3 + Math.random() * 0.4}`);
        particle.style.setProperty('--duration', `${30 + Math.random() * 10}s`);
        particle.style.setProperty('--delay', `${Math.random() * 10}s`);

        container.appendChild(particle);
        particles.push(particle);
      }

      return particles;
    };

    // Initialize all elements
    const stars = createStarField();
    const particles = createCosmicParticles();

    // Cleanup function
    return () => {
      [...stars, ...particles].forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, []);

  return (
    <div className="galaxy-background">
      {/* Base gradient foundation */}
      <div className="gradient-foundation"></div>
      
      {/* Nebula layers */}
      <div className="nebula-layer">
        <div className="nebula nebula-1" style={{ opacity: 0.10 }}></div>
        <div className="nebula nebula-2" style={{ opacity: 0.08 }}></div>
        <div className="nebula nebula-3" style={{ opacity: 0.07 }}></div>
        {/* Subtle animated blur overlay for extra softness */}
        {/* Removed overlay blur/opacity div to eliminate overlay effect */}
      </div>
      
      {/* Dynamic star field container */}
      <div ref={containerRef} className="starfield-container"></div>
    </div>
  );
};

export default GalaxyBackground;