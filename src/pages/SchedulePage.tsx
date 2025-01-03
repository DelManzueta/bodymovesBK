import React, { useState } from 'react';
import { Calendar, Clock, Users, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { BentoCard } from '../components/ui/cards';
import { GradientButton } from '../components/ui/buttons';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const filters = ['All Classes', 'Barre', 'HIIT', 'Strength', 'Mindful'];

const classes = [
  {
    time: '7:00 AM',
    name: 'Morning Flow',
    instructor: 'Sarah K.',
    spots: 8,
    duration: '55 min',
    category: 'Mindful'
  },
  {
    time: '9:00 AM',
    name: 'Barre Fusion',
    instructor: 'Emma R.',
    spots: 5,
    duration: '45 min',
    category: 'Barre'
  },
  {
    time: '12:00 PM',
    name: 'Power Sculpt',
    instructor: 'Mike T.',
    spots: 10,
    duration: '45 min',
    category: 'Strength'
  },
  {
    time: '5:30 PM',
    name: 'HIIT Flow',
    instructor: 'Alex M.',
    spots: 3,
    duration: '45 min',
    category: 'HIIT'
  }
];

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState('All Classes');

  const nextDay = () => {
    const next = new Date(selectedDate);
    next.setDate(selectedDate.getDate() + 1);
    setSelectedDate(next);
  };

  const prevDay = () => {
    const prev = new Date(selectedDate);
    prev.setDate(selectedDate.getDate() - 1);
    setSelectedDate(prev);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="md:col-span-3 space-y-6">
          <BentoCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <Filter size={20} className="text-primary" />
            </div>
            <div className="space-y-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`
                    w-full px-4 py-2 rounded-full text-left transition-colors
                    ${selectedFilter === filter 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-primary/5'
                    }
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="p-6 bg-secondary text-charcoal">
            <Calendar className="mb-4" size={24} />
            <h3 className="text-xl font-bold mb-2">Need Help?</h3>
            <p className="mb-6 text-charcoal/90">
              Our team is here to help you find the perfect class for your fitness journey.
            </p>
            <GradientButton className="w-full">
              Contact Us
            </GradientButton>
          </BentoCard>
        </div>

        {/* Main Content */}
        <div className="md:col-span-9 space-y-6">
          {/* Date Navigation */}
          <BentoCard className="p-6">
            <div className="flex items-center justify-between">
              <button 
                onClick={prevDay}
                className="p-2 hover:bg-primary/5 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="text-center">
                <h2 className="text-2xl font-bold">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                  })}
                </h2>
                <p className="text-charcoal/70">
                  {classes.length} classes available
                </p>
              </div>
              <button 
                onClick={nextDay}
                className="p-2 hover:bg-primary/5 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </BentoCard>

          {/* Class List */}
          <div className="space-y-4">
            {classes
              .filter(cls => selectedFilter === 'All Classes' || cls.category === selectedFilter)
              .map((cls, index) => (
                <BentoCard key={index} className="p-6 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="text-center w-24">
                        <Clock className="mx-auto mb-1 text-primary" size={20} />
                        <time className="text-lg font-bold">{cls.time}</time>
                        <p className="text-sm text-charcoal/60">{cls.duration}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{cls.name}</h3>
                        <p className="text-charcoal/70">with {cls.instructor}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-center px-4 py-2 bg-primary/5 rounded-full">
                        <Users size={16} className="mx-auto mb-1 text-primary" />
                        <span className="text-sm font-medium">{cls.spots} spots</span>
                      </div>
                      <GradientButton>
                        Book Now
                      </GradientButton>
                    </div>
                  </div>
                </BentoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;