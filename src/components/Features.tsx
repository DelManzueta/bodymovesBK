import React from 'react';
import { Users, Baby, Calendar, Heart } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Join our energetic group sessions led by expert instructors'
  },
  {
    icon: Baby,
    title: 'Kids Programs',
    description: 'Fun and educational fitness programs designed for children'
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Multiple class times to fit your busy lifestyle'
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'Be part of our supportive and motivating fitness family'
  }
];

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose BodyMovesBK</h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the difference with our unique approach to fitness and wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;