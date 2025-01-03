import React from 'react';
import { Filter } from 'lucide-react';

const filters = ['All Classes', 'Barre', 'HIIT', 'Strength', 'Mindful'];

const ScheduleFilters = () => {
  return (
    <div className="flex items-center space-x-4 overflow-x-auto pb-4">
      <div className="flex items-center space-x-2 text-purple-600">
        <Filter size={20} />
        <span className="font-semibold">Filters:</span>
      </div>
      {filters.map((filter, index) => (
        <button
          key={index}
          className="px-4 py-2 rounded-full bg-white shadow-sm hover:bg-purple-50 transition-colors whitespace-nowrap"
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ScheduleFilters;