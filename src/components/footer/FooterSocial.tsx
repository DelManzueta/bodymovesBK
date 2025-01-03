import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const socials = [
  { icon: Instagram, url: 'https://instagram.com/bodymovesbk' },
  { icon: Facebook, url: 'https://facebook.com/bodymovesbk' },
  { icon: Twitter, url: 'https://twitter.com/bodymovesbk' }
];

const FooterSocial = () => {
  return (
    <div className="flex items-center space-x-4">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/70 hover:text-primary transition-colors"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default FooterSocial;