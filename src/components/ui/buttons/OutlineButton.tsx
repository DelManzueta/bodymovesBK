import React from 'react';

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: 'light' | 'dark';
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  color = 'light'
}) => {
  const baseStyles = color === 'light' 
    ? 'text-white border-white/20 hover:bg-white/10' 
    : 'text-charcoal border-charcoal/20 hover:bg-charcoal/5';

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full
        border backdrop-blur-sm
        transition-all duration-300
        ${baseStyles}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default OutlineButton;