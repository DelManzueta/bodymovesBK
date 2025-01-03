import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  onClick, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-full
        bg-gradient-to-r from-primary to-secondary
        text-ivory font-medium
        transition-all duration-300
        hover:shadow-lg hover:scale-105
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GradientButton;