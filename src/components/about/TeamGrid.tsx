import React from 'react';

interface TeamGridProps {
  children: React.ReactNode;
}

export const TeamGrid: React.FC<TeamGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {children}
    </div>
  );
};