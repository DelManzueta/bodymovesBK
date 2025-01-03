import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

const ScheduleCalendar = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">March 2024</h2>
        <CalendarIcon className="text-purple-600" />
      </div>
      <div className="grid grid-cols-7 gap-2">
        {/* Calendar header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-semibold text-gray-500 py-2">
            {day}
          </div>
        ))}
        {/* Calendar days */}
        {Array.from({ length: 31 }, (_, i) => (
          <button
            key={i}
            className="aspect-square rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCalendar;