import React from 'react';
import { Plus } from 'lucide-react';
import { GradientButton } from '../../ui/buttons';

export const ClassesHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Classes</h1>
      <GradientButton>
        <Plus className="mr-2" size={20} />
        Add Class
      </GradientButton>
    </div>
  );
};