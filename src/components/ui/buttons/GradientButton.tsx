import React from 'react';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  className = '',
  variant = 'primary',
  ...props
}) => {
  const gradients = {
    primary: 'from-primary to-secondary',
    secondary: 'from-secondary to-primary'
  };

  return (
    <button
      {...props}
      className={`
        relative px-6 py-3 rounded-full
        bg-gradient-to-r ${gradients[variant]}
        text-white font-medium
        transition-all duration-300
        hover:shadow-lg hover:scale-105
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GradientButton;