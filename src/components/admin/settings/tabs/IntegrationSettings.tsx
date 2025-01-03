import React from 'react';
import { BentoCard } from '../../../ui/cards';
import { GradientButton } from '../../../ui/buttons';

const integrations = [
  {
    name: 'Google Calendar',
    description: 'Sync class schedules with Google Calendar',
    connected: true
  },
  {
    name: 'Stripe',
    description: 'Process payments and manage subscriptions',
    connected: true
  },
  {
    name: 'Mailchimp',
    description: 'Email marketing and automation',
    connected: false
  },
  {
    name: 'Zoom',
    description: 'Virtual class integration',
    connected: false
  }
];

export const IntegrationSettings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Integrations</h2>
      
      <div className="grid gap-4">
        {integrations.map(integration => (
          <BentoCard key={integration.name} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{integration.name}</h3>
                <p className="text-sm text-charcoal/70">{integration.description}</p>
              </div>
              <GradientButton variant={integration.connected ? 'secondary' : 'primary'}>
                {integration.connected ? 'Disconnect' : 'Connect'}
              </GradientButton>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  );
};