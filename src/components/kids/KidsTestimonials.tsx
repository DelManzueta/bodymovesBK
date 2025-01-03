import React from 'react';
import { BentoCard } from '../ui/cards';
import { TestimonialCard } from './TestimonialCard';
import { testimonialData } from './data/testimonialData';

export const KidsTestimonials = () => {
  return (
    <BentoCard className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">What Parents Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </BentoCard>
  );
};