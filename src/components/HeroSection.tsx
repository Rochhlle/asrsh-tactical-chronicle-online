
import React, { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initAudio = () => {
    if (!audioContext) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      setAudioContext(ctx);
      
      // Ambient hum
      const createAmbientHum = () => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        oscillator.frequency.setValueAtTime(60, ctx.currentTime);
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.02, ctx.currentTime);
        
        oscillator.start();
        return oscillator;
      };

      // Radar pings
      const createRadarPing = () => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        oscillator.frequency.setValueAtTime(1200, ctx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.03, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        
        oscillator.start();
        oscillator.stop(ctx.currentTime + 0.3);
      };

      createAmbientHum();
      
      // Random radar pings
      const pingInterval = setInterval(() => {
        if (Math.random() < 0.3) {
          createRadarPing();
        }
      }, 3000);

      return () => clearInterval(pingInterval);
    }
  };

  return (
    <section 
      className="relative h-screen overflow-hidden bg-navy-900 flex items-center justify-center cursor-crosshair"
      onMouseEnter={initAudio}
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='hex' patternUnits='userSpaceOnUse' width='100' height='87'%3e%3cpath d='m25 0l25 14.5v29l-25 14.5l-25-14.5v-29z' fill='none' stroke='%2300ff00' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23hex)'/%3e%3c/svg%3e")`,
        }}
      />

      {/* Animated Glyphs */}
      <div className="absolute top-20 left-20 text-green-400 font-mono text-sm animate-pulse">
        <div className="flex items-center space-x-2">
          <span className="animate-ping">●</span>
          <span>SYSTEM_ACTIVE</span>
        </div>
      </div>

      <div className="absolute bottom-20 right-20 text-blue-400 font-mono text-xs">
        <div className="space-y-1">
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-blue-400 animate-pulse"></span>
            <span>█ CLASSIFIED_DATA</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-green-400 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            <span>█ SECURE_CONN</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10">
        <h1 className="font-baskerville text-6xl md:text-8xl font-bold text-white mb-6 holographic-text">
          ASRSH
        </h1>
        <p className="text-newsprint-300 text-xl md:text-2xl font-merriweather">
          Advanced Strategic Research & Security Holdings
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-green-400 font-mono text-sm">
          <span className="animate-pulse">CLEARANCE: TOP SECRET</span>
          <span>|</span>
          <span className="animate-pulse">STATUS: OPERATIONAL</span>
        </div>
      </div>

      {/* Cursor Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-green-400 animate-bounce">
        <div className="w-6 h-6 border-2 border-green-400 rotate-45"></div>
      </div>
    </section>
  );
};
