import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        What is BodyMovesBK?
      </h2>
      <p className="text-xl text-gray-700 leading-relaxed mb-8">
        We are a vibrant hub for movement-based practices, offering dance & fitness classes for adults 
        and creative arts camps for kids. At BodyMovesBK, we're all about creating a community that 
        thrives on artistic expression and the joy of movement.
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
    </div>
  );
};

export default AboutSection;