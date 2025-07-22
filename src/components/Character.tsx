import React from 'react';

interface CharacterProps {
  onClick?: () => void;
}

const Character: React.FC<CharacterProps> = ({ onClick }) => (
  <div
    style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      zIndex: 10,
      width: '120px',
      height: '160px',
      cursor: onClick ? 'pointer' : 'default',
      filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.3))',
      transition: 'transform 0.2s',
    }}
    aria-hidden="true"
    onClick={onClick}
    tabIndex={onClick ? 0 : -1}
    role={onClick ? 'button' : undefined}
    onKeyDown={e => { if (onClick && (e.key === 'Enter' || e.key === ' ')) onClick(); }}
  >
    {/* Simple SVG mascot/character (placeholder) */}
    <svg width="100%" height="100%" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="140" rx="40" ry="12" fill="#000" opacity="0.15"/>
      <circle cx="60" cy="80" r="50" fill="#3b82f6" />
      <ellipse cx="60" cy="110" rx="30" ry="18" fill="#2563eb" />
      <circle cx="60" cy="70" r="28" fill="#fff" />
      <ellipse cx="60" cy="80" rx="18" ry="12" fill="#3b82f6" />
      <circle cx="50" cy="65" r="4" fill="#000" />
      <circle cx="70" cy="65" r="4" fill="#000" />
      <ellipse cx="60" cy="90" rx="8" ry="4" fill="#000" opacity="0.2" />
      <rect x="52" y="100" width="16" height="8" rx="4" fill="#fff" />
      <ellipse cx="60" cy="104" rx="6" ry="2" fill="#3b82f6" />
    </svg>
  </div>
);

export default Character; 