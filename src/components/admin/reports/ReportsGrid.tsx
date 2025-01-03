import React from 'react';
import { BentoCard } from '../../ui/cards';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000, attendance: 240 },
  { name: 'Feb', revenue: 3000, attendance: 220 },
  { name: 'Mar', revenue: 2000, attendance: 280 },
  { name: 'Apr', revenue: 2780, attendance: 250 },
  { name: 'May', revenue: 1890, attendance: 210 },
  { name: 'Jun', revenue: 2390, attendance: 230 }
];

export const ReportsGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <BentoCard className="p-6">
        <h3 className="text-xl font-bold mb-4">Revenue Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#b287fd" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </BentoCard>

      <BentoCard className="p-6">
        <h3 className="text-xl font-bold mb-4">Attendance Trends</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attendance" fill="#b2f142" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </BentoCard>
    </div>
  );
};