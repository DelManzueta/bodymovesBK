import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { BentoCard } from '../ui/cards';
import { Input } from '../ui/form';
import { GradientButton } from '../ui/buttons';

const BMICalculator = () => {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const heightInInches = (parseInt(feet) * 12) + parseInt(inches);
    const weightInPounds = parseFloat(weight);
    
    if (heightInInches && weightInPounds) {
      const calculatedBMI = (weightInPounds * 703) / (heightInInches * heightInInches);
      setBMI(Math.round(calculatedBMI * 10) / 10);
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-500' };
    if (bmi < 25) return { category: 'Normal', color: 'text-green-500' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-500' };
    return { category: 'Obese', color: 'text-red-500' };
  };

  return (
    <BentoCard className="p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="text-primary" size={24} />
        <h3 className="text-xl font-bold">BMI Calculator</h3>
      </div>

      <form onSubmit={calculateBMI} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="number"
            label="Height (ft)"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            placeholder="5"
            min="0"
            max="8"
            required
          />
          <Input
            type="number"
            label="Height (in)"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            placeholder="8"
            min="0"
            max="11"
            required
          />
        </div>
        <Input
          type="number"
          label="Weight (lbs)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="150"
          min="0"
          step="0.1"
          required
        />
        <GradientButton type="submit" className="w-full">
          Calculate BMI
        </GradientButton>
      </form>

      {bmi && (
        <div className="mt-4 p-4 bg-primary/5 rounded-2xl">
          <p className="text-lg font-medium mb-1">
            Your BMI: <span className="text-primary">{bmi}</span>
          </p>
          <p className="text-sm text-charcoal/70">
            Category:{' '}
            <span className={getBMICategory(bmi).color}>
              {getBMICategory(bmi).category}
            </span>
          </p>
          <p className="text-xs text-charcoal/60 mt-2">
            Note: BMI is a general indicator and may not be accurate for athletes, elderly, or pregnant individuals.
          </p>
        </div>
      )}
    </BentoCard>
  );
};

export default BMICalculator;