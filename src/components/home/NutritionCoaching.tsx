import React from 'react';
import { Apple, Users, Calendar } from 'lucide-react';
import { BentoCard } from '../ui/cards';
import { GradientButton } from '../ui/buttons';

const coaches = [
  {
    name: 'Sarah Johnson',
    role: 'Nutrition Coach',
    specialty: 'Sports Nutrition',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Wellness Coach',
    specialty: 'Holistic Health',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

const NutritionCoaching = () => {
  return (
    <BentoCard className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Apple className="text-primary" size={24} />
        <h3 className="text-xl font-bold">Nutrition Coaching</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {coaches.map((coach, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={coach.image}
              alt={coach.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-medium">{coach.name}</h4>
              <p className="text-sm text-charcoal/70">{coach.role}</p>
              <p className="text-sm text-primary">{coach.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-charcoal/70">
          <Users size={16} />
          <span className="text-sm">1-on-1 and group sessions available</span>
        </div>
        <div className="flex items-center space-x-2 text-charcoal/70">
          <Calendar size={16} />
          <span className="text-sm">Flexible scheduling options</span>
        </div>
        <GradientButton className="w-full">
          Schedule a Consultation
        </GradientButton>
      </div>
    </BentoCard>
  );
};

export default NutritionCoaching;