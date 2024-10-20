import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <meshStandardMaterial color="#00ffff" />
    </Box>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-64">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene3D;