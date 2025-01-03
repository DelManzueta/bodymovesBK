import React from 'react';
import { 
  HeroBento,
  ClassesBento,
  ScheduleBento,
  WellnessBento,
  BlogBento,
  CommunityBento 
} from '../components/home';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="container mx-auto px-4 py-24 space-y-16">
        <HeroBento />
        <ClassesBento />
        <ScheduleBento />
        <WellnessBento />
        <BlogBento />
        <CommunityBento />
      </div>
    </div>
  );
};

export default HomePage;