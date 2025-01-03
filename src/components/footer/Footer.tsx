import React from 'react';
import { Logo } from '../ui';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';

const Footer = () => {
  return (
    <footer className="bg-ivory border-t border-dove/20">
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <Logo />
            <FooterSocial />
          </div>
          
          <FooterLinks />
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-dove/20">
            <p className="text-sm text-charcoal/70">
              © {new Date().getFullYear()} BodyMovesBK. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-charcoal/70">
              <a href="/privacy" className="hover:text-primary">Privacy</a>
              <a href="/terms" className="hover:text-primary">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;