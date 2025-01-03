import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  children, 
  className = '',
  hover = true 
}) => {
  return (
    <div
      className={`
        bento-card
        ${hover ? 'hover-lift' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default BentoCard;