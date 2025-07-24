import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-3xl hero-content">
          <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            <span className="text-white">Cognise.</span> <span className="text-primary">Connect.</span> <span className="text-white">Cultivate.</span> <span className="text-primary">Code Social.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Join a FREE learning-focused community dedicated to providing accessible resources and opportunities to excel in various technologies. Connect with mentors, peers, and industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/get-involved" className="btn-primary flex items-center justify-center gap-2">
              <span>Join the Community</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/events" className="btn-secondary flex items-center justify-center gap-2">
              <span>Explore Learning Sessions</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;