import React from 'react';
import { Link } from 'react-router-dom';
import { BentoCard } from '../ui/cards';

const posts = [
  {
    id: '1',
    title: 'The Science Behind Effective Movement',
    excerpt: 'Understanding how your body moves and adapts to exercise is key to achieving your fitness goals...',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    category: 'Fitness Science',
    date: 'Mar 15, 2024'
  },
  {
    id: '2',
    title: 'Nutrition Tips for Peak Performance',
    excerpt: 'What to eat before and after your workout for optimal results and recovery...',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    category: 'Nutrition',
    date: 'Mar 12, 2024'
  },
  {
    id: '3',
    title: 'Building a Sustainable Fitness Routine',
    excerpt: 'Create habits that stick and design a workout schedule that fits your lifestyle...',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    category: 'Lifestyle',
    date: 'Mar 10, 2024'
  }
];

const BlogGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      {posts.map(post => (
        <Link key={post.id} to={`/blog/${post.id}`}>
          <BentoCard className="group">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-[16/9] md:aspect-square overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-charcoal/60">{post.date}</time>
                <h2 className="text-2xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-charcoal/70">{post.excerpt}</p>
              </div>
            </div>
          </BentoCard>
        </Link>
      ))}
    </div>
  );
};

export default BlogGrid;