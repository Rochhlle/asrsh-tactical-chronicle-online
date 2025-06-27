
import React, { useState, useEffect } from 'react';

export const NewspaperHeader = () => {
  const [currentChar, setCurrentChar] = useState(0);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const dateLine = `INDIA • MORNING EDITION • ${new Date().toLocaleDateString('en-IN', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}`;

  useEffect(() => {
    // Typewriter animation
    const timer = setTimeout(() => {
      if (currentChar < dateLine.length) {
        setCurrentChar(prev => prev + 1);
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [currentChar, dateLine.length]);

  useEffect(() => {
    // Press room sound effect on load
    const initAudio = () => {
      if (!audioContext) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          setAudioContext(ctx);
          
          // Soft press room ambience
          const createPressRoomSound = () => {
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            oscillator.frequency.setValueAtTime(220, ctx.currentTime);
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);
            
            oscillator.start();
            oscillator.stop(ctx.currentTime + 2);
          };

          // Typewriter click sounds
          const createTypewriterClick = () => {
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            oscillator.frequency.setValueAtTime(800, ctx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
            
            gainNode.gain.setValueAtTime(0.02, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            
            oscillator.start();
            oscillator.stop(ctx.currentTime + 0.1);
          };

          createPressRoomSound();
          
          // Typewriter clicks during animation
          const clickInterval = setInterval(() => {
            if (currentChar < dateLine.length && Math.random() < 0.7) {
              createTypewriterClick();
            }
          }, 100);

          setTimeout(() => clearInterval(clickInterval), dateLine.length * 80);
        }
      }
    };

    initAudio();
  }, []);

  return (
    <header className="border-b-4 border-newsprint-800 pb-6 mb-8">
      <div className="text-center">
        {/* Main dateline with typewriter effect */}
        <div className="newspaper-dateline-enhanced mb-6">
          <span className="font-merriweather text-sm text-newsprint-700 tracking-widest">
            {dateLine.substring(0, currentChar)}
            {currentChar < dateLine.length && (
              <span className="animate-pulse bg-newsprint-700 w-1 h-4 inline-block ml-1"></span>
            )}
          </span>
        </div>
        
        {/* Logo and Masthead Combined */}
        <div className="flex flex-col items-center justify-center mb-4 animate-fade-in">
          <div className="flex items-center justify-center space-x-6 mb-2">
            <img 
              src="/lovable-uploads/0c0b18c2-0c24-4523-a25c-4ad14c0708a2.png" 
              alt="ASRSH Logo" 
              className="h-16 w-16 md:h-20 md:w-20 opacity-90 filter drop-shadow-lg"
            />
            <h1 className="masthead text-navy-900">
              ASRSH THE FUTURE
            </h1>
            <img 
              src="/lovable-uploads/0c0b18c2-0c24-4523-a25c-4ad14c0708a2.png" 
              alt="ASRSH Logo" 
              className="h-16 w-16 md:h-20 md:w-20 opacity-90 filter drop-shadow-lg"
            />
          </div>
        </div>
        
        <div className="newspaper-byline text-navy-700">
          INDIA'S SOVEREIGN DEFENSE REVOLUTION
        </div>
        <div className="flex justify-center items-center mt-4 space-x-8 text-sm font-merriweather">
          <span>EST. 2024</span>
          <span>•</span>
          <span>OPERATIONS COMMAND</span>
        </div>
      </div>
    </header>
  );
};
