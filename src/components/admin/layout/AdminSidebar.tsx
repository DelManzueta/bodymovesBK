import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar,
  CreditCard,
  Settings,
  BarChart
} from 'lucide-react';

const navItems = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/admin/members', icon: Users, label: 'Members' },
  { to: '/admin/classes', icon: Calendar, label: 'Classes' },
  { to: '/admin/memberships', icon: CreditCard, label: 'Memberships' },
  { to: '/admin/reports', icon: BarChart, label: 'Reports' },
  { to: '/admin/settings', icon: Settings, label: 'Settings' }
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg
              ${location.pathname === to 
                ? 'bg-primary text-white' 
                : 'text-gray-600 hover:bg-gray-50'
              }
            `}
          >
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};