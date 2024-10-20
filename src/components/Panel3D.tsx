import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

interface Panel3DProps {
  title: string;
  children: React.ReactNode;
}

const Panel3D: React.FC<Panel3DProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const slideAnimation = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isOpen ? 1 : 0,
  });

  return (
    <div className="relative">
      <button
        className="glass-effect glow-effect px-4 py-2 rounded-l-lg absolute right-0 top-0 transform -translate-y-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open'} {title}
      </button>
      <animated.div
        style={slideAnimation}
        className="glass-effect w-64 h-full fixed right-0 top-0 p-4 overflow-y-auto"
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
      </animated.div>
    </div>
  );
};

export default Panel3D;