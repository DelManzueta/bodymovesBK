import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroPromo = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">New Member Promo</span>
          </div>
          <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
            25% OFF
          </span>
        </div>
        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default HeroPromo;