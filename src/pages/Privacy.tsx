import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const Privacy: React.FC = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
            <p className="legal-last-updated">Last updated: June 2025</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="legal-content">
            <p>
              Code Social is a free, volunteer-run tech community. This Privacy Policy explains what information we may collect, how we use it, and how we protect it. We keep this simple — we genuinely don't collect much.
            </p>

            <h2 className="font-inter font-bold text-2xl">1. Information We Collect</h2>
            <p>We may collect the following when you interact with Code Social:</p>
            <ul>
              <li><strong>Email address</strong> — if you sign up for community updates or newsletters.</li>
              <li><strong>Name or username</strong> — if you join our Discord, GitHub, or submit content.</li>
              <li><strong>Event registration details</strong> — when you RSVP through Luma or similar platforms.</li>
              <li><strong>Public profile information</strong> — such as your LinkedIn or GitHub if you share it voluntarily with the community.</li>
            </ul>
            <p>
              We do not collect payment information, government IDs, or any sensitive personal data. There is no mandatory account system on codesocial.tech.
            </p>

            <h2 className="font-inter font-bold text-2xl">2. How We Use Your Information</h2>
            <p>Any information you share with us is used solely to:</p>
            <ul>
              <li>Send community updates, event announcements, or newsletters (only if you opted in).</li>
              <li>Organize events, workshops, and community programs.</li>
              <li>Improve the community experience and resources we offer.</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes — ever.</p>

            <h2 className="font-inter font-bold text-2xl">3. Third-Party Services We Use</h2>
            <p>Code Social relies on several third-party platforms to run the community. These have their own privacy policies:</p>
            <ul>
              <li><strong>Discord</strong> — our main community chat platform.</li>
              <li><strong>GitHub</strong> — for open-source collaboration.</li>
              <li><strong>Luma</strong> — for event registrations and calendar.</li>
              <li><strong>Google Fonts</strong> — for typography on our website.</li>
              <li><strong>LinkedIn / Instagram / X (Twitter)</strong> — for community announcements.</li>
            </ul>
            <p>When you use these platforms, their respective privacy policies apply. We encourage you to review them.</p>

            <h2 className="font-inter font-bold text-2xl">4. Cookies</h2>
            <p>
              Our website uses minimal cookies. See our{' '}
              <Link to="/cookie-policy" className="legal-link">Cookie Policy</Link>{' '}
              for details.
            </p>

            <h2 className="font-inter font-bold text-2xl">5. Data Retention</h2>
            <p>
              We only keep your information for as long as it's needed for the purpose it was collected. If you want your email removed from any mailing list, simply unsubscribe or contact us directly.
            </p>

            <h2 className="font-inter font-bold text-2xl">6. Children's Privacy</h2>
            <p>
              Code Social is intended for individuals 13 years of age or older. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>

            <h2 className="font-inter font-bold text-2xl">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Ask what data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Opt out of any communications at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at{' '}
              <a href="mailto:codesocialcommunity@gmail.com" target="_blank" rel="noopener noreferrer" className="legal-link">
                codesocialcommunity@gmail.com
              </a>.
            </p>

            <h2 className="font-inter font-bold text-2xl">8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be reflected on this page with an updated date. Your continued use of Code Social after changes are posted means you accept the updated policy.
            </p>

            <h2 className="font-inter font-bold text-2xl">9. Contact Us</h2>
            <p>
              Questions or concerns? Contact us at{' '}
              <a href="mailto:codesocialcommunity@gmail.com" target="_blank" rel="noopener noreferrer" className="legal-link">
                codesocialcommunity@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
