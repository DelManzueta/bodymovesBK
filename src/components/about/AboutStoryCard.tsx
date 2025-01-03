import React from 'react';
import { BentoCard } from '../ui/cards';

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Started with a vision to revolutionize fitness in Brooklyn'
  },
  {
    year: '2020',
    title: 'Digital Evolution',
    description: 'Launched virtual classes, reaching members worldwide'
  },
  {
    year: '2021',
    title: 'Community Growth',
    description: 'Expanded our studio and launched signature programs'
  },
  {
    year: '2022',
    title: 'Kids Programs',
    description: 'Introduced creative movement classes for children'
  }
];

export const AboutStoryCard = () => {
  return (
    <BentoCard className="p-8">
      <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-16 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20" />
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative flex items-start gap-8 group">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
              </div>
              <div>
                <span className="text-sm text-primary font-medium">{item.year}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                <p className="text-charcoal/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
};