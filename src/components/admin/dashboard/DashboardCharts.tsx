import React from 'react';
import { BentoCard } from '../../ui/cards';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 }
];

const attendanceData = [
  { day: 'Mon', attendance: 45 },
  { day: 'Tue', attendance: 52 },
  { day: 'Wed', attendance: 48 },
  { day: 'Thu', attendance: 61 },
  { day: 'Fri', attendance: 55 },
  { day: 'Sat', attendance: 32 },
  { day: 'Sun', attendance: 28 }
];

export const DashboardCharts = () => {
  return (
    <div className="space-y-6">
      {/* Revenue Chart */}
      <BentoCard className="p-6">
        <h3 className="text-xl font-bold mb-4">Monthly Revenue</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Revenue']}
                contentStyle={{ background: 'white', border: '1px solid #eae1ff' }}
              />
              <Bar 
                dataKey="revenue" 
                fill="#b287fd"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </BentoCard>

      {/* Attendance Chart */}
      <BentoCard className="p-6">
        <h3 className="text-xl font-bold mb-4">Weekly Attendance</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`${value} members`, 'Attendance']}
                contentStyle={{ background: 'white', border: '1px solid #eae1ff' }}
              />
              <Line 
                type="monotone" 
                dataKey="attendance" 
                stroke="#b2f142"
                strokeWidth={2}
                dot={{ fill: '#b2f142', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </BentoCard>
    </div>
  );
};