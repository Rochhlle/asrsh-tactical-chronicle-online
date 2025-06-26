
import React, { useState } from 'react';

interface Phase {
  id: string;
  name: string;
  title: string;
  system: string;
  goal: string;
  revenue: string;
  projection: string;
  coreIP: string;
  status: 'active' | 'planning' | 'future';
  color: string;
}

const phases: Phase[] = [
  {
    id: 'phase0',
    name: 'PHASE 0 — KAAL',
    title: 'KAAL',
    system: 'Immersive Terrain Simulation + Shock Suit + AI Ops Control',
    goal: 'Redefine Indian combat training realism.',
    revenue: 'Govt Training Contracts – Army, CRPF, NSG • Simulation-as-a-Service – Map Packs + AI Scenarios • KAAL-lite Exports – Africa, SEA • Civil Use – Crisis & disaster training',
    projection: '₹116.5 Cr (3-Year)',
    coreIP: 'Shock Suit Engine, Terrain Engine, Ops UI Framework',
    status: 'active',
    color: 'border-red-500 bg-red-500/10'
  },
  {
    id: 'phase1',
    name: 'PHASE 1 — IGNITION',
    title: 'IGNITION',
    system: 'Smart Rifle, Tactical Drone, Combat HUD, Bio-Feedback Suit',
    goal: 'Build India\'s first intelligent soldier gear suite.',
    revenue: 'Direct Weapon Sales • AI HUD IP Licensing • Force Kits (Rifle + HUD + Suit) • Exports: Tactical Drones, HUDs',
    projection: '₹210 Cr (2-Year)',
    coreIP: 'Tactical HUD OS, Drone-AI Handshake Protocol',
    status: 'planning',
    color: 'border-orange-500 bg-orange-500/10'
  },
  {
    id: 'phase2',
    name: 'PHASE 2 — PHANTOM',
    title: 'PHANTOM',
    system: 'Stealth Fabrics, Radar Camouflage, Holographic Illusion',
    goal: 'Make forces invisible to sensors, visible to victory.',
    revenue: 'Stealth Gear for Garud, MARCOS, NSG • HoloSim add-ons to KAAL • Material Licensing to Drone Cos',
    projection: '₹225 Cr (2-Year)',
    coreIP: 'Active Camouflage Mesh, Holographic Layer SDK',
    status: 'planning',
    color: 'border-yellow-500 bg-yellow-500/10'
  },
  {
    id: 'phase3',
    name: 'PHASE 3 — BANNER',
    title: 'BANNER',
    system: 'AI WarBrain OS, Swarm Control Logic, Autonomous Tactical AI',
    goal: 'Build sovereign combat AI — smart enough to command, safe enough to trust.',
    revenue: 'War OS Licensing • Swarm-as-a-Service • Predictive Battle Logic IP Exports',
    projection: '₹475 Cr (2-Year)',
    coreIP: 'WarBrain Core, AI Swarm Control Stack',
    status: 'future',
    color: 'border-green-500 bg-green-500/10'
  },
  {
    id: 'phase4',
    name: 'PHASE 4 — SOVEREIGN',
    title: 'SOVEREIGN',
    system: 'Full-Stack Defense OS + Autonomous Hardware Platform',
    goal: 'Build a weapon-tech economy from soil to satellite.',
    revenue: 'Full OEM Sales – Land/Air/Sea • Sovereign OS Licensing (India + Allies) • Custom Defense Systems (Navy, Airforce, SpaceCom)',
    projection: '₹860 Cr (2-Year)',
    coreIP: 'Sovereign OS, ASRSH Foundry AI Layer, Cross-Domain Sync Protocol',
    status: 'future',
    color: 'border-blue-500 bg-blue-500/10'
  }
];

export const MissionRoadmap = () => {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'planning': return 'bg-yellow-500';
      case 'future': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'ACTIVE';
      case 'planning': return 'IN PLANNING';
      case 'future': return 'FUTURE PHASE';
      default: return 'UNKNOWN';
    }
  };

  return (
    <section className="py-16 bg-navy-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-baskerville text-4xl md:text-5xl font-bold text-white mb-4">
            STRATEGIC TECHNOLOGY SUITE
          </h2>
          <p className="text-newsprint-300 text-lg font-merriweather">
            Classified Mission Roadmap • Top Secret Clearance Required
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={`relative border-2 rounded-lg p-6 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 ${phase.color} ${
                expandedPhase === phase.id ? 'shadow-2xl scale-105' : ''
              }`}
              onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
            >
              {/* Status Light */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(phase.status)} animate-pulse`}></div>
                <span className="text-xs font-mono text-white">{getStatusText(phase.status)}</span>
              </div>

              {/* Phase Header */}
              <div className="mb-4">
                <h3 className="font-baskerville text-2xl font-bold text-white mb-2">
                  {phase.name}
                </h3>
                <p className="text-newsprint-200 font-merriweather">
                  System: {phase.system}
                </p>
                <p className="text-newsprint-200 font-merriweather mt-1">
                  Goal: {phase.goal}
                </p>
              </div>

              {/* Expanded Content */}
              {expandedPhase === phase.id && (
                <div className="mt-6 p-4 bg-black/30 rounded border border-white/20 animate-fade-in">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-mono font-bold mb-2">REVENUE STREAMS:</h4>
                      <p className="text-newsprint-200 text-sm leading-relaxed">{phase.revenue}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-blue-400 font-mono font-bold mb-2">PROJECTED REVENUE:</h4>
                      <p className="text-white font-bold text-lg">{phase.projection}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-yellow-400 font-mono font-bold mb-2">CORE IP:</h4>
                      <p className="text-newsprint-200 text-sm">{phase.coreIP}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Connection Line */}
              {index < phases.length - 1 && (
                <div className="absolute left-1/2 -bottom-4 w-px h-8 bg-gradient-to-b from-white/50 to-transparent transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
