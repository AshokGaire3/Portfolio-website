import React, { useEffect, useRef } from 'react';

interface SectionEffectsProps {
  effectType: 'hero' | 'about' | 'education' | 'skills' | 'journey' | 'projects' | 'contact';
}

const SectionEffects: React.FC<SectionEffectsProps> = ({ 
  effectType
}) => {
  const effectsRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const container = effectsRef.current;
    if (!container) return;

    // Clear any existing elements
    elementsRef.current.forEach(el => el.remove());
    elementsRef.current = [];

    // Cancel any existing animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Determine element counts based on screen size and performance
    const isMobile = window.innerWidth < 768;
    const isSmallMobile = window.innerWidth < 480;
    
    const getElementCount = (desktop: number, mobile: number, small: number) => {
      if (isSmallMobile) return small;
      if (isMobile) return mobile;
      return desktop;
    };

    const createOptimizedEffects = () => {
      const elements: HTMLElement[] = [];

      switch (effectType) {
        case 'hero':
          const orbCount = getElementCount(2, 1, 1);
          for (let i = 0; i < orbCount; i++) {
            const orb = document.createElement('div');
            orb.className = 'floating-orb';
            
            const size = isSmallMobile ? 12 : isMobile ? 15 : 18;
            const opacity = 0.08;
            
            orb.style.cssText = `
              position: absolute;
              width: ${size}px;
              height: ${size}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(59, 130, 246, ${opacity}) 0%, rgba(147, 51, 234, ${opacity * 0.5}) 50%, transparent 70%);
              filter: blur(5px);
              animation: floatOrb ${30 + Math.random() * 25}s ease-in-out infinite;
              animation-delay: ${Math.random() * 15}s;
              box-shadow: 0 0 8px rgba(59, 130, 246, ${opacity * 0.2});
            `;
            
            container.appendChild(orb);
            elements.push(orb);
          }

          // Add very few subtle floating particles
          const heroParticleCount = getElementCount(3, 2, 1);
          for (let i = 0; i < heroParticleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            
            const size = isSmallMobile ? 1 : isMobile ? 1.5 : 2;
            const opacity = 0.12;
            
            particle.style.cssText = `
              position: absolute;
              width: ${size}px;
              height: ${size}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              border-radius: 50%;
              background: rgba(59, 130, 246, ${opacity});
              animation: floatOrb ${25 + Math.random() * 20}s ease-in-out infinite;
              animation-delay: ${Math.random() * 12}s;
              box-shadow: 0 0 3px rgba(59, 130, 246, ${opacity * 0.3});
            `;
            
            container.appendChild(particle);
            elements.push(particle);
          }

          // Add very subtle light beams
          const beamCount = getElementCount(1, 1, 0);
          for (let i = 0; i < beamCount; i++) {
            const beam = document.createElement('div');
            beam.className = 'light-beam';
            
            const isVertical = Math.random() > 0.5;
            const length = isVertical ? '100%' : '80%';
            const width = isVertical ? '1px' : '100%';
            const height = isVertical ? '80%' : '1px';
            
            beam.style.cssText = `
              position: absolute;
              width: ${width};
              height: ${height};
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              background: linear-gradient(${isVertical ? '180deg' : '90deg'}, transparent 0%, rgba(59, 130, 246, 0.04) 20%, rgba(59, 130, 246, 0.05) 50%, rgba(59, 130, 246, 0.04) 80%, transparent 100%);
              animation: lightBeam ${20 + Math.random() * 15}s ease-in-out infinite;
              animation-delay: ${Math.random() * 10}s;
              filter: blur(3px);
            `;
            
            container.appendChild(beam);
            elements.push(beam);
          }
          break;

        case 'about':
          const streamCount = getElementCount(4, 3, 2);
          for (let i = 0; i < streamCount; i++) {
            const stream = document.createElement('div');
            stream.className = 'data-stream';
            
            stream.style.cssText = `
              position: absolute;
              width: 1px;
              height: 100%;
              left: ${Math.random() * 100}%;
              background: linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 20%, rgba(147, 51, 234, 0.1) 50%, rgba(6, 182, 212, 0.1) 80%, transparent 100%);
              animation: dataFlow ${8 + Math.random() * 4}s linear infinite;
              animation-delay: ${Math.random() * 3}s;
            `;
            
            container.appendChild(stream);
            elements.push(stream);
          }
          break;

        case 'education':
          const educationParticleCount = getElementCount(6, 4, 2);
          for (let i = 0; i < educationParticleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'knowledge-particle';
            
            const size = isSmallMobile ? 2 : 3;
            particle.style.cssText = `
              position: absolute;
              width: ${size}px;
              height: ${size}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%);
              animation: knowledgeFloat ${12 + Math.random() * 8}s ease-in-out infinite;
              animation-delay: ${Math.random() * 4}s;
            `;
            
            container.appendChild(particle);
            elements.push(particle);
          }
          break;

        case 'skills':
          const circuitCount = getElementCount(3, 2, 1);
          for (let i = 0; i < circuitCount; i++) {
            const circuit = document.createElement('div');
            circuit.className = 'circuit-line';
            
            const isHorizontal = Math.random() > 0.5;
            if (isHorizontal) {
              circuit.style.cssText = `
                position: absolute;
                width: ${30 + Math.random() * 30}%;
                height: 1px;
                left: ${Math.random() * 70}%;
                top: ${Math.random() * 100}%;
                background: linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.2) 20%, rgba(59, 130, 246, 0.3) 50%, rgba(6, 182, 212, 0.2) 80%, transparent 100%);
                animation: circuitPulse ${6 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
              `;
            } else {
              circuit.style.cssText = `
                position: absolute;
                width: 1px;
                height: ${30 + Math.random() * 30}%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 70}%;
                background: linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.2) 20%, rgba(59, 130, 246, 0.3) 50%, rgba(6, 182, 212, 0.2) 80%, transparent 100%);
                animation: circuitPulse ${6 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
              `;
            }
            
            container.appendChild(circuit);
            elements.push(circuit);
          }
          break;

        case 'journey':
          const sparkleCount = getElementCount(8, 5, 3);
          for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'timeline-sparkle';
            
            const size = isSmallMobile ? 1.5 : 2;
            sparkle.style.cssText = `
              position: absolute;
              width: ${size}px;
              height: ${size}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%);
              border-radius: 50%;
              animation: sparkleShine ${2 + Math.random() * 2}s ease-in-out infinite;
              animation-delay: ${Math.random() * 3}s;
            `;
            
            container.appendChild(sparkle);
            elements.push(sparkle);
          }
          break;

        case 'projects':
          const rainCount = getElementCount(4, 3, 2);
          for (let i = 0; i < rainCount; i++) {
            const drop = document.createElement('div');
            drop.className = 'code-rain';
            
            drop.style.cssText = `
              position: absolute;
              width: 1px;
              height: 100%;
              left: ${Math.random() * 100}%;
              background: linear-gradient(180deg, transparent 0%, rgba(34, 197, 94, 0.1) 10%, rgba(34, 197, 94, 0.1) 90%, transparent 100%);
              animation: codeRainFall ${10 + Math.random() * 5}s linear infinite;
              animation-delay: ${Math.random() * 5}s;
            `;
            
            container.appendChild(drop);
            elements.push(drop);
          }
          break;

        case 'contact':
          const waveCount = getElementCount(3, 2, 1);
          for (let i = 0; i < waveCount; i++) {
            const wave = document.createElement('div');
            wave.className = 'communication-wave';
            
            const size = isSmallMobile ? 60 : isMobile ? 80 : 100;
            wave.style.cssText = `
              position: absolute;
              width: ${size}px;
              height: ${size}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              border: 1px solid rgba(147, 51, 234, 0.1);
              border-radius: 50%;
              animation: communicationPulse ${8 + Math.random() * 4}s ease-out infinite;
              animation-delay: ${Math.random() * 4}s;
            `;
            
            container.appendChild(wave);
            elements.push(wave);
          }
          break;
      }

      elementsRef.current = elements;
    };

    // Use requestAnimationFrame for smooth initialization
    animationFrameRef.current = requestAnimationFrame(() => {
      createOptimizedEffects();
    });

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      elementsRef.current.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      elementsRef.current = [];
    };
  }, [effectType]);

  return (
    <div 
      ref={effectsRef} 
      className={`section-effects section-effects-${effectType}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1
      }}
    />
  );
};

export default SectionEffects;