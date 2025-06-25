
import React, { useState } from 'react';
import { TerminalBoot } from '@/components/TerminalBoot';
import { NewspaperHeader } from '@/components/NewspaperHeader';
import { FrontPageArticle } from '@/components/FrontPageArticle';
import { DefenseDome } from '@/components/DefenseDome';
import { EditorialSection } from '@/components/EditorialSection';
import { RevenueSection } from '@/components/RevenueSection';
import { MissionRoadmap } from '@/components/MissionRoadmap';
import { TechStack } from '@/components/TechStack';
import { ClosingEditorial } from '@/components/ClosingEditorial';
import { NewspaperFooter } from '@/components/NewspaperFooter';

const Index = () => {
  const [bootComplete, setBootComplete] = useState(false);

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  if (!bootComplete) {
    return <TerminalBoot onComplete={handleBootComplete} />;
  }

  return (
    <div className="min-h-screen bg-newsprint-100 relative">
      {/* CRT Glow Effect */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 via-transparent to-blue-400/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-20">
        <div className="bg-white shadow-2xl border border-newsprint-300 p-8 md:p-12">
          <NewspaperHeader />
          
          <main className="space-y-8">
            <FrontPageArticle />
            <DefenseDome />
            <EditorialSection />
            <RevenueSection />
            <ClosingEditorial />
          </main>
          
          <NewspaperFooter />
        </div>
      </div>

      {/* New Cinematic Sections */}
      <MissionRoadmap />
      <TechStack />
      
      {/* Terminal Mode Toggle with Enhanced Styling */}
      <div className="fixed bottom-4 right-4 z-30">
        <button 
          className="bg-gradient-to-r from-navy-900 to-blue-800 text-white px-6 py-3 rounded-lg text-sm hover:from-navy-700 hover:to-blue-600 transition-all duration-300 shadow-lg border border-blue-500/50 font-mono"
          onClick={() => alert('Terminal Mode - Accessing Classified Systems...')}
        >
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          TERMINAL MODE
        </button>
      </div>
    </div>
  );
};

export default Index;
