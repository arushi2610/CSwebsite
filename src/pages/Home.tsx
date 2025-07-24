import React from 'react';
import Hero from '../components/Hero/Hero';
import Benefits from '../components/Benefits/Benefits';
import Events from '../components/Events/Events';
import Testimonials from '../components/Testimonials/Testimonials';
import ProjectShowcase from '../components/Projects/ProjectShowcase';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Events />
      { <ProjectShowcase /> }
      <Testimonials />
    </div>
  );
};

export default Home;