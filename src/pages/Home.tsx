import React from 'react';
import Hero from '../components/Hero/Hero';
import Benefits from '../components/Benefits/Benefits';
import Testimonials from '../components/Testimonials/Testimonials';
import ProjectShowcase from '../components/Projects/ProjectShowcase';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';
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
