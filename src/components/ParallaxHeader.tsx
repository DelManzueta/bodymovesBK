import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(headerRef.current, {
      backgroundPositionY: "50%",
      ease: "none",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.from(contentRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });
  }, []);

  return (
    <div 
      ref={headerRef}
      className="relative h-screen flex items-center justify-center bg-fixed"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      <div ref={contentRef} className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            BodyMovesBK
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Where artistic expression meets movement in the heart of Brooklyn
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Join Adult Classes
          </button>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
            Kids Programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHeader;