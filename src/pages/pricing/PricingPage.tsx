import React from 'react';
import PricingCard from '../../components/pricing/PricingCard';

const plans = [
  {
    name: 'Drop-in',
    price: '25',
    interval: 'per class',
    features: [
      'Single class access',
      'All class types',
      'Book 24h in advance',
      'No commitment'
    ]
  },
  {
    name: 'Monthly Unlimited',
    price: '149',
    interval: 'per month',
    featured: true,
    features: [
      'Unlimited classes',
      'Priority booking',
      'Guest passes',
      'Member events',
      'Free gear storage'
    ]
  },
  {
    name: 'Class Pack',
    price: '199',
    interval: '10 classes',
    features: [
      '10 classes',
      '3-month validity',
      'Shareable with friends',
      'All class types'
    ]
  }
];

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-charcoal/70">Choose the plan that fits your lifestyle</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;