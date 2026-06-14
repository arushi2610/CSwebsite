import React from 'react';
import './Legal.css';

const Terms: React.FC = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-white mb-4">Terms of Service</h1>
            <p className="legal-last-updated">Last updated: June 2025</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="legal-content">
            <p>
              Welcome to Code Social. By accessing or participating in the Code Social community — including our website, Discord server, events, GitHub organization, or any other platform we operate — you agree to these Terms of Service. Please read them carefully.
            </p>
            <p>
              Code Social is a free, non-commercial tech learning community. We are not a company. We do not charge for membership, and we do not sell any products or services.
            </p>

            <h2 className="font-inter font-bold text-2xl">1. Who We Are</h2>
            <p>
              Code Social is a volunteer-run community focused on helping people learn technology, share knowledge, and connect with peers. All events, resources, and programs we offer are free and provided in good faith by our team and contributors.
            </p>

            <h2 className="font-inter font-bold text-2xl">2. Community Conduct</h2>
            <p>By participating in Code Social, you agree to:</p>
            <ul>
              <li>Be respectful to all community members, regardless of their background or experience level.</li>
              <li>Not harass, bully, or demean others.</li>
              <li>Not share spam, scams, or unsolicited promotional content.</li>
              <li>Not distribute harmful, offensive, or illegal content.</li>
              <li>Not impersonate other members or organizations.</li>
              <li>Contribute positively to discussions, events, and shared resources.</li>
            </ul>
            <p>
              We reserve the right to remove any member who violates these guidelines without prior notice.
            </p>

            <h2 className="font-inter font-bold text-2xl">3. Content You Share</h2>
            <p>
              When you share content in Code Social channels (Discord, GitHub, events, etc.), you retain ownership of that content. By sharing it, you grant Code Social a non-exclusive, royalty-free right to display or distribute it within our community platforms.
            </p>
            <p>
              Do not share content you do not have the right to share, including copyrighted materials without permission.
            </p>

            <h2 className="font-inter font-bold text-2xl">4. Resources and Events</h2>
            <p>
              All resources, sessions, workshops, and events are provided for educational purposes. We do our best to ensure accuracy, but we cannot guarantee that all information is current, complete, or error-free. Participation in any event or use of any resource is at your own discretion.
            </p>

            <h2 className="font-inter font-bold text-2xl">5. No Warranties</h2>
            <p>
              Code Social is provided "as is." We make no warranties, express or implied, about the reliability, accuracy, or availability of our community platforms or resources. We are a volunteer community, not a professional service.
            </p>

            <h2 className="font-inter font-bold text-2xl">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Code Social and its organizers are not liable for any damages arising from your use of or participation in the community, including loss of data, missed opportunities, or any other outcomes.
            </p>

            <h2 className="font-inter font-bold text-2xl">7. Third-Party Platforms</h2>
            <p>
              Our community uses third-party platforms such as Discord, GitHub, Luma, and LinkedIn. Your use of those platforms is governed by their respective terms of service. We are not responsible for how those platforms handle your data or content.
            </p>

            <h2 className="font-inter font-bold text-2xl">8. Changes to These Terms</h2>
            <p>
              We may update these terms occasionally. We'll post the updated version here with a revised date. Continued participation after any update means you accept the new terms.
            </p>

            <h2 className="font-inter font-bold text-2xl">9. Contact Us</h2>
            <p>
              Questions about these terms? Reach out to us at{' '}
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

export default Terms;
