import React from 'react';
import { AdminLayout } from '../../components/admin/layout';
import { ClassesTable } from '../../components/admin/classes/ClassesTable';
import { ClassesFilters } from '../../components/admin/classes/ClassesFilters';
import { ClassesHeader } from '../../components/admin/classes/ClassesHeader';

const ClassesAdminPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <ClassesHeader />
        <ClassesFilters />
        <ClassesTable />
      </div>
    </AdminLayout>
  );
};

export default ClassesAdminPage;