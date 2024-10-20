import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';

interface Button3DProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button3D: React.FC<Button3DProps> = ({ children, onClick, className }) => {
  const [{ scale, rotateX, rotateY }, set] = useSpring(() => ({
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const bind = useGesture({
    onHover: ({ hovering }) => set({ scale: hovering ? 1.1 : 1 }),
    onMove: ({ xy: [px, py], event }) => {
      const target = event.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = (px - rect.left) / rect.width - 0.5;
      const y = (py - rect.top) / rect.height - 0.5;
      set({ rotateX: y * 20, rotateY: -x * 20 });
    },
    onClick: () => {
      if (onClick) onClick();
    }
  });

  return (
    <animated.button
      className={`glass-effect glow-effect px-4 py-2 rounded-lg text-white font-bold ${className}`}
      style={{
        transform: 'perspective(600px)',
        scale,
        rotateX,
        rotateY
      }}
      {...bind()}
    >
      {children}
    </animated.button>
  );
};

export default Button3D;