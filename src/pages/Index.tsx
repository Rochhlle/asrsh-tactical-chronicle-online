
import React from 'react';
import { NewspaperHeader } from '@/components/NewspaperHeader';
import { FrontPageArticle } from '@/components/FrontPageArticle';
import { EditorialSection } from '@/components/EditorialSection';
import { RevenueSection } from '@/components/RevenueSection';
import { ClosingEditorial } from '@/components/ClosingEditorial';
import { NewspaperFooter } from '@/components/NewspaperFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-newsprint-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white shadow-2xl border border-newsprint-300 p-8 md:p-12">
          <NewspaperHeader />
          
          <main className="space-y-8">
            <FrontPageArticle />
            <EditorialSection />
            <RevenueSection />
            <ClosingEditorial />
          </main>
          
          <NewspaperFooter />
        </div>
      </div>
      
      {/* Optional Terminal Mode Toggle */}
      <div className="fixed bottom-4 right-4">
        <button 
          className="bg-navy-900 text-white px-4 py-2 rounded text-sm hover:bg-navy-700 transition-colors"
          onClick={() => alert('Terminal Mode - Coming Soon!')}
        >
          Terminal Mode
        </button>
      </div>
    </div>
  );
};

export default Index;
