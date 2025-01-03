import React, { useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    });
  }, []);

  return (
    <nav ref={navRef} className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">BodyMovesBK</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#classes" className="text-gray-600 hover:text-gray-900">Classes</a>
            <a href="#programs" className="text-gray-600 hover:text-gray-900">Programs</a>
            <a href="#schedule" className="text-gray-600 hover:text-gray-900">Schedule</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;