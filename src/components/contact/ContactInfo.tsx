import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@bodymovesbk.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '(718) 555-0123'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: '123 Movement St, Brooklyn, NY 11211'
  },
  {
    icon: Clock,
    title: 'Hours',
    content: ['Mon-Fri: 6am-9pm', 'Sat-Sun: 8am-6pm']
  }
];

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {contactDetails.map((detail) => (
        <div key={detail.title} className="flex items-center space-x-4">
          <detail.icon className="text-primary" size={24} />
          <div>
            <h3 className="font-bold">{detail.title}</h3>
            {Array.isArray(detail.content) ? (
              detail.content.map((line) => (
                <p key={line} className="text-charcoal/70">{line}</p>
              ))
            ) : (
              <p className="text-charcoal/70">{detail.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;