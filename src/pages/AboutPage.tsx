import React from 'react';
import { AboutHeroCard } from '../components/about/AboutHeroCard';
import { AboutStoryCard } from '../components/about/AboutStoryCard';
import { AboutTeam } from '../components/about/AboutTeam';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <AboutHeroCard />
      <AboutStoryCard />
      <AboutTeam />
    </div>
  );
};

export default AboutPage;