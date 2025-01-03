import React from 'react';
import { Heart, Users, Star } from 'lucide-react';

const milestones = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Started as a small community of fitness enthusiasts'
  },
  {
    year: '2021',
    title: 'Growing Community',
    description: 'Expanded our class offerings and instructor team'
  },
  {
    year: '2022',
    title: 'New Location',
    description: 'Moved to our current studio in the heart of Brooklyn'
  },
  {
    year: '2023',
    title: 'Kids Programs',
    description: 'Launched our creative arts programs for children'
  }
];

const AboutStory = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-8">Our Journey</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative">
            <div className="text-purple-600 font-bold text-xl mb-2">
              {milestone.year}
            </div>
            <h3 className="font-semibold mb-2">{milestone.title}</h3>
            <p className="text-gray-600">{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStory;