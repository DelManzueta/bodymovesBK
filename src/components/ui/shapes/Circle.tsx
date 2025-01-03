import React from 'react';

interface CircleProps {
  size?: number;
  color?: string;
  className?: string;
}

const Circle: React.FC<CircleProps> = ({ 
  size = 100, 
  color = '#f9d84b',
  className = '' 
}) => {
  return (
    <div 
      className={`rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    />
  );
};

export default Circle;