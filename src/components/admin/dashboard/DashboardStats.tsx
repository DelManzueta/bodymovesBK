import React from 'react';
import { Users, Calendar, TrendingUp, DollarSign } from 'lucide-react';
import { BentoCard } from '../../ui/cards';

const stats = [
  {
    label: 'Total Members',
    value: '524',
    change: '+12%',
    icon: Users,
    trend: 'up'
  },
  {
    label: 'Classes Today',
    value: '12',
    change: '0%',
    icon: Calendar,
    trend: 'neutral'
  },
  {
    label: 'Monthly Revenue',
    value: '$24,500',
    change: '+8%',
    icon: DollarSign,
    trend: 'up'
  },
  {
    label: 'Member Growth',
    value: '32',
    change: '+24%',
    icon: TrendingUp,
    trend: 'up'
  }
];

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <BentoCard key={stat.label} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              <p className={`
                text-sm mt-1
                ${stat.trend === 'up' ? 'text-green-600' : 'text-gray-600'}
              `}>
                {stat.change} from last month
              </p>
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <stat.icon className="text-primary" size={24} />
            </div>
          </div>
        </BentoCard>
      ))}
    </div>
  );
};