import React from 'react';
import { BentoCard } from '../ui/cards';
import { TeamMember } from './TeamMember';
import { TeamGrid } from './TeamGrid';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & Lead Instructor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Programming',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Barre Specialist',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

export const AboutTeam = () => {
  return (
    <BentoCard className="p-8">
      <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </TeamGrid>
    </BentoCard>
  );
};