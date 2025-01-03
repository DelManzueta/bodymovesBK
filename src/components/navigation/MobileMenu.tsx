import React from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="md:hidden">
      <button onClick={onToggle} className="p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-ivory border-t border-dove p-4">
          <nav className="flex flex-col space-y-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/classes">Classes</NavLink>
            <NavLink to="/schedule">Schedule</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/kids">Kids</NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;