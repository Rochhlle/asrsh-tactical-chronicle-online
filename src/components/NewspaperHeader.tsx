
import React from 'react';

export const NewspaperHeader = () => {
  return (
    <header className="border-b-4 border-newsprint-800 pb-6 mb-8">
      <div className="text-center">
        <div className="newspaper-dateline">
          MUMBAI, INDIA • MORNING EDITION • {new Date().toLocaleDateString('en-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        
        {/* Logo and Masthead Combined */}
        <div className="flex flex-col items-center justify-center mb-4">
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
          <span>•</span>
          <span>PRICE: ₹2</span>
        </div>
      </div>
    </header>
  );
};
