import React from 'react';
import { Download } from 'lucide-react';
import { GradientButton } from '../../ui/buttons';

export const ReportsHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Reports</h1>
      <GradientButton>
        <Download className="mr-2" size={20} />
        Export Data
      </GradientButton>
    </div>
  );
};