import React, { useEffect, useRef } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
}

interface Planet {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotationSpeed: number;
}

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate stars
    const stars: Star[] = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 1 + Math.random() * 2,
      brightness: 0.1 + Math.random() * 0.2, // Much lower brightness range
      twinkleSpeed: 0.02 + Math.random() * 0.03
    }));

    // Generate planets
    const planets: Planet[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 15 + Math.random() * 25,
      color: `hsl(${200 + Math.random() * 20}, 60%, ${70 + Math.random() * 15}%)`, // Light blue variations only
      rotationSpeed: 0.001 + Math.random() * 0.002
    }));

    let time = 0;

    const drawStar = (star: Star) => {
      const twinkle = Math.sin(time * star.twinkleSpeed + star.id) * 0.3 + 0.7;
      const brightness = star.brightness * twinkle * 0.1; // Much lower brightness
      
      ctx.save();
      ctx.fillStyle = `rgba(173, 216, 230, ${brightness})`; // Light blue only
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * twinkle, 0, Math.PI * 2);
      ctx.fill();
      
      // Add very subtle glow effect
      ctx.fillStyle = `rgba(173, 216, 230, ${brightness * 0.05})`; // Very subtle glow
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 1.2, 0, Math.PI * 2); // Smaller glow
      ctx.fill();
      ctx.restore();
    };

    const drawPlanet = (planet: Planet) => {
      const rotation = time * planet.rotationSpeed;
      const rotatedX = planet.x + Math.cos(rotation) * 5;
      const rotatedY = planet.y + Math.sin(rotation) * 5;
      
      ctx.save();
      
      // Main planet - very subtle
      ctx.fillStyle = 'rgba(6, 2, 121, 0.08)'; // Very low opacity
      ctx.beginPath();
      ctx.arc(rotatedX, rotatedY, planet.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Very subtle planet glow
      ctx.fillStyle = 'rgba(105, 210, 245, 0.02)'; // Very low glow
      ctx.beginPath();
      ctx.arc(rotatedX, rotatedY, planet.size * 1.1, 0, Math.PI * 2); // Smaller glow
      ctx.fill();
      
      // Planet rings (for some planets) - very subtle
      if (planet.id % 2 === 0) {
        ctx.strokeStyle = `rgba(173, 216, 230, 0.03)`; // Very subtle ring
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(rotatedX, rotatedY, planet.size * 1.4, planet.size * 0.2, rotation, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const animate = () => {
      // Clear canvas with very subtle galaxy background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(1, 105, 242, 0.01)');   // Very subtle center
      gradient.addColorStop(0.3, 'rgba(2, 38, 60, 0)'); // Very subtle mid
      gradient.addColorStop(0.6, 'rgba(7, 7, 7, 0)'); // Very subtle outer
      gradient.addColorStop(1, 'rgba(55, 55, 246, 0)');     // Very subtle edges
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars with very low opacity
      stars.forEach(drawStar);

      // Draw planets with very low opacity
      planets.forEach(drawPlanet);

      // Add very subtle nebula clouds
      for (let i = 0; i < 3; i++) {
        const x = (time * 0.1 + i * 200) % canvas.width;
        const y = (Math.sin(time * 0.05 + i) * 100 + i * 150) % canvas.height;
        const size = 100 + Math.sin(time * 0.1 + i) * 50;
        
        const nebulaGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        nebulaGradient.addColorStop(0, 'rgba(108, 211, 246, 0)'); // Very subtle
        nebulaGradient.addColorStop(0.5, 'rgba(12, 133, 209, 0.002)'); // Very subtle
        nebulaGradient.addColorStop(1, 'rgba(7, 74, 230, 0)');
        
        ctx.fillStyle = nebulaGradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add very subtle cosmic dust particles
      for (let i = 0; i < 30; i++) {
        const x = (time * 0.3 + i * 50) % canvas.width;
        const y = (Math.sin(time * 0.02 + i) * 50 + i * 30) % canvas.height;
        const size = 0.5 + Math.sin(time * 0.1 + i) * 0.3;
        
        ctx.fillStyle = `rgba(173, 216, 230, ${0.005 + Math.sin(time * 0.2 + i) * 0.003})`; // Very subtle
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      time += 0.016; // 60fps
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        background: 'linear-gradient(135deg, #0A0A23 0%, #1A0B2E 30%, #2D1B69 60%, #0F0F23 100%)'
      }}
    />
  );
};

export default GalaxyBackground; 