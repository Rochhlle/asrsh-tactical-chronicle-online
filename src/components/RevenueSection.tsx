
import React from 'react';

export const RevenueSection = () => {
  return (
    <section className="mb-8 border-t-2 border-newsprint-400 pt-6">
      <h2 className="newspaper-headline text-navy-900 mb-6">
        Revenue is not our goal — sovereignty is.
      </h2>
      
      <div className="editorial-box mb-6">
        <h3 className="newspaper-subhead text-navy-900 mb-3">Revenue Philosophy</h3>
        <p className="newspaper-body italic">
          ASRSH is not built to chase profits. It is built to fund independence. Our revenue model is a war plan. Every export, every simulation, every IP license is a tactical asset — not a business unit.
        </p>
      </div>
      
      <div className="pull-quote">
        <p className="text-lg font-baskerville">
          "For every simulation sold, a soldier trains better. For every weapon exported, India grows stronger. We don't sell for margins — we build for the mission."
        </p>
        <p className="text-sm mt-2 opacity-80">— Internal Founders' Memo, 2024</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="editorial-box">
          <h4 className="font-baskerville font-bold text-lg text-navy-900 mb-2">PHASE 0 – KAAL</h4>
          <p className="newspaper-dateline">Launch: 2026</p>
          <p className="text-sm mb-2">₹5–11 Cr to build | ₹116.5 Cr revenue target</p>
          <p className="text-sm italic">"Every simulation room is a temple of readiness."</p>
        </div>
        
        <div className="editorial-box">
          <h4 className="font-baskerville font-bold text-lg text-navy-900 mb-2">PHASE 1 – IGNITION</h4>
          <p className="newspaper-dateline">Launch: 2027</p>
          <p className="text-sm mb-2">₹210 Cr in 2-year forecast</p>
          <p className="text-sm italic">"Every suit is a promise — not a product."</p>
        </div>
        
        <div className="editorial-box">
          <h4 className="font-baskerville font-bold text-lg text-navy-900 mb-2">PHASE 2 – PHANTOM</h4>
          <p className="newspaper-dateline">Launch: 2028</p>
          <p className="text-sm mb-2">Stealth licensing + exports = ₹225 Cr</p>
          <p className="text-sm italic">"India should sell stealth — not seek it."</p>
        </div>
        
        <div className="editorial-box">
          <h4 className="font-baskerville font-bold text-lg text-navy-900 mb-2">PHASE 3 – BANNER</h4>
          <p className="newspaper-dateline">Launch: 2029</p>
          <p className="text-sm mb-2">AI WarBrain & Swarm = ₹475 Cr</p>
          <p className="text-sm italic">"We don't trust foreign AI. We train ours to think in Hindi."</p>
        </div>
        
        <div className="editorial-box">
          <h4 className="font-baskerville font-bold text-lg text-navy-900 mb-2">PHASE 4 – SOVEREIGN</h4>
          <p className="newspaper-dateline">Launch: 2030</p>
          <p className="text-sm mb-2">Sovereign Foundry Exports = ₹860 Cr</p>
          <p className="text-sm italic">"We forge OS + autonomy for the Indo-Pacific, not just rifles."</p>
        </div>
      </div>
    </section>
  );
};
