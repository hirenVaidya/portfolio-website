import React, { useEffect, useRef } from 'react';

const characters = ['{', '}', '(', ')', '[', ']', '<', '>', '/', '=', '+', '-', '*', ';', ':', '_', '|', '&'];

const FallingCode = ({ color = 'rgba(168, 85, 247, 0.25)', absolute = false }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    const resizeCanvas = () => {
      if (absolute && parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 20;
    // We recalculate columns when resize happens, but let's just do it on mount for now
    let columns = Math.floor(canvas.width / fontSize);
    let drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(18, 18, 18, 0.15)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `bold ${fontSize}px monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        const x = i * fontSize + (fontSize / 2);
        const y = drops[i] * fontSize;
        
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, absolute]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: absolute ? 'absolute' : 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.8
      }}
    />
  );
};

export default FallingCode;
