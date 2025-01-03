import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BentoItemProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  className?: string;
  tag?: string;
}

const BentoItem = ({ title, description, image, icon: Icon, className = '', tag }: BentoItemProps) => {
  return (
    <div className={`bento-item relative overflow-hidden rounded-3xl ${className}`}>
      <div className="group relative aspect-[4/3] w-full overflow-hidden">
        <div 
          className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          {tag && (
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium w-fit">
              {tag}
            </span>
          )}
          <div className="text-white">
            <Icon size={32} className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-200 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoItem;