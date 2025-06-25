
import React from 'react';

export const NewspaperFooter = () => {
  return (
    <footer className="border-t-2 border-newsprint-400 pt-6 mt-8">
      <div className="flex justify-between items-center text-sm font-merriweather text-newsprint-600">
        <div>
          <p>Page 1</p>
          <p className="text-xs mt-1">Reproduced for the National Sovereignty Review Board</p>
          <p className="text-xs">Not for Commercial Distribution</p>
        </div>
        
        <div className="text-center">
          <p className="font-bold">ASRSH TACTICAL TIMES</p>
          <p>Operations Command • Mumbai, India</p>
        </div>
        
        <div className="text-right">
          <button 
            onClick={() => window.print()} 
            className="hover-underline font-bold"
          >
            Download This Issue
          </button>
          <p className="text-xs mt-1">{new Date().toLocaleDateString('en-IN')}</p>
        </div>
      </div>
    </footer>
  );
};
