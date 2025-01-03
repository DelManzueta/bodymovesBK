import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  parent: string;
  child: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, parent, child }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-secondary" size={20} />
        ))}
      </div>
      <p className="text-charcoal/70 mb-4">"{quote}"</p>
      <p className="font-semibold">{parent}</p>
      <p className="text-sm text-charcoal/60">{child}</p>
    </div>
  );
};