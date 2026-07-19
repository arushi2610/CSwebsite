import React from 'react';
import Hero from '../components/Hero/Hero';
import Benefits from '../components/Benefits/Benefits';
import Testimonials from '../components/Testimonials/Testimonials';
import ProjectShowcase from '../components/Projects/ProjectShowcase';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents';
import { useSEO } from '../hooks/useSEO';
import './Home.css';

const Home: React.FC = () => {
  useSEO({
    title: 'Code Social — Learn, Connect & Grow in Tech',
    description: 'Code Social is a FREE global tech learning community of 10,000+ learners. Access mentorship, workshops, resources, and connect with developers worldwide.',
    path: '/',
  });

  return (
    <div>
      <Hero />
      <NewsletterSignup />
      <Benefits />
      <UpcomingEvents />
      { <ProjectShowcase /> }
      <Testimonials />
    </div>
  );
};

export default Home;
