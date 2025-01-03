import React from 'react';
import { AdminLayout } from '../../components/admin/layout';
import { ReportsHeader } from '../../components/admin/reports/ReportsHeader';
import { ReportsFilters } from '../../components/admin/reports/ReportsFilters';
import { ReportsGrid } from '../../components/admin/reports/ReportsGrid';

const ReportsPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <ReportsHeader />
        <ReportsFilters />
        <ReportsGrid />
      </div>
    </AdminLayout>
  );
};

export default ReportsPage;