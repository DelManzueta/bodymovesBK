import React from 'react';
import { Check } from 'lucide-react';
import { GradientButton } from '../ui/buttons';

const plans = [
  {
    name: 'Drop-in',
    price: '25',
    features: ['Single class access', 'All class types', 'Book 24h in advance']
  },
  {
    name: 'Monthly Unlimited',
    price: '149',
    features: ['Unlimited classes', 'Priority booking', 'Guest passes', 'Member events']
  },
  {
    name: 'Class Pack',
    price: '199',
    features: ['10 classes', '3-month validity', 'Shareable with friends']
  }
];

const ClassesPricing = () => {
  return (
    <section className="glass-card p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Membership Options</h2>
      <p className="text-center text-charcoal/70 mb-12 max-w-2xl mx-auto">
        Choose the plan that fits your lifestyle and fitness goals
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="relative p-6 rounded-2xl bg-white/50 border border-dove/20">
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-primary mb-6">
              ${plan.price}
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <Check size={16} className="text-secondary" />
                  <span className="text-charcoal/80">{feature}</span>
                </li>
              ))}
            </ul>
            <GradientButton className="w-full">
              Choose Plan
            </GradientButton>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassesPricing;