import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui';
import NavLinks, { mainNavLinks } from './NavLinks';
import NavLink from './NavLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-ivory/80 backdrop-blur-sm border-b border-dove/10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          <NavLinks />

          <div className="flex items-center space-x-4">
            <Link 
              to="/login"
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Link>

            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-dove/10">
            <div className="flex flex-col space-y-4">
              {mainNavLinks.map(({ to, label }) => (
                <NavLink key={to} to={to}>{label}</NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;