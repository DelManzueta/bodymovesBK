import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientButton } from '../ui/buttons';

const HeroContent = () => {
  return (
    <div className="relative min-h-[80vh] bg-ivory">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-7 space-y-8">
            <div className="flex items-center gap-2 text-primary">
              <ArrowRight size={20} />
              <span className="text-sm font-medium uppercase tracking-wider">
                Move with confidence and style
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal">
              Unleash Your
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Movement Potential
              </span>
            </h1>
            
            <p className="text-lg text-charcoal/80 max-w-lg">
              Join Brooklyn's premier fitness studio for transformative movement classes.
            </p>

            <div className="flex gap-4">
              <GradientButton as={Link} to="/classes">
                Start Today
              </GradientButton>
              <Link
                to="/schedule"
                className="px-8 py-3 border border-charcoal/20 rounded-full font-medium hover:bg-charcoal/5 transition-colors"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;