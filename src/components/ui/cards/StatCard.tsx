import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  value: string | number;
  label: string;
  color?: string;
  className?: string;
  icon?: LucideIcon;
}

const StatCard: React.FC<StatCardProps> = ({ 
  value, 
  label, 
  color = 'bg-primary/90',
  className = '',
  icon: Icon
}) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-3xl p-6
        backdrop-blur-sm text-white
        ${color} ${className}
      `}
    >
      <div className="relative z-10">
        {Icon && <Icon className="mb-3" size={24} />}
        <div className="text-4xl font-bold mb-2">{value}</div>
        <div className="text-sm opacity-80">{label}</div>
      </div>
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/10" />
    </div>
  );
};

export default StatCard;