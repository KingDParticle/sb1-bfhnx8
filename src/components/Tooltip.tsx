import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const tooltipAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: `scale(${isVisible ? 1 : 0.8})`,
  });

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <animated.div
        style={tooltipAnimation}
        className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip glass-effect"
      >
        {content}
      </animated.div>
    </div>
  );
};

export default Tooltip;