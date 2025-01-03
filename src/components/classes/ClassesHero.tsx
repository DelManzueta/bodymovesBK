import React from 'react';
import { Dumbbell, Users, Star } from 'lucide-react';
import { StatCard } from '../ui/cards';

const ClassesHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-7 glass-card p-8">
        <h1 className="text-4xl font-bold mb-6">
          Transform Your Fitness Journey with
          <span className="gradient-text block mt-2">Expert-Led Classes</span>
        </h1>
        <p className="text-lg text-charcoal/80 mb-8">
          Join our vibrant community and discover a diverse range of classes designed to challenge, inspire, and transform.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <StatCard 
            value="15+" 
            label="Weekly Classes"
            color="bg-primary/90"
          />
          <StatCard 
            value="Expert" 
            label="Trainers"
            color="bg-secondary/90"
          />
          <StatCard 
            value="All" 
            label="Levels Welcome"
            color="bg-primary/90"
          />
        </div>
      </div>
      
      <div className="md:col-span-5 relative overflow-hidden rounded-3xl">
        <img 
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Fitness class"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </div>
  );
};

export default ClassesHero;