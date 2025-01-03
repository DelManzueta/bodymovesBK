import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { BentoCard } from '../ui/cards';

const featuredPosts = [
  {
    id: '1',
    title: 'The Science Behind Effective Movement',
    excerpt: 'Understanding how your body moves and adapts to exercise...',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    category: 'Fitness Science'
  },
  {
    id: '2',
    title: 'Nutrition Tips for Peak Performance',
    excerpt: 'What to eat before and after your workout for optimal results...',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    category: 'Nutrition'
  }
];

const BlogBento = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Latest from the Blog</h2>
        <Link to="/blog" className="text-primary hover:text-primary/80">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredPosts.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <BentoCard className="group h-full">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
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
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-charcoal/70 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-primary">
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </BentoCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogBento;