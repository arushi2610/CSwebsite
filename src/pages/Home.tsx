import React from 'react';
import Hero from '../components/Hero/Hero';
import Benefits from '../components/Benefits/Benefits';
import Events from '../components/Events/Events';
import Testimonials from '../components/Testimonials/Testimonials';
import ProjectShowcase from '../components/Projects/ProjectShowcase';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';
import { useSEO } from '../hooks/useSEO';

const Home: React.FC = () => {
  useSEO({
    title: 'Code Social — Learn, Connect & Grow in Tech',
    description: 'Code Social is a FREE global tech learning community of 10,000+ learners. Access mentorship, workshops, resources, and connect with developers worldwide.',
    path: '/',
  });

  return (
    <div>
      <Hero />
      <Benefits />
      <Events />
      <ProjectShowcase />
      <Testimonials />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
