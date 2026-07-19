import React, { useEffect, useRef } from 'react';
import { CalendarClock } from 'lucide-react';
import './NewsletterSignup.css';

// beehiiv embed form ID (from Subscribe Forms → Embed → v3 loader snippet).
// Leave empty to fall back to a link-out.
const BEEHIIV_FORM_ID = 'a65a89a7-2f5e-44e5-9315-5181590811e0';

const BEEHIIV_SUBSCRIBE_URL = 'https://codesocial.beehiiv.com/subscribe';

const NewsletterSignup: React.FC = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Inject beehiiv's v3 loader into the container so the form renders here.
  useEffect(() => {
    const container = formContainerRef.current;
    if (!container || !BEEHIIV_FORM_ID) return;
    // Guard against double-injection (React StrictMode / re-mounts).
    if (container.querySelector('script[data-beehiiv-form]')) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://subscribe-forms.beehiiv.com/v3/loader.js';
    script.setAttribute('data-beehiiv-form', BEEHIIV_FORM_ID);
    container.appendChild(script);
  }, []);

  return (
    <section id="newsletter" className="newsletter-section py-20">
      <div className="container mx-auto px-4">
        <div className="newsletter-card">
          <span className="newsletter-cadence">
            <CalendarClock size={16} />
            First Wednesday of every month
          </span>
          <h2 className="font-inter font-bold text-3xl md:text-4xl mb-4">Stay in the Loop</h2>
          <p className="text-gray-600 mb-8">
            Career resources, community updates &amp; spotlights, and opportunities to help you
            learn, build, and grow. Delivered monthly. No spam, just value.
          </p>

          {BEEHIIV_FORM_ID ? (
            <>
              <div ref={formContainerRef} className="newsletter-embed" />
              <p className="newsletter-disclaimer mt-4">
                Trouble with the form?{' '}
                <a
                  href={BEEHIIV_SUBSCRIBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--primary)', textDecoration: 'underline' }}
                >
                  Subscribe on beehiiv
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <a
                href={BEEHIIV_SUBSCRIBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary newsletter-btn"
              >
                Subscribe Now
              </a>
              <p className="newsletter-disclaimer mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
