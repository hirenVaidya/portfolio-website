import React, { useState } from 'react';
import './AnimatedLogo.css';

export default function AnimatedLogo() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);

  const handleMouseEnter = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Halfway through the animation (when text is hidden), swap the names
    setTimeout(() => {
      setIsSwapped(prev => !prev);
    }, 750);

    // End animation
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <a href="#" className="animated-logo" onMouseEnter={handleMouseEnter}>
      <span className={`name name-left ${isAnimating ? 'animate-in-out' : ''}`}>
        {isSwapped ? 'Vaidya' : 'Hiren'}
      </span>
      
      <span className={`logo-x text-accent text-tertiary ${isAnimating ? 'animate-spin' : ''}`}>
        X
      </span>
      
      <span className={`name name-right ${isAnimating ? 'animate-in-out-reverse' : ''}`}>
        {isSwapped ? 'Hiren' : 'Vaidya'}
      </span>
    </a>
  );
}
