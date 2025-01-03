import React from 'react';
import { BlogHero, BlogGrid, BlogCategories } from '../components/blog';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <BlogHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-9">
            <BlogGrid />
          </div>
          <div className="lg:col-span-3">
            <BlogCategories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;