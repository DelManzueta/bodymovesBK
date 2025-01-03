import React from 'react';
import { Edit, Trash2, MoreVertical } from 'lucide-react';
import { useMemberships } from '../../../hooks/useMemberships';
import { BentoCard } from '../../ui/cards';
import { Loader } from '../../ui/Loader';

export const MembershipsTable = () => {
  const { memberships, isLoading, error } = useMemberships();

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading memberships</div>;

  return (
    <BentoCard>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dove/20">
              <th className="px-6 py-3 text-left">Member</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Start Date</th>
              <th className="px-6 py-3 text-left">End Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {memberships.map((membership) => (
              <tr key={membership.id} className="border-b border-dove/20">
                <td className="px-6 py-4 font-medium">{membership.member_name}</td>
                <td className="px-6 py-4">{membership.type}</td>
                <td className="px-6 py-4">{new Date(membership.start_date).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  {membership.end_date ? new Date(membership.end_date).toLocaleDateString() : 'N/A'}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    membership.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {membership.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <button className="text-primary hover:text-primary/80">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-600">
                      <Trash2 size={18} />
                    </button>
                    <button className="text-charcoal/70 hover:text-charcoal">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BentoCard>
  );
};