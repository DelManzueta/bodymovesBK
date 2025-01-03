import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Move Your Body, Free Your Mind
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Join Brooklyn's premier fitness community for transformative group classes and kids' programs
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default Hero;