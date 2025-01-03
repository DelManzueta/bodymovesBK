import React from 'react';

const AboutHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Our Story</h1>
        <p className="text-lg">
          Founded in Brooklyn with a vision to create a space where movement and community unite. 
          We believe in making fitness accessible, enjoyable, and transformative for everyone.
        </p>
      </div>
      <div 
        className="bg-cover bg-center rounded-3xl relative overflow-hidden min-h-[300px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>
  );
};

export default AboutHero;