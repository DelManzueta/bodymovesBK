import React from 'react';
import { StatCard } from '../ui/cards';

interface HeroStatsProps {
  className?: string;
}

const HeroStats: React.FC<HeroStatsProps> = ({ className = '' }) => {
  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      <StatCard 
        value="15+"
        label="Weekly Classes"
        color="bg-primary/90 backdrop-blur-sm"
      />
      <StatCard 
        value="500+"
        label="Members"
        color="bg-secondary/90 backdrop-blur-sm"
      />
      <StatCard 
        value="5+"
        label="Years Experience"
        color="bg-secondary/90 backdrop-blur-sm"
      />
      <StatCard 
        value="4.9"
        label="Star Rating"
        color="bg-primary/90 backdrop-blur-sm"
      />
    </div>
  );
};

export default HeroStats;