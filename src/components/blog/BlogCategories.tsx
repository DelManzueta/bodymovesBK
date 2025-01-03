import React from 'react';
import { Link } from 'react-router-dom';
import { BentoCard } from '../ui/cards';

const categories = [
  { name: 'Fitness Science', count: 12 },
  { name: 'Nutrition', count: 8 },
  { name: 'Lifestyle', count: 15 },
  { name: 'Mental Health', count: 6 },
  { name: 'Success Stories', count: 9 }
];

const BlogCategories = () => {
  return (
    <BentoCard className="p-6">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors"
          >
            <span className="text-charcoal/80">{category.name}</span>
            <span className="text-sm text-primary">{category.count}</span>
          </Link>
        ))}
      </div>
    </BentoCard>
  );
};

export default BlogCategories;