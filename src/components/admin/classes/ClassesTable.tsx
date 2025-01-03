import React from 'react';
import { Edit, Trash2, MoreVertical } from 'lucide-react';
import { useClasses } from '../../../hooks/useClasses';
import { BentoCard } from '../../ui/cards';
import { Loader } from '../../ui/Loader';

export const ClassesTable = () => {
  const { classes, isLoading, error } = useClasses();

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading classes</div>;

  return (
    <BentoCard>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dove/20">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Instructor</th>
              <th className="px-6 py-3 text-left">Duration</th>
              <th className="px-6 py-3 text-left">Capacity</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls.id} className="border-b border-dove/20">
                <td className="px-6 py-4 font-medium">{cls.name}</td>
                <td className="px-6 py-4">{cls.instructor_name}</td>
                <td className="px-6 py-4">{cls.duration}</td>
                <td className="px-6 py-4">{cls.capacity}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    cls.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {cls.active ? 'Active' : 'Inactive'}
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