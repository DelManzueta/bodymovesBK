import React from 'react';
import { Music, Dumbbell, Flame, Heart } from 'lucide-react';
import { BentoCard } from '../ui/cards';

const classes = [
  {
    icon: Music,
    name: 'Barre Fusion',
    description: 'Blend of ballet, pilates, and strength training',
    duration: '55 min',
    level: 'All Levels',
    color: 'bg-primary/5'
  },
  {
    icon: Dumbbell,
    name: 'Power Sculpt',
    description: 'High-intensity strength and cardio',
    duration: '45 min',
    level: 'Intermediate',
    color: 'bg-secondary/5'
  },
  {
    icon: Flame,
    name: 'HIIT Flow',
    description: 'Dynamic intervals with recovery',
    duration: '45 min',
    level: 'Advanced',
    color: 'bg-primary/5'
  },
  {
    icon: Heart,
    name: 'Mindful Movement',
    description: 'Gentle stretching and mobility',
    duration: '60 min',
    level: 'Beginner',
    color: 'bg-secondary/5'
  }
];

const ClassesList = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Featured Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((cls, index) => (
          <BentoCard key={index} className={cls.color}>
            <div className="p-6">
              <cls.icon className="text-primary mb-4" size={24} />
              <h3 className="text-xl font-bold mb-2">{cls.name}</h3>
              <p className="text-charcoal/70 mb-4">{cls.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary font-medium">{cls.duration}</span>
                <span className="text-secondary font-medium">{cls.level}</span>
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
};

export default ClassesList;