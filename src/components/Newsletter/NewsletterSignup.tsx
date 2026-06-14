import React from 'react';
import './NewsletterSignup.css';

const NewsletterSignup: React.FC = () => {
  return (
    <section className="newsletter-section py-20">
      <div className="container mx-auto px-4">
        <div className="newsletter-card">
          <h2 className="font-inter font-bold text-3xl md:text-4xl mb-4">Stay in the Loop</h2>
          <p className="text-gray-600 mb-8">
            Career resources, builder spotlights & opportunities for early-career tech folks. Monthly.<br />
            Community calls, challenges & events — straight to your inbox. No spam, ever.
          </p>

          <a
            href="https://codesocial.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary newsletter-btn"
          >
            Notify Me
          </a>

          <p className="newsletter-disclaimer mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
