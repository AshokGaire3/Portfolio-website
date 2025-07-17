import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  isVisible, 
  delay = 0 
}) => {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setTimeout(() => {
        setAnimationClass('page-enter-active');
      }, delay);
    } else {
      setAnimationClass('page-exit-active');
      setTimeout(() => {
        setShouldRender(false);
      }, 500); // Match transition duration
    }
  }, [isVisible, delay]);

  if (!shouldRender) return null;

  return (
    <div className={`page-transition ${animationClass}`}>
      {children}
    </div>
  );
};

export default PageTransition;