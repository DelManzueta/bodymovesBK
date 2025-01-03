import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ 
  icon: Icon, 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-charcoal">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" 
            size={20} 
          />
        )}
        <input
          className={`
            w-full px-4 py-2 rounded-full
            ${Icon ? 'pl-10' : ''}
            border border-dove
            focus:outline-none focus:border-primary
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;