import React from 'react';

interface StatCardProps {
  value: string | number;
  label: string;
  color?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  value, 
  label, 
  color = 'bg-primary/90',
  className = '' 
}) => {
  return (
    <div className={`stat-card ${color} ${className}`}>
      <div className="stat-background" />
      <div className="relative z-10">
        <div className="text-4xl font-bold mb-2">{value}</div>
        <div className="text-sm opacity-80">{label}</div>
      </div>
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/10" />
    </div>
  );
};

export default StatCard;