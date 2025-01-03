import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  className = '' 
}) => {
  return (
    <div className={`
      relative overflow-hidden rounded-3xl p-6
      bg-ivory border border-dove/20
      hover:shadow-lg transition-all duration-300
      ${className}
    `}>
      <Icon className="text-primary mb-4" size={24} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-charcoal/70">{description}</p>
      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-secondary/10" />
    </div>
  );
};

export default InfoCard;