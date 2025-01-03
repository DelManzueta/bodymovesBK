import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users } from 'lucide-react';
import { BentoCard } from '../ui/cards';

const todayClasses = [
  {
    time: '7:00 AM',
    name: 'Morning Flow',
    instructor: 'Sarah K.',
    spots: 8
  },
  {
    time: '9:00 AM',
    name: 'Barre Fusion',
    instructor: 'Emma R.',
    spots: 5
  }
];

const ScheduleBento = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Today's Schedule</h2>
        <Link to="/schedule" className="text-primary hover:text-primary/80">
          Full Schedule →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <BentoCard className="divide-y divide-dove/10">
            {todayClasses.map((cls, index) => (
              <div key={index} className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <Clock className="mx-auto mb-1 text-primary" size={20} />
                    <time className="text-sm font-medium">{cls.time}</time>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{cls.name}</h3>
                    <p className="text-sm text-charcoal/70">with {cls.instructor}</p>
                  </div>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
                  <Users size={16} />
                  <span>{cls.spots} spots</span>
                </button>
              </div>
            ))}
          </BentoCard>
        </div>

        <div className="md:col-span-4">
          <BentoCard className="p-6 bg-secondary text-charcoal">
            <Calendar className="mb-4" size={24} />
            <h3 className="text-xl font-bold mb-2">Book Your Week</h3>
            <p className="mb-6 text-charcoal/90">
              Reserve your spot in advance for popular classes
            </p>
            <Link
              to="/schedule"
              className="inline-block px-6 py-2 bg-white text-secondary rounded-full hover:bg-white/90 transition-colors"
            >
              View Schedule
            </Link>
          </BentoCard>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBento;