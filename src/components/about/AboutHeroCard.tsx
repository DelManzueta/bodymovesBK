import React from 'react';
import { Users, Star, Heart } from 'lucide-react';
import { StatCard } from '../ui/cards';

const stats = [
  { icon: Users, value: '5+', label: 'Years Experience' },
  { icon: Star, value: '15+', label: 'Expert Trainers' },
  { icon: Heart, value: '2K+', label: 'Happy Members' }
];

export const AboutHeroCard = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-secondary/90 p-12">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-10" />
      
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-bold text-white mb-6">
          Transforming Lives Through Movement
        </h1>
        <p className="text-xl text-white/90 mb-12">
          Join Brooklyn's most innovative fitness community where passion meets purpose. 
          We're more than just a studio – we're a movement revolution.
        </p>
        
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              color="bg-white/10"
              className="backdrop-blur-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
};