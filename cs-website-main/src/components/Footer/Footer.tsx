import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="footer-brand">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/Black logo.svg" 
                alt="Code Social" 
                className="h-8 w-auto filter invert"
              />
            </Link>
            <p className="mb-6">Bringing techies together to learn, collaborate, and grow in a supportive community environment.</p>
            <div className="social-links flex gap-4">
              <a href="https://github.com/orgs/Code-Social/dashboard" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/codesocial_tech" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/code-social/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/codesocial.tech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="font-inter font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="font-inter font-bold text-lg mb-4">Get In Touch</h3>
            <a href="mailto:codesocialcommunity@gmail.com" className="flex items-center gap-2 mb-3">
              <Mail size={18} />
              <span>codesocialcommunity@gmail.com</span>
            </a>
            <p className="mb-4">Have questions? We'd love to hear from you!</p>
            <Link to="/get-involved" className="btn-outline-primary">Join Our Community</Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2023 Code Social. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;