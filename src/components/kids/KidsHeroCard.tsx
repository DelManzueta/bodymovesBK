import React from 'react';
import { Palette, Music, Star } from 'lucide-react';
import { GradientButton } from '../ui/buttons';

const features = [
  { icon: Palette, label: 'Creative Expression' },
  { icon: Music, label: 'Music & Movement' },
  { icon: Star, label: 'Skill Development' }
];

export const KidsHeroCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative rounded-3xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Kids in dance class"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <feature.icon className="text-white mb-2" size={24} />
                <p className="text-white text-sm">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-secondary to-primary rounded-3xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Creative Arts for Kids</h1>
        <p className="text-xl mb-8">
          Nurturing young minds through movement, music, and artistic expression. 
          Watch your child grow, create, and shine.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>Ages 4-12 years</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>Small class sizes</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>Expert instructors</span>
          </li>
        </ul>
        <GradientButton className="bg-white text-primary hover:bg-white/90">
          Enroll Now
        </GradientButton>
      </div>
    </div>
  );
};