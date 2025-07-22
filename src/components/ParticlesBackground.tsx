import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: 'transparent',
        },
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: '#3b82f6' },
          shape: { type: 'circle' },
          opacity: { value: 0.3, random: true },
          size: { value: 3, random: true },
          move: { enable: true, speed: 1, direction: 'none', outModes: { default: 'out' } },
          links: { enable: true, distance: 120, color: '#3b82f6', opacity: 0.15, width: 1 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground; 