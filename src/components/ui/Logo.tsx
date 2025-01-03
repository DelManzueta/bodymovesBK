import React from 'react';
import { Activity } from 'lucide-react';

interface LogoProps {
  variant?: 'bk' | 'kids' | 'arts';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant, className = '' }) => {
  const suffix = variant ? ` ${variant.toUpperCase()}` : '';
  
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Activity className="text-primary" size={24} />
      <span className="font-bold text-charcoal">
        BodyMoves{suffix}
      </span>
    </div>
  );
};

export default Logo;