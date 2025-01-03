import React from 'react';
import { Input } from '../../../ui/form';
import { GradientButton } from '../../../ui/buttons';

export const SecuritySettings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Security Settings</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Change Password</h3>
          <Input
            type="password"
            label="Current Password"
          />
          <Input
            type="password"
            label="New Password"
          />
          <Input
            type="password"
            label="Confirm New Password"
          />
          <GradientButton className="w-full md:w-auto">
            Update Password
          </GradientButton>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
          <p className="text-charcoal/70">
            Add an extra layer of security to your account by enabling two-factor authentication.
          </p>
          <GradientButton variant="secondary" className="w-full md:w-auto">
            Enable 2FA
          </GradientButton>
        </div>
      </div>
    </div>
  );
};