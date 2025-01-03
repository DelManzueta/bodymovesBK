import React from 'react';
import NavLink from './NavLink';

export const mainNavLinks = [
  { to: '/classes', label: 'Classes' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/kids', label: 'Kids' },
  { to: '/contact', label: 'Contact' }
];

export const footerNavLinks = {
  classes: [
    { to: '/schedule', label: 'Schedule' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/classes', label: 'Class Descriptions' },
    { to: '/contact', label: 'Private Sessions' }
  ],
  community: [
    { to: '/about', label: 'About Us' },
    { to: '/team', label: 'Our Team' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' }
  ],
  info: [
    { to: '/faq', label: 'FAQ' },
    { to: '/terms', label: 'Terms of Service' },
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/careers', label: 'Careers' }
  ]
};

const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      {mainNavLinks.map(({ to, label }) => (
        <NavLink key={to} to={to}>{label}</NavLink>
      ))}
    </div>
  );
};

export default NavLinks;