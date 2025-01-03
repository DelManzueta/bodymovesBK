import React from 'react';
import { AdminLayout } from '../../components/admin/layout';
import { DashboardStats } from '../../components/admin/dashboard/DashboardStats';
import { DashboardCharts } from '../../components/admin/dashboard/DashboardCharts';
import { RecentBookings } from '../../components/admin/dashboard/RecentBookings';

const DashboardPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <DashboardStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DashboardCharts />
          <RecentBookings />
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;