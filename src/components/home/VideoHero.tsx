import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowRight, Music2, Users } from 'lucide-react';
import { GradientButton } from '../ui/buttons';
import { StatCard } from '../ui/cards';

const VideoHero = () => {
  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1518611012118-696072aa579a"
        >
          <source src="https://bodymovesbk.com/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              Move Your Body,
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {' '}Free Your Mind
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg">
              Join Brooklyn's premier fitness community for transformative group classes
            </p>
            <div className="flex flex-wrap gap-4">
              <GradientButton>
                Start Today
              </GradientButton>
              <a 
                href="https://www.instagram.com/bodymovesbk/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <Instagram className="mr-2" />
                Follow Us
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <StatCard 
              value="15+"
              label="Weekly Classes"
              color="bg-primary/90 backdrop-blur-sm"
              className="hover:scale-105 transition-transform cursor-pointer"
            />
            <StatCard 
              value="Expert"
              label="Instructors"
              color="bg-secondary/90 backdrop-blur-sm"
              className="hover:scale-105 transition-transform cursor-pointer"
            />
            <StatCard 
              value="500+"
              label="Members"
              color="bg-primary/90 backdrop-blur-sm"
              className="hover:scale-105 transition-transform cursor-pointer"
            />
            <Link to="/classes" className="group">
              <StatCard 
                value="→"
                label="View Classes"
                color="bg-white/10 backdrop-blur-sm"
                className="hover:scale-105 transition-transform cursor-pointer group-hover:bg-white/20"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;