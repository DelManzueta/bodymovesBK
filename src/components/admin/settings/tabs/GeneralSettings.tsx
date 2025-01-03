import React from 'react';
import { Input } from '../../../ui/form';

export const GeneralSettings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">General Settings</h2>
      
      <div className="space-y-4">
        <Input
          label="Studio Name"
          defaultValue="BodyMovesBK"
        />
        <Input
          label="Contact Email"
          type="email"
          defaultValue="hello@bodymovesbk.com"
        />
        <Input
          label="Phone Number"
          type="tel"
          defaultValue="+1 (718) 555-0123"
        />
        <Input
          label="Address"
          defaultValue="123 Movement St, Brooklyn, NY 11211"
        />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-charcoal">
            Business Hours
          </label>
          <textarea
            className="w-full px-4 py-2 rounded-2xl border border-dove focus:outline-none focus:border-primary"
            rows={3}
            defaultValue="Mon-Fri: 6am-9pm&#10;Sat-Sun: 8am-6pm"
          />
        </div>
      </div>
    </div>
  );
};