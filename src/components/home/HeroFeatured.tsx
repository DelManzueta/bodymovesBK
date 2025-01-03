import React from 'react';
import { Link } from 'react-router-dom';

const HeroFeatured = () => {
  return (
    <Link to="/classes/barre" className="group">
      <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
        <img 
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Barre Class"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-1">Signature Barre Flow</h3>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">$25</span>
            <span className="text-white/80">45 min</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroFeatured;