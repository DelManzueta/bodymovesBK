import React from 'react';
import { BentoCard } from '../ui/cards';
import { ProgramCard } from './ProgramCard';
import { programsData } from './data/programsData';

export const KidsPrograms = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programsData.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
};