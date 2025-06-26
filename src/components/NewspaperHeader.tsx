
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
        <h1 className="masthead text-navy-900 mb-2">
          ASRSH THE FUTURE
        </h1>
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
