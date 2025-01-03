import React from 'react';
import BMICalculator from './BMICalculator';
import NutritionCoaching from './NutritionCoaching';

const WellnessBento = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Health & Wellness</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BMICalculator />
        <NutritionCoaching />
      </div>
    </div>
  );
};

export default WellnessBento;