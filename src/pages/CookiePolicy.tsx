import React from 'react';
import './Legal.css';

const CookiePolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-white mb-4">Cookie Policy</h1>
            <p className="legal-last-updated">Last updated: June 2025</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="legal-content">
            <p>
              This Cookie Policy explains how Code Social uses cookies and similar technologies on our website (codesocial.tech). We keep our cookie use minimal and straightforward.
            </p>

            <h2 className="font-inter font-bold text-2xl">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit — like your preferences or session state — to improve your experience.
            </p>

            <h2 className="font-inter font-bold text-2xl">2. Cookies We Use</h2>
            <p>Our website uses a very small number of cookies:</p>
            <ul>
              <li>
                <strong>Essential cookies</strong> — Necessary for the website to function. They don't store personal information and cannot be disabled without breaking functionality.
              </li>
              <li>
                <strong>Preference cookies</strong> — Remember your settings (e.g., menu state). These are session-based and expire when you close your browser.
              </li>
            </ul>
            <p>We do not use advertising cookies or tracking pixels.</p>

            <h2 className="font-inter font-bold text-2xl">3. Third-Party Cookies</h2>
            <p>Some features on our site load content from third parties, which may set their own cookies:</p>
            <ul>
              <li><strong>Google Fonts</strong> — used for typography. Google may set cookies when fonts are loaded from their CDN.</li>
              <li><strong>Luma</strong> — our event calendar embed may set cookies related to the Luma platform.</li>
            </ul>
            <p>We don't control third-party cookies. Refer to the respective providers' privacy and cookie policies for details.</p>

            <h2 className="font-inter font-bold text-2xl">4. How to Manage Cookies</h2>
            <p>You can control or delete cookies through your browser settings. Most browsers allow you to:</p>
            <ul>
              <li>View what cookies are stored and delete them individually.</li>
              <li>Block third-party cookies.</li>
              <li>Block all cookies (note: this may affect site functionality).</li>
              <li>Set preferences for specific websites.</li>
            </ul>
            <p>Instructions for common browsers:</p>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="legal-link">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="legal-link">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="legal-link">
                  Apple Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="legal-link">
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <h2 className="font-inter font-bold text-2xl">5. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy as our site evolves. Any changes will be reflected here with a new "Last updated" date.
            </p>

            <h2 className="font-inter font-bold text-2xl">6. Contact Us</h2>
            <p>
              Questions about our cookie use? Reach us at{' '}
              <a href="mailto:codesocialcommunity@gmail.com" className="legal-link">
                codesocialcommunity@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
