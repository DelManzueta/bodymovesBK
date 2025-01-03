import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className={`
          rounded border-dove text-primary 
          focus:ring-primary focus:ring-offset-0
          ${className}
        `}
        {...props}
      />
      <span className="text-sm text-charcoal/70">{label}</span>
    </label>
  );
};

export default Checkbox;