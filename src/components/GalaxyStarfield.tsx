import React, { useEffect, useRef } from 'react';

interface GalaxyStarfieldProps {
  density?: number;
  speed?: number;
  className?: string;
}

const GalaxyStarfield: React.FC<GalaxyStarfieldProps> = ({ 
  density = 1, 
  speed = 1, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Array<{
    x: number;
    y: number;
    z: number;
    size: number;
    brightness: number;
    twinklePhase: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 8000 * density);
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        const colors = [
          'rgba(255, 255, 255, ',
          'rgba(59, 130, 246, ',
          'rgba(147, 51, 234, ',
          'rgba(6, 182, 212, ',
          'rgba(168, 85, 247, '
        ];

        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          brightness: Math.random() * 0.8 + 0.2,
          twinklePhase: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star, index) => {
        // Update twinkle phase
        star.twinklePhase += 0.02 * speed;
        
        // Calculate twinkling opacity
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        const opacity = star.brightness * twinkle;

        // Parallax effect based on scroll
        const scrollY = window.pageYOffset;
        const parallaxY = star.y + (scrollY * (star.z / 1000) * 0.5);

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, parallaxY % (canvas.height + 100), star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${opacity})`;
        ctx.fill();

        // Add glow effect for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, parallaxY % (canvas.height + 100), star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}${opacity * 0.2})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate(0);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};

export default GalaxyStarfield;