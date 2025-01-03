import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BentoItem from './BentoItem';
import { Music, Dumbbell, Baby, Palette, Heart, Smile } from 'lucide-react';
import AboutSection from './AboutSection';

gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll('.bento-item');
    
    items?.forEach((item, index) => {
      gsap.fromTo(item,
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.2
        }
      );
    });
  }, []);

  return (
    <>
      <AboutSection />
      <div ref={gridRef} className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        <BentoItem
          className="md:col-span-2"
          title="Barre Classes"
          description="Blend dance-inspired moves with Pilates, ballet, Smile, and strength training for improved posture and flexibility"
          image="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          icon={Music}
          tag="Adult Fitness"
        />
        <BentoItem
          title="Sculpt"
          description="Musically driven class focused on toning with weights, resistance bands, and bodyweight exercises"
          image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          icon={Dumbbell}
          tag="Adult Fitness"
        />
        <BentoItem
          className="md:col-span-2"
          title="Creative Arts Camps"
          description="A unique blend of dance, music, dramatic and visual arts for kids"
          image="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          icon={Palette}
          tag="Kids Programs"
        />
        <BentoItem
          title="Stretch"
          description="Enhance flexibility and mobility through gentle stretching exercises"
          image="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          icon={Smile}
          tag="Adult Fitness"
        />
        <BentoItem
          className="md:col-span-3"
          title="Join Our Community"
          description="Experience the joy of movement in a welcoming, supportive environment"
          image="https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          icon={Heart}
          tag="Community"
        />
      </div>
    </>
  );
};

export default BentoGrid;