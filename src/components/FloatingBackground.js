// components/FloatingBackground.js
import FloatingSVG from './FloatingSVG.js 14-32-07-959';
import { useEffect, useState } from 'react';

const createFloatingSVGs = (count) => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}vh`, // Using viewport height to spread vertically across the entire page
      transform: `scale(${Math.random() * 0.5 + 0.5})`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      animationDelay: `${Math.random() * -5}s`, // Negative delay for immediate animation
    },
  }));
};

const FloatingBackground = ({ count = 30 }) => {
  const [svgs, setSvgs] = useState([]);

  useEffect(() => {
    setSvgs(createFloatingSVGs(count));
  }, [count]);

  return (
    <div className="floating-background">
      {svgs.map((svg) => (
        <FloatingSVG key={svg.id} style={{ ...svg.style, position: 'absolute', animationName: 'float' }} />
      ))}
    </div>
  );
};

export default FloatingBackground;
