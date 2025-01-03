import React from 'react';
import { LucideIcon } from 'lucide-react';
import { BentoCard } from '../ui/cards';

interface ProgramCardProps {
  icon: LucideIcon;
  name: string;
  age: string;
  description: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ icon: Icon, name, age, description }) => {
  return (
    <BentoCard className="p-6 hover:bg-primary/5">
      <Icon className="text-primary mb-4" size={24} />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-primary mb-2">{age}</p>
      <p className="text-charcoal/70">{description}</p>
    </BentoCard>
  );
};