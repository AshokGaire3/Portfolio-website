import React, { useEffect, useRef, useState } from 'react';

// Define constellation patterns as arrays of points (percentages for positioning)
const CONSTELLATIONS = [
  // Orion (the Hunter)
  {
    name: 'Orion',
    stars: [
      { x: 20, y: 30 }, { x: 25, y: 40 }, { x: 23, y: 50 }, { x: 21, y: 55 }, { x: 25, y: 55 }, { x: 19, y: 65 }, { x: 27, y: 65 },
    ],
    lines: [ [0,2],[1,2],[2,3],[2,4],[3,5],[4,6] ]
  },
  // Ursa Major (Big Dipper)
  {
    name: 'Ursa Major',
    stars: [ { x: 70, y: 20 }, { x: 75, y: 25 }, { x: 80, y: 30 }, { x: 85, y: 35 }, { x: 90, y: 40 }, { x: 95, y: 45 }, { x: 100, y: 50 }, ],
    lines: [ [0,1],[1,2],[2,3],[3,4],[4,5],[5,6] ]
  },
  // Cassiopeia (W shape)
  {
    name: 'Cassiopeia',
    stars: [ { x: 60, y: 70 }, { x: 63, y: 65 }, { x: 66, y: 70 }, { x: 69, y: 65 }, { x: 72, y: 70 }, ],
    lines: [ [0,1],[1,2],[2,3],[3,4] ]
  },
  // Scorpius (curved tail)
  {
    name: 'Scorpius',
    stars: [ { x: 40, y: 60 }, { x: 43, y: 65 }, { x: 46, y: 70 }, { x: 49, y: 75 }, { x: 52, y: 80 }, { x: 55, y: 85 }, { x: 58, y: 90 } ],
    lines: [ [0,1],[1,2],[2,3],[3,4],[4,5],[5,6] ]
  },
  // Cygnus (cross shape)
  {
    name: 'Cygnus',
    stars: [ { x: 80, y: 60 }, { x: 80, y: 70 }, { x: 80, y: 80 }, { x: 75, y: 75 }, { x: 85, y: 75 } ],
    lines: [ [0,1],[1,2],[1,3],[1,4] ]
  }
];

const SECTION_IDS = [
  'home', 'about', 'education', 'skills', 'journey', 'projects', 'contact',
];

function getRandomOffsets(num, seed = 42) {
  let x = seed;
  return Array.from({ length: num }, (_, i) => {
    x = Math.sin(x + i) * 10000;
    return {
      dx: 10 + Math.abs(x % 70),
      dy: 10 + Math.abs((x * 1.3) % 60)
    };
  });
}
const CONSTELLATION_OFFSETS = getRandomOffsets(CONSTELLATIONS.length);

interface GalaxyBackgroundProps {
  enabled?: boolean;
}

const GalaxyBackground: React.FC<GalaxyBackgroundProps> = ({ enabled = true }) => {
  if (!enabled) return null;
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const starfieldRef = useRef<HTMLDivElement>(null);
  const constellationRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [visibleConstellation, setVisibleConstellation] = useState<number>(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const isLowEndDevice = window.innerWidth < 768 || navigator.hardwareConcurrency < 4;
    const createStarField = () => {
      const starCount = isLowEndDevice ? 50 : 100;
      const stars: HTMLElement[] = [];
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random();
        const brightness = Math.random();
        let starClass = 'star ';
        if (size < 0.1) starClass += 'star-micro';
        else if (size < 0.3) starClass += 'star-tiny';
        else if (size < 0.6) starClass += 'star-small';
        else if (size < 0.8) starClass += 'star-medium';
        else if (size < 0.95) starClass += 'star-large';
        else starClass += 'star-giant';
        star.className = starClass;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--brightness', brightness.toString());
        star.style.setProperty('--twinkle-duration', `${4 + Math.random() * 2}s`);
        star.style.setProperty('--twinkle-delay', `${Math.random() * 5}s`);
        container.appendChild(star);
        stars.push(star);
      }
      return stars;
    };
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
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.setProperty('--size', `${1 + Math.random() * 3}px`);
        particle.style.setProperty('--opacity', `${0.3 + Math.random() * 0.4}`);
        particle.style.setProperty('--duration', `${30 + Math.random() * 10}s`);
        particle.style.setProperty('--delay', `${Math.random() * 10}s`);
        container.appendChild(particle);
        particles.push(particle);
      }
      return particles;
    };
    const stars = createStarField();
    const particles = createCosmicParticles();
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (gradientRef.current) gradientRef.current.style.transform = `translateY(${scrollY * 0.08}px)`;
      if (nebulaRef.current) nebulaRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      if (starfieldRef.current) starfieldRef.current.style.transform = `translateY(${scrollY * 0.22}px)`;
      if (constellationRef.current) constellationRef.current.style.transform = `translateY(${scrollY * 0.18}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    // Section-based constellation switching
    const sectionIds = ['home', 'about', 'education', 'skills', 'journey', 'projects', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    let lastIdx = 0;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex(s => s === entry.target);
            if (idx !== -1) {
              setFade(false);
              setTimeout(() => {
                setVisibleConstellation(idx % CONSTELLATIONS.length);
                setActiveSection(sectionIds[idx]);
                setFade(true);
              }, 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach(section => observer.observe(section));
    return () => {
      [...stars, ...particles].forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const renderConstellationLines = (stars, lines, dx, dy) => (
    <svg className="constellation-lines" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',pointerEvents:'none'}}>
      {lines.map(([from, to], idx) => {
        const a = stars[from], b = stars[to];
        return (
          <line
            key={idx}
            x1={`${a.x + dx}%`} y1={`${a.y + dy}%`} x2={`${b.x + dx}%`} y2={`${b.y + dy}%`}
            stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"
          />
        );
      })}
    </svg>
  );

  const { stars, lines } = CONSTELLATIONS[visibleConstellation];
  const { dx, dy } = CONSTELLATION_OFFSETS[visibleConstellation];

  return (
    <div className="galaxy-background" aria-hidden="true">
      <div className="gradient-foundation" ref={gradientRef}></div>
      <div className="nebula-layer" ref={nebulaRef}>
        <div className="nebula nebula-1" style={{ opacity: 0.10 }}></div>
        <div className="nebula nebula-2" style={{ opacity: 0.08 }}></div>
        <div className="nebula nebula-3" style={{ opacity: 0.07 }}></div>
      </div>
      <div
        ref={constellationRef}
        className="constellation-layer"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.7s',
          zIndex: 3,
        }}
      >
        {stars.map((star, j) => (
          <div
            key={j}
            className="constellation-star star-twinkle-hover"
            style={{
              position: 'absolute',
              left: `${star.x + dx}%`,
              top: `${star.y + dy}%`,
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#fff',
              boxShadow: '0 0 8px 2px #fff, 0 0 16px 4px #3b82f6',
              opacity: 0.95,
              zIndex: 2
            }}
          />
        ))}
        {renderConstellationLines(stars, lines, dx, dy)}
      </div>
      <div ref={el => {
        containerRef.current = el;
        starfieldRef.current = el;
      }} className="starfield-container"></div>
    </div>
  );
};

export default GalaxyBackground;