import React from 'react';
import { Plus } from 'lucide-react';
import { GradientButton } from '../../ui/buttons';

export const MembershipsHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Memberships</h1>
      <GradientButton>
        <Plus className="mr-2" size={20} />
        Add Membership
      </GradientButton>
    </div>
  );
};