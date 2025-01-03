import React from 'react';
import { KidsHeroCard } from '../components/kids/KidsHeroCard';
import { KidsPrograms } from '../components/kids/KidsPrograms';
import { KidsTestimonials } from '../components/kids/KidsTestimonials';

const KidsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <KidsHeroCard />
      <KidsPrograms />
      <KidsTestimonials />
    </div>
  );
};

export default KidsPage;