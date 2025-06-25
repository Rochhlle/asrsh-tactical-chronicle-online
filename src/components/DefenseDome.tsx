
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingDome = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group>
      {/* Main defense dome */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 16]} />
        <meshStandardMaterial 
          color="#002b36" 
          transparent 
          opacity={0.3}
          wireframe={true}
        />
      </mesh>
      
      {/* Inner core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 8]} />
        <meshStandardMaterial color="#ff4444" emissive="#ff2222" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Orbital rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.02, 8, 32]} />
        <meshStandardMaterial color="#002b36" opacity={0.6} transparent />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 3]}>
        <torusGeometry args={[1.5, 0.02, 8, 32]} />
        <meshStandardMaterial color="#002b36" opacity={0.6} transparent />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 2 * Math.PI / 3]}>
        <torusGeometry args={[2.5, 0.02, 8, 32]} />
        <meshStandardMaterial color="#002b36" opacity={0.6} transparent />
      </mesh>
    </group>
  );
};

const DefenseDomeCanvas = () => {
  return (
    <div style={{ width: '100%', height: '200px' }}>
      <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        <RotatingDome />
      </Canvas>
    </div>
  );
};

export const DefenseDome = () => {
  return (
    <div className="w-full h-64 mb-8 border border-newsprint-400 bg-newsprint-50">
      <div className="text-center mb-2 pt-2">
        <p className="newspaper-byline text-newsprint-600">ASRSH DEFENSE MATRIX VISUALIZATION</p>
      </div>
      <DefenseDomeCanvas />
      <div className="text-center pb-2">
        <p className="text-xs text-newsprint-600 font-merriweather italic">
          Interactive Defense Perimeter Concept - Simplified View
        </p>
      </div>
    </div>
  );
};
