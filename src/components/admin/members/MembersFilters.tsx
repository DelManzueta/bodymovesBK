import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '../../ui/form';

export const MembersFilters = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1">
        <Input
          icon={Search}
          placeholder="Search members..."
          className="max-w-md"
        />
      </div>
      <div className="flex gap-4">
        <select className="px-4 py-2 rounded-full border border-dove focus:outline-none focus:border-primary">
          <option value="">All Memberships</option>
          <option value="monthly">Monthly</option>
          <option value="annual">Annual</option>
          <option value="class-pack">Class Pack</option>
        </select>
        <select className="px-4 py-2 rounded-full border border-dove focus:outline-none focus:border-primary">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select className="px-4 py-2 rounded-full border border-dove focus:outline-none focus:border-primary">
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="date">Join Date</option>
          <option value="activity">Last Activity</option>
        </select>
      </div>
    </div>
  );
};