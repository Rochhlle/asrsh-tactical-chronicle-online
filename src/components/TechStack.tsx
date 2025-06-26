
import React, { useState } from 'react';

interface TechModule {
  id: string;
  name: string;
  coreFunction: string;
  deepPurpose: string;
  technicalPower: string;
  valueStream: string;
  status: 'deployed' | 'testing' | 'validated';
}

const techModules: TechModule[] = [
  {
    id: 'warbrain',
    name: 'WarBrain OS™',
    coreFunction: 'Autonomous decision-making AI core for battlefield logic.',
    deepPurpose: 'Ends dependence on foreign AI/mission software in active war zones.',
    technicalPower: 'Uses predictive swarm theory, low-latency reaction nodes, and indigenous battlefield heuristics.',
    valueStream: 'License to Army, DRDO; integrate in drones, tanks, coastal ops.',
    status: 'validated'
  },
  {
    id: 'hud',
    name: 'Tactical Combat HUD',
    coreFunction: 'Real-time battlefield awareness, integrated on-visor.',
    deepPurpose: 'Replaces radio chatter + manual navigation in high-risk ops.',
    technicalPower: 'AR overlay, heartbeat sensor sync, gun status live-feed, multi-layer UI.',
    valueStream: 'Special Forces Kits, Joint Ops Training, Exports to partner nations.',
    status: 'testing'
  },
  {
    id: 'shocksuit',
    name: 'Shock Suit MK-1',
    coreFunction: 'Delivers real pain simulation for battlefield readiness.',
    deepPurpose: 'Ends unrealistic dry-drills and hollow urban training.',
    technicalPower: 'Zoned electrode mesh, haptic motor clusters, real-time instructor override.',
    valueStream: 'NDA, OTA, CRPF, NSG training; disaster/civil simulation use.',
    status: 'deployed'
  },
  {
    id: 'swarm',
    name: 'Swarm Control Logic™',
    coreFunction: 'AI-driven formation management for 10+ drone units.',
    deepPurpose: 'Makes swarm missions programmable & low-input for human ops.',
    technicalPower: 'Built on India-first neural-mesh cluster, modular payload logic.',
    valueStream: 'Aerial support, surveillance, crowd control, remote delivery in conflict.',
    status: 'testing'
  },
  {
    id: 'stealth',
    name: 'Phantom Stealth Fabric',
    coreFunction: 'Radar-diffusing cloth for suits, gear, and armor.',
    deepPurpose: 'Replace foreign camo & make SF teams disappear from enemy radar.',
    technicalPower: 'Layered diffraction mesh, thermal-resistant compound, light-bending core.',
    valueStream: 'Special Forces, anti-terror teams, KAAL upgrade modules.',
    status: 'testing'
  },
  {
    id: 'os',
    name: 'ASRSH Sovereign OS',
    coreFunction: 'Fully Indian hardware-software stack for defense electronics.',
    deepPurpose: 'Eliminate kernel/data leaks from Western OS layers (e.g., Linux, Android forks).',
    technicalPower: 'Microkernel-based, offline-autonomous, hardened against CBRNE/EMP.',
    valueStream: 'Embedded in drones, tanks, missiles, HQ systems, smart helmets.',
    status: 'validated'
  }
];

export const TechStack = () => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-navy-900 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 via-transparent to-green-500/20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-baskerville text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            ASRSH CORE SYSTEMS
          </h2>
          <p className="text-newsprint-300 text-lg font-merriweather">
            Sovereign Technology Modules • Classified IP Portfolio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techModules.map((module) => {
            return (
              <div
                key={module.id}
                className="relative bg-gradient-to-br from-navy-800/50 to-black/50 border border-blue-500/30 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20"
                onMouseEnter={() => setHoveredModule(module.id)}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
              >
                {/* Module Name */}
                <div className="mb-4">
                  <h3 className="font-baskerville text-xl font-bold text-white">
                    {module.name}
                  </h3>
                </div>

                {/* Core Function */}
                <div className="mb-4">
                  <h4 className="text-green-400 font-mono font-bold text-sm mb-2">CORE FUNCTION:</h4>
                  <p className="text-newsprint-200 text-sm">{module.coreFunction}</p>
                </div>

                {/* Hover Effect */}
                {hoveredModule === module.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-lg pointer-events-none animate-fade-in"></div>
                )}

                {/* Expanded Content */}
                {expandedModule === module.id && (
                  <div className="mt-6 p-4 bg-black/50 rounded border border-white/20 animate-fade-in">
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-yellow-400 font-mono font-bold text-sm mb-1">DEEP PURPOSE:</h4>
                        <p className="text-newsprint-200 text-sm">{module.deepPurpose}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-blue-400 font-mono font-bold text-sm mb-1">TECHNICAL POWER:</h4>
                        <p className="text-newsprint-200 text-sm">{module.technicalPower}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-purple-400 font-mono font-bold text-sm mb-1">VALUE STREAM:</h4>
                        <p className="text-newsprint-200 text-sm">{module.valueStream}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Sanskrit Footer */}
      <div className="text-center mt-16">
        <p className="text-gold-400 font-merriweather text-lg opacity-70">
          स्वराज्यस्य यंत्रनिर्माणं — राष्ट्रधर्मः
        </p>
        <p className="text-newsprint-400 text-sm mt-2">
          Sovereign Technology Creation — National Duty
        </p>
      </div>
    </section>
  );
};
