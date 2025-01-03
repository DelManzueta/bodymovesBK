import React, { useState } from 'react';
import { BentoCard } from '../../ui/cards';
import { GeneralSettings } from './tabs/GeneralSettings';
import { NotificationSettings } from './tabs/NotificationSettings';
import { SecuritySettings } from './tabs/SecuritySettings';
import { IntegrationSettings } from './tabs/IntegrationSettings';

const tabs = [
  { id: 'general', label: 'General', component: GeneralSettings },
  { id: 'notifications', label: 'Notifications', component: NotificationSettings },
  { id: 'security', label: 'Security', component: SecuritySettings },
  { id: 'integrations', label: 'Integrations', component: IntegrationSettings }
];

export const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState('general');

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || GeneralSettings;

  return (
    <div className="space-y-6">
      <div className="flex space-x-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium
              ${activeTab === tab.id 
                ? 'bg-primary text-white' 
                : 'text-charcoal/70 hover:bg-primary/5'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <BentoCard className="p-6">
        <ActiveComponent />
      </BentoCard>
    </div>
  );
};