
import React, { useState, useEffect } from 'react';

interface TerminalBootProps {
  onComplete: () => void;
}

export const TerminalBoot: React.FC<TerminalBootProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const bootSequence = [
    "> Initializing ASRSH Core...",
    "> Loading Tactical Systems...",
    "> Verifying Security Protocols...",
    "> Establishing Encrypted Connection...",
    "> Clearance Granted.",
    "> Welcome to ASRSH Command Center."
  ];

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        onComplete();
      }, 1500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentLine, bootSequence.length, isComplete, onComplete]);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8">
        <div className="font-mono text-green-400 text-lg space-y-2">
          {bootSequence.slice(0, currentLine).map((line, index) => (
            <div key={index} className="animate-fade-in">
              {line}
              {index === currentLine - 1 && (
                <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Radar sweep animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-green-400 rounded-full animate-ping" />
          <div className="w-64 h-64 border border-green-400 rounded-full animate-ping absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </div>
  );
};
