import React from 'react';
import { Save } from 'lucide-react';
import { GradientButton } from '../../ui/buttons';

export const SettingsHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Settings</h1>
      <GradientButton>
        <Save className="mr-2" size={20} />
        Save Changes
      </GradientButton>
    </div>
  );
};