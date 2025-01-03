import React from 'react';
import { AdminLayout } from '../../components/admin/layout';
import { SettingsHeader } from '../../components/admin/settings/SettingsHeader';
import { SettingsTabs } from '../../components/admin/settings/SettingsTabs';

const SettingsPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <SettingsHeader />
        <SettingsTabs />
      </div>
    </AdminLayout>
  );
};

export default SettingsPage;