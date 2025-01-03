import React from 'react';
import { Calendar } from 'lucide-react';
import { Input } from '../../ui/form';

export const ReportsFilters = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex gap-4">
        <Input
          type="date"
          icon={Calendar}
          label="Start Date"
          className="w-40"
        />
        <Input
          type="date"
          icon={Calendar}
          label="End Date"
          className="w-40"
        />
        <select className="px-4 py-2 rounded-full border border-dove focus:outline-none focus:border-primary">
          <option value="">All Reports</option>
          <option value="revenue">Revenue</option>
          <option value="attendance">Attendance</option>
          <option value="memberships">Memberships</option>
        </select>
      </div>
    </div>
  );
};