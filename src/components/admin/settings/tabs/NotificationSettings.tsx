import React from 'react';
import { Bell, Mail, MessageSquare } from 'lucide-react';
import { Checkbox } from '../../../ui/form';

export const NotificationSettings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="flex items-center text-lg font-medium">
            <Bell className="mr-2" size={20} />
            Push Notifications
          </h3>
          <div className="space-y-3 ml-7">
            <Checkbox label="New bookings" />
            <Checkbox label="Booking cancellations" />
            <Checkbox label="Class reminders" />
            <Checkbox label="Low capacity alerts" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="flex items-center text-lg font-medium">
            <Mail className="mr-2" size={20} />
            Email Notifications
          </h3>
          <div className="space-y-3 ml-7">
            <Checkbox label="Daily summary" />
            <Checkbox label="Weekly reports" />
            <Checkbox label="Member communications" />
            <Checkbox label="System updates" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="flex items-center text-lg font-medium">
            <MessageSquare className="mr-2" size={20} />
            SMS Notifications
          </h3>
          <div className="space-y-3 ml-7">
            <Checkbox label="Urgent alerts" />
            <Checkbox label="Emergency notifications" />
          </div>
        </div>
      </div>
    </div>
  );
};