import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '../../ui/form';

export const MembershipsFilters = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1">
        <Input
          icon={Search}
          placeholder="Search memberships..."
          className="max-w-md"
        />
      </div>
      <div className="flex gap-4">
        <select className="px-4 py-2 rounded-full border border-dove focus:outline-none focus:border-primary">
          <option value="">All Types</option>
          <option value="monthly">Monthly</option>
          <option value="annual">Annual</option>
          <option value="class-pack">Class Pack</option>
        </select>
        <select className="px-4 py-2 rounded-full border border-dove focus:outline-none focus:border-primary">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="expired">Expired</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
    </div>
  );
};