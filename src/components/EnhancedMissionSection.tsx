
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const EnhancedMissionSection = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const missionLines = [
    "MISSION BRIEFING: OPERATION SOVEREIGN SHIELD",
    "Objective: Establish India's first autonomous defense technology ecosystem.",
    "Phase 1: Develop indigenous combat simulation and training systems.",
    "Phase 2: Deploy smart weapon platforms with AI-driven targeting.",
    "Phase 3: Create stealth technology for next-generation warfare.",
    "Phase 4: Build sovereign AI for strategic military operations.",
    "Expected Outcome: Complete technological independence in defense sector."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (currentLine < missionLines.length) {
        if (currentChar < missionLines[currentLine].length) {
          setCurrentChar(prev => prev + 1);
        } else {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, currentLine, currentChar, missionLines]);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 0.7;
      utterance.volume = 0.6;
      speechSynthesis.speak(utterance);
    }
  };

  const handleVoiceToggle = () => {
    setVoiceEnabled(!voiceEnabled);
    if (!voiceEnabled) {
      const fullText = missionLines.slice(0, currentLine + 1).join('. ');
      speakText(fullText);
    } else {
      speechSynthesis.cancel();
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-navy-900 relative overflow-hidden">
      {/* Tactical Map Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' patternUnits='userSpaceOnUse' width='40' height='40'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%2300ff00' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex justify-between items-start mb-8">
          <h2 className="font-baskerville text-4xl font-bold text-white">
            STRATEGIC BRIEFING
          </h2>
          <button
            onClick={handleVoiceToggle}
            className="flex items-center space-x-2 bg-navy-800 hover:bg-navy-700 text-white px-4 py-2 rounded border border-green-400"
          >
            {voiceEnabled ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            <span className="font-mono text-sm">VOICE</span>
          </button>
        </div>

        <div className="bg-black/50 border-2 border-green-400 p-8 font-mono text-green-400">
          {missionLines.map((line, lineIndex) => (
            <div
              key={lineIndex}
              className="mb-4 min-h-[24px] flex items-center"
            >
              <span className="text-green-600 mr-4">{`${lineIndex + 1:02d}:`}</span>
              <span>
                {lineIndex < currentLine 
                  ? line
                  : lineIndex === currentLine 
                    ? line.substring(0, currentChar)
                    : ''
                }
                {lineIndex === currentLine && (
                  <span className="animate-pulse bg-green-400 w-2 h-5 inline-block ml-1"></span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Mission Status */}
        <div className="mt-8 flex justify-between items-center text-sm font-mono">
          <div className="flex items-center space-x-4">
            <span className="text-green-400">STATUS: BRIEFING IN PROGRESS</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-newsprint-300">ENCRYPTED CHANNEL</span>
            </div>
          </div>
          <div className="text-newsprint-400">
            PROGRESS: {Math.round((currentLine / missionLines.length) * 100)}%
          </div>
        </div>
      </div>
    </section>
  );
};
