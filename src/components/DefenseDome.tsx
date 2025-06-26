
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { X } from 'lucide-react';

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
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="w-full h-64 mb-8 border border-newsprint-400 bg-newsprint-50 relative">
      <div className="text-center mb-2 pt-2">
        <p className="newspaper-byline text-newsprint-600">ASRSH DEFENSE MATRIX VISUALIZATION</p>
      </div>
      <DefenseDomeCanvas />
      <div className="text-center pb-2 flex justify-center items-center space-x-4">
        <button
          onClick={() => setShowExplanation(true)}
          className="newspaper-tab-button"
        >
          EXPLAIN DESIGN
        </button>
      </div>

      {/* Explanation Panel */}
      {showExplanation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border-2 border-newsprint-400 max-w-4xl max-h-[80vh] overflow-y-auto mx-4 shadow-2xl animate-page-flip">
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="border-b-2 border-newsprint-400 pb-4 mb-6 relative">
                <button
                  onClick={() => setShowExplanation(false)}
                  className="absolute top-0 right-0 p-2 hover:bg-newsprint-100 rounded"
                >
                  <X className="h-5 w-5" />
                </button>
                <h1 className="newspaper-headline text-center mb-2">
                  ASRSH DEFENSE MATRIX VISUALIZATION
                </h1>
                <p className="newspaper-byline text-center text-newsprint-600">
                  Interactive Defense Perimeter Concept — Simplified View
                </p>
              </div>

              {/* Content */}
              <div className="newspaper-column space-y-6">
                <div className="no-break">
                  <h2 className="newspaper-subhead">Strategic Overview:</h2>
                  <p className="newspaper-body">
                    This model reflects ASRSH's core military philosophy: sovereign autonomy through multi-layered real-time defense.
                  </p>
                </div>

                <div className="no-break">
                  <h2 className="newspaper-subhead">Components Explained:</h2>
                  
                  <div className="mb-4">
                    <h3 className="font-baskerville font-bold text-lg mb-2">Red Core (Center):</h3>
                    <p className="newspaper-body">
                      India's sovereign command node. This is where all decisions, intelligence fusions, and autonomous war systems are born — representing our heart of defense logic.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-baskerville font-bold text-lg mb-2">Wireframe Geodesic Sphere:</h3>
                    <p className="newspaper-body">
                      A visual of ASRSH's mesh-layered defense perimeter. Each node symbolizes drones, sensors, satellites, or cyber agents — working in real-time feedback loops.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-baskerville font-bold text-lg mb-2">Rotational Ring:</h3>
                    <p className="newspaper-body">
                      Symbolizes orbital and high-altitude AI surveillance. This never stops spinning — like our forces, it's always watching.
                    </p>
                  </div>
                </div>

                <div className="no-break">
                  <h2 className="newspaper-subhead">What It Represents:</h2>
                  <p className="newspaper-body mb-2">A sovereign defense matrix in:</p>
                  <ul className="list-disc list-inside newspaper-body space-y-1 ml-4">
                    <li>Land Operations (HUDs, Shock Suits)</li>
                    <li>Air Space (Tactical drones, jammers)</li>
                    <li>Sea Lines (swarm patrols)</li>
                    <li>Cyber Warfare (kernel protection)</li>
                    <li>Space Command (satellite sync & fallback autonomy)</li>
                  </ul>
                </div>

                <div className="pull-quote no-break">
                  <p className="text-lg font-baskerville italic text-center">
                    "Sovereignty isn't static — it's spherical."
                  </p>
                  <p className="text-center mt-4">
                    This matrix is not a diagram.
                    <br />
                    It is India's sovereign defense logic — encoded geometrically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
