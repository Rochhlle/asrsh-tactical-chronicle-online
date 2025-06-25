
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
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
      <Sphere ref={meshRef} args={[2, 32, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#002b36" 
          transparent 
          opacity={0.3}
          wireframe={true}
        />
      </Sphere>
      
      {/* Inner core */}
      <Sphere args={[0.5, 16, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff4444" emissive="#ff2222" emissiveIntensity={0.2} />
      </Sphere>
      
      {/* Orbital rings */}
      {[1, 1.5, 2.5].map((radius, index) => (
        <mesh key={index} rotation={[Math.PI / 2, 0, index * Math.PI / 3]}>
          <torusGeometry args={[radius, 0.02, 8, 32]} />
          <meshStandardMaterial color="#002b36" opacity={0.6} transparent />
        </mesh>
      ))}
    </group>
  );
};

export const DefenseDome = () => {
  return (
    <div className="w-full h-64 mb-8 border border-newsprint-400 bg-newsprint-50">
      <div className="text-center mb-2 pt-2">
        <p className="newspaper-byline text-newsprint-600">ASRSH DEFENSE MATRIX VISUALIZATION</p>
      </div>
      <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#002b36" />
        
        <RotatingDome />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          maxDistance={10}
          minDistance={3}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className="text-center pb-2">
        <p className="text-xs text-newsprint-600 font-merriweather italic">
          Interactive Defense Perimeter Concept - Click and drag to explore
        </p>
      </div>
    </div>
  );
};
