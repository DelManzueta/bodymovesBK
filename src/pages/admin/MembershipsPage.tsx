import React from 'react';
import { AdminLayout } from '../../components/admin/layout';
import { MembershipsTable } from '../../components/admin/memberships/MembershipsTable';
import { MembershipsHeader } from '../../components/admin/memberships/MembershipsHeader';
import { MembershipsFilters } from '../../components/admin/memberships/MembershipsFilters';

const MembershipsPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <MembershipsHeader />
        <MembershipsFilters />
        <MembershipsTable />
      </div>
    </AdminLayout>
  );
};

export default MembershipsPage;