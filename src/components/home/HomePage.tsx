import React from 'react';
import HeroBento from './HeroBento';
import ClassesBento from './ClassesBento';
import ScheduleBento from './ScheduleBento';
import CommunityBento from './CommunityBento';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="container mx-auto px-4 py-24 space-y-16">
        <HeroBento />
        <ClassesBento />
        <ScheduleBento />
        <CommunityBento />
      </div>
    </div>
  );
};

export default HomePage;