import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Loader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5
    });

    // Initial state
    gsap.set(wordRefs.current, {
      y: 100,
      opacity: 0,
      scale: 0.5
    });

    // Animate "Body"
    tl.to(wordRefs.current[0], {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    })
    // Animate "Moves"
    .to(wordRefs.current[1], {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.3")
    // Pulse effect
    .to(containerRef.current, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.inOut"
    })
    .to(containerRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.inOut"
    })
    // Color shift
    .to([wordRefs.current[0], wordRefs.current[1]], {
      color: '#b2f142',
      duration: 0.6,
      stagger: 0.1
    })
    .to([wordRefs.current[0], wordRefs.current[1]], {
      color: '#b287fd',
      duration: 0.6,
      stagger: 0.1
    })
    // Fade out both words with rotation
    .to(wordRefs.current, {
      y: -100,
      opacity: 0,
      scale: 0.5,
      rotate: 15,
      duration: 0.6,
      ease: "back.in(1.7)",
      stagger: 0.1
    }, "+=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-ivory z-50 flex items-center justify-center">
      <div 
        ref={containerRef}
        className="relative flex items-center space-x-4 overflow-hidden"
      >
        <span
          ref={el => wordRefs.current[0] = el}
          className="text-7xl md:text-8xl font-bold text-primary"
        >
          Body
        </span>
        <span
          ref={el => wordRefs.current[1] = el}
          className="text-7xl md:text-8xl font-bold text-secondary"
        >
          Moves
        </span>
        <div className="absolute -z-10 w-full h-full blur-3xl bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse" />
      </div>
    </div>
  );
};

export default Loader;