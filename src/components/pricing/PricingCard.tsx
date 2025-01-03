import React from 'react';
import { Check } from 'lucide-react';
import { BentoCard } from '../ui/cards';
import { GradientButton } from '../ui/buttons';

interface PricingPlan {
  name: string;
  price: string;
  interval: string;
  features: string[];
  featured?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <BentoCard className={`p-8 ${plan.featured ? 'border-2 border-primary' : ''}`}>
      {plan.featured && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm rounded-full">
          Most Popular
        </span>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <div className="text-4xl font-bold text-primary mb-2">
          ${plan.price}
        </div>
        <div className="text-charcoal/60">{plan.interval}</div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="text-primary mr-2" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <GradientButton className="w-full">
        Choose {plan.name}
      </GradientButton>
    </BentoCard>
  );
};

export default PricingCard;