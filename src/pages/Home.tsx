import React from 'react';
import Hero from '../components/Hero/Hero';
import Benefits from '../components/Benefits/Benefits';
import Testimonials from '../components/Testimonials/Testimonials';
import ProjectShowcase from '../components/Projects/ProjectShowcase';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <section className="home-luma">
        <div className="container mx-auto px-4">
          <div className="home-luma-header">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-center">Event Calendar</h2>
            <p className="home-luma-subtitle">Register for upcoming events directly on Luma.</p>
          </div>
          <div className="home-luma-frame">
            <div className="home-luma-card">
              <iframe
                title="Luma event registration"
                src="https://luma.com/embed/event/evt-DTO1hQspGoqH2lr/simple"
                frameBorder={0}
                allow="fullscreen; payment"
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </section>
      { <ProjectShowcase /> }
      <Testimonials />
    </div>
  );
};

export default Home;