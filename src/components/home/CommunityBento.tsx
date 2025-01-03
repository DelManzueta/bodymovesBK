import React from 'react';
import { Users, Star, MessageCircle } from 'lucide-react';
import { BentoCard } from '../ui/cards';
import InstagramFeed from '../social/InstagramFeed';

const CommunityBento = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Our Community</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <BentoCard className="h-full p-6 bg-primary/10">
            <Users className="text-primary mb-4" size={24} />
            <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
            <p className="text-charcoal/70">
              Connect with fellow members and share your fitness journey
            </p>
          </BentoCard>
        </div>

        <div className="md:col-span-4">
          <BentoCard className="h-full p-6 bg-secondary/10">
            <Star className="text-secondary mb-4" size={24} />
            <blockquote className="text-charcoal/70 mb-4">
              "BodyMovesBK transformed my approach to fitness. The community here is incredible!"
            </blockquote>
            <cite className="text-sm font-medium">- Sarah M.</cite>
          </BentoCard>
        </div>

        <div className="md:col-span-4">
          <InstagramFeed />
        </div>
      </div>
    </div>
  );
};

export default CommunityBento;