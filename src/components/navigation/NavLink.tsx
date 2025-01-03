import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        relative px-4 py-2 rounded-full
        transition-all duration-300
        ${isActive 
          ? 'text-primary font-medium after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-primary'
          : 'text-charcoal hover:bg-secondary/10'
        }
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;