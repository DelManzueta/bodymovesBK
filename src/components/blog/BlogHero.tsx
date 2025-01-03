import React from 'react';
import { BookOpen } from 'lucide-react';

const BlogHero = () => {
  return (
    <div className="relative bg-primary/5 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 text-primary mb-4">
            <BookOpen size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Our Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Insights for Your
            <span className="block">Movement Journey</span>
          </h1>
          <p className="text-lg text-charcoal/70">
            Expert advice, tips, and stories to help you move better and live healthier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;