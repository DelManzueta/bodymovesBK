import React from 'react';
import { Clock, Users } from 'lucide-react';

const classes = [
  {
    time: '7:00 AM',
    name: 'Morning Flow',
    instructor: 'Sarah K.',
    spots: 8,
    duration: '55 min'
  },
  {
    time: '9:00 AM',
    name: 'Barre Fusion',
    instructor: 'Emma R.',
    spots: 5,
    duration: '45 min'
  },
  {
    time: '12:00 PM',
    name: 'Power Sculpt',
    instructor: 'Mike T.',
    spots: 10,
    duration: '45 min'
  },
  {
    time: '5:30 PM',
    name: 'HIIT Flow',
    instructor: 'Alex M.',
    spots: 3,
    duration: '45 min'
  }
];

const ScheduleList = () => {
  return (
    <div className="space-y-4">
      {classes.map((cls, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-xl font-bold">{cls.time}</span>
                <span className="text-purple-600">•</span>
                <span className="text-gray-600">{cls.duration}</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">{cls.name}</h3>
              <p className="text-gray-600">with {cls.instructor}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-600">
                <Users size={16} />
                <span>{cls.spots} spots</span>
              </div>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                Book
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;