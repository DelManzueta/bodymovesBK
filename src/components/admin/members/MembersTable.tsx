import React from 'react';
import { useMembers } from '../../../hooks/useMembers';
import { BentoCard } from '../../ui/cards';
import { Loader } from '../../ui/Loader';

export const MembersTable = () => {
  const { members, isLoading, error } = useMembers();

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading members</div>;

  return (
    <BentoCard>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dove/20">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Phone</th>
              <th className="px-6 py-3 text-left">Membership</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-dove/20">
                <td className="px-6 py-4">
                  {member.first_name} {member.last_name}
                </td>
                <td className="px-6 py-4">{member.email}</td>
                <td className="px-6 py-4">{member.phone}</td>
                <td className="px-6 py-4">{member.membership_type}</td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:text-primary/80">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BentoCard>
  );
};