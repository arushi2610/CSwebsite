import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="newsletter-section py-20">
      <div className="container mx-auto px-4">
        <div className="newsletter-card">
          <h2 className="font-inter font-bold text-3xl md:text-4xl mb-4">Stay in the Loop</h2>
          <p className="text-gray-600 mb-8">
            Get notified about community calls, challenges, and events. No spam, ever.
          </p>

          {/* REPLACE: Set the action attribute below to your Mailchimp form URL.
              Format: https://yourlist.us1.list-manage.com/subscribe/post?u=XXXX&id=XXXX
              You can find this in Mailchimp → Audience → Signup forms → Embedded forms. */}
          <form
            action=""
            method="post"
            target="_blank"
            className="newsletter-form"
          >
            <div className="newsletter-input-group">
              <input
                type="email"
                name="EMAIL"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn-primary newsletter-btn">
                Notify Me
              </button>
            </div>

            {/* Mailchimp bot prevention — do not remove or modify */}
            {/* REPLACE: update the name attribute with your Mailchimp honeypot field name */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_REPLACE_REPLACE" tabIndex={-1} defaultValue="" />
            </div>

            <p className="newsletter-disclaimer">We respect your privacy. Unsubscribe at any time.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
