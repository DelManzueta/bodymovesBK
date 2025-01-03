import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="text-center group">
      <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-charcoal/70">{role}</p>
    </div>
  );
};