import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '../../ui/form';

export const ClassesFilters = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1">
        <Input
          icon={Search}
          placeholder="Search classes..."
          className="max-w-md"
        />
      </div>
      <div className="flex gap-4">
        <select className="px-4 py-2 rounded-full border border-dove focus:outline-none focus:border-primary">
          <option value="">All Types</option>
          <option value="barre">Barre</option>
          <option value="hiit">HIIT</option>
          <option value="yoga">Yoga</option>
        </select>
        <select className="px-4 py-2 rounded-full border border-dove focus:outline-none focus:border-primary">
          <option value="">All Instructors</option>
          <option value="sarah">Sarah K.</option>
          <option value="mike">Mike T.</option>
        </select>
      </div>
    </div>
  );
};