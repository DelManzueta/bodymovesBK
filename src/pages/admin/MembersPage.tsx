import React from 'react';
import { AdminLayout } from '../../components/admin/layout';
import { MembersTable } from '../../components/admin/members/MembersTable';
import { MembersFilters } from '../../components/admin/members/MembersFilters';

const MembersPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Members</h1>
          <button className="px-4 py-2 bg-primary text-white rounded-lg">
            Add Member
          </button>
        </div>
        <MembersFilters />
        <MembersTable />
      </div>
    </AdminLayout>
  );
};

export default MembersPage;