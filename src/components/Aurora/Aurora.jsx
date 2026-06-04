import React from 'react';
import './Aurora.css';

export default function Aurora({ colorStops = ["#7cff67", "#B497CF", "#5227FF"], amplitude = 1, blend = 0.5 }) {
  return (
    <div className="aurora-container" style={{ opacity: blend }}>
      <div 
        className="aurora-blob blob-1" 
        style={{ background: `radial-gradient(circle at center, ${colorStops[0]} 0%, transparent 60%)`, animationDuration: `${10 / amplitude}s` }} 
      />
      <div 
        className="aurora-blob blob-2" 
        style={{ background: `radial-gradient(circle at center, ${colorStops[1]} 0%, transparent 60%)`, animationDuration: `${14 / amplitude}s` }} 
      />
      <div 
        className="aurora-blob blob-3" 
        style={{ background: `radial-gradient(circle at center, ${colorStops[2]} 0%, transparent 60%)`, animationDuration: `${12 / amplitude}s` }} 
      />
    </div>
  );
}
