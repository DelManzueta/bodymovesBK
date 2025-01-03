import React from 'react';
import { Instagram } from 'lucide-react';
import { BentoCard } from '../ui/cards';

const InstagramFeed = () => {
  const posts = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Morning flow with our amazing community! 🧘‍♀️✨',
      link: 'https://www.instagram.com/p/abc123'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Power sculpt class bringing the energy! 💪',
      link: 'https://www.instagram.com/p/def456'
    }
  ];

  return (
    <div className="space-y-4">
      <a 
        href="https://www.instagram.com/bodymovesbk"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-primary hover:text-primary/80"
      >
        <Instagram size={24} />
        <span className="text-lg font-medium">@bodymovesbk</span>
      </a>
      
      <div className="grid grid-cols-2 gap-4">
        {posts.map(post => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <BentoCard className="overflow-hidden aspect-square">
              <div className="relative h-full">
                <img 
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm">{post.caption}</p>
                  </div>
                </div>
              </div>
            </BentoCard>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;