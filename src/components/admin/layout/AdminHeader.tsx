import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { Logo } from '../../ui';

export const AdminHeader = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white border-b border-dove/20 sticky top-0 z-40">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Logo />
            <div className="hidden md:flex items-center max-w-xl flex-1">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" size={20} />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-dove focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-dove/10 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="text-right hidden md:block">
                <p className="font-medium">
                  {user?.email?.split('@')[0]}
                </p>
                <p className="text-sm text-charcoal/60">
                  Administrator
                </p>
              </div>
              <button className="p-2 bg-dove/10 rounded-full">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};