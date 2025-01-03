import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music2, Dumbbell, Heart } from 'lucide-react';
import { BentoCard, StatCard } from '../ui/cards';
import InstagramFeed from '../social/InstagramFeed';
import gsap from 'gsap';

const HeroBento = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bento-item', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.to('.parallax-img', {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Main Content */}
      <div className="bento-item md:col-span-8">
        <Link to="/classes">
          <BentoCard className="relative overflow-hidden group h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Dance Studio"
              className="absolute inset-0 w-full h-full object-cover parallax-img transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 h-full flex flex-col justify-between p-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-white/80">
                  <ArrowRight size={20} className="animate-pulse" />
                  <span className="text-sm font-medium uppercase tracking-wider">Welcome to BodyMovesBK</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Transform Your
                  <span className="block">Movement</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg">
                  Join Brooklyn's most innovative fitness community for transformative classes
                </p>
              </div>
              
              <div className="inline-flex items-center space-x-3 bg-primary px-8 py-4 rounded-full text-white group-hover:bg-primary/90 transition-all duration-500">
                <span className="text-lg">Explore Classes</span>
                <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-2" />
              </div>
            </div>
          </BentoCard>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="bento-item md:col-span-4 grid grid-rows-3 gap-4">
        <Link to="/classes">
          <StatCard 
            value="15+"
            label="Weekly Classes"
            color="bg-primary"
            icon={Music2}
            className="hover:scale-[1.02] transition-transform duration-500"
          />
        </Link>
        <Link to="/about">
          <StatCard 
            value="Expert"
            label="Instructors"
            color="bg-secondary"
            icon={Dumbbell}
            className="hover:scale-[1.02] transition-transform duration-500"
          />
        </Link>
        <Link to="/community">
          <StatCard 
            value="500+"
            label="Members"
            color="bg-primary"
            icon={Heart}
            className="hover:scale-[1.02] transition-transform duration-500"
          />
        </Link>
      </div>

      {/* Instagram Feed */}
      <div className="bento-item md:col-span-6">
        <BentoCard className="p-6">
          <InstagramFeed />
        </BentoCard>
      </div>

      {/* Promo */}
      <div className="bento-item md:col-span-6">
        <Link to="/pricing">
          <BentoCard className="bg-primary p-8 text-white h-full group">
            <div className="relative h-full flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">New Member Special</h3>
                <p className="text-xl text-white/90">2 weeks unlimited classes for $49</p>
              </div>
              <div className="w-fit px-8 py-3 bg-white text-primary rounded-full group-hover:bg-white/90 transition-all duration-500 group-hover:scale-105">
                Claim Offer
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full transition-transform duration-700 group-hover:scale-110" />
            </div>
          </BentoCard>
        </Link>
      </div>
    </div>
  );
};

export default HeroBento;