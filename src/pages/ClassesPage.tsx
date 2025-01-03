import React from 'react';
import ClassesHero from '../components/classes/ClassesHero';
import ClassesList from '../components/classes/ClassesList';
import ClassesPricing from '../components/classes/ClassesPricing';
import { Blob } from '../components/ui/shapes';

const ClassesPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <Blob className="top-0 left-0 animate-blob" color="#fe5416" />
      <Blob className="bottom-0 right-0 animate-blob" color="#f9d84b" />
      
      <div className="container mx-auto px-4 py-12 space-y-16">
        <ClassesHero />
        <ClassesList />
        <ClassesPricing />
      </div>
    </div>
  );
};

export default ClassesPage;