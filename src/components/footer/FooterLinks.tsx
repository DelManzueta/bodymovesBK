import React from 'react';
import { Link } from 'react-router-dom';
import { footerNavLinks } from '../navigation/NavLinks';

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-bold mb-4">Classes</h3>
        <ul className="space-y-2">
          {footerNavLinks.classes.map(({ to, label }) => (
            <li key={to}>
              <Link 
                to={to} 
                className="text-charcoal/70 hover:text-primary transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4">Community</h3>
        <ul className="space-y-2">
          {footerNavLinks.community.map(({ to, label }) => (
            <li key={to}>
              <Link 
                to={to} 
                className="text-charcoal/70 hover:text-primary transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4">Information</h3>
        <ul className="space-y-2">
          {footerNavLinks.info.map(({ to, label }) => (
            <li key={to}>
              <Link 
                to={to} 
                className="text-charcoal/70 hover:text-primary transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4">Connect</h3>
        <p className="text-charcoal/70 mb-4">Sign up for class updates and promotions</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-full border border-dove focus:outline-none focus:border-primary"
        />
      </div>
    </div>
  );
};

export default FooterLinks;