import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Dumbbell, Flame, Heart } from 'lucide-react';
import { BentoCard } from '../ui/cards';

const classes = [
  {
    icon: Music,
    name: 'Barre Fusion',
    duration: '45 min',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Dumbbell,
    name: 'Power Sculpt',
    duration: '45 min',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const ClassesBento = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Classes</h2>
        <Link to="/classes" className="text-primary hover:text-primary/80">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((cls, index) => (
          <Link key={index} to={`/classes/${cls.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <BentoCard className="relative overflow-hidden group">
              <img
                src={cls.image}
                alt={cls.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="relative z-10 p-6 text-white">
                <cls.icon className="mb-4" size={24} />
                <h3 className="text-xl font-bold mb-2">{cls.name}</h3>
                <div className="flex items-center space-x-4 text-white/80">
                  <span>{cls.duration}</span>
                  <span>•</span>
                  <span>{cls.level}</span>
                </div>
              </div>
            </BentoCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassesBento;