import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import { BentoCard } from '../../ui/cards';
import { Link } from 'react-router-dom';

const recentBookings = [
  {
    id: '1',
    memberName: 'Sarah Johnson',
    className: 'Barre Fusion',
    date: '2024-03-15',
    time: '09:00 AM',
    status: 'confirmed'
  },
  {
    id: '2',
    memberName: 'Michael Chen',
    className: 'HIIT Flow',
    date: '2024-03-15',
    time: '10:30 AM',
    status: 'confirmed'
  },
  {
    id: '3',
    memberName: 'Emma Rodriguez',
    className: 'Power Sculpt',
    date: '2024-03-15',
    time: '12:00 PM',
    status: 'waitlist'
  },
  {
    id: '4',
    memberName: 'David Kim',
    className: 'Morning Flow',
    date: '2024-03-15',
    time: '07:00 AM',
    status: 'cancelled'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800';
    case 'waitlist':
      return 'bg-yellow-100 text-yellow-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const RecentBookings = () => {
  return (
    <BentoCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Recent Bookings</h3>
        <Link 
          to="/admin/bookings"
          className="flex items-center text-primary hover:text-primary/80"
        >
          View All
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>

      <div className="space-y-4">
        {recentBookings.map((booking) => (
          <div 
            key={booking.id}
            className="flex items-center justify-between p-4 rounded-2xl bg-dove/5 hover:bg-dove/10 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <User size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium">{booking.memberName}</h4>
                <p className="text-sm text-charcoal/70">{booking.className}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="flex items-center text-sm text-charcoal/70">
                  <Clock size={14} className="mr-1" />
                  {booking.time}
                </div>
                <div className="text-sm text-charcoal/70">
                  {new Date(booking.date).toLocaleDateString()}
                </div>
              </div>

              <span className={`
                px-2 py-1 rounded-full text-xs font-medium capitalize
                ${getStatusColor(booking.status)}
              `}>
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};