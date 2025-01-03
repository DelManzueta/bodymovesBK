import React from 'react';
import { Palette, Music, Star } from 'lucide-react';

const KidsHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Creative Arts for Kids</h1>
        <p className="text-lg mb-6">
          Inspiring young minds through movement, music, and artistic expression
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-xl p-4">
            <Palette className="mb-2" />
            <h3 className="font-semibold">Art & Dance</h3>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <Music className="mb-2" />
            <h3 className="font-semibold">Music & Movement</h3>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <Star className="mb-2" />
            <h3 className="font-semibold">Ages 4-12</h3>
          </div>
        </div>
      </div>
      <div 
        className="bg-cover bg-center rounded-3xl relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>
  );
};

export default KidsHero;