import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="logo-container flex items-center gap-2" onClick={closeMenu}>
          <img
            src="/Black logo.svg"
            alt="Code Social"
            className="h-8 w-auto"
          />
        </Link>

        <button
          className="md:hidden focus:outline-none mobile-menu-button"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {/* Close button inside the slide-out panel (mobile only) */}
          <button className="nav-close-button" onClick={closeMenu} aria-label="Close menu">
            <X size={24} />
          </button>

          <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/events" onClick={closeMenu}>Events</NavLink></li>
            <li><NavLink to="/resources" onClick={closeMenu}>Resources</NavLink></li>
            <li><NavLink to="/community" onClick={closeMenu}>Community</NavLink></li>
            <li>
              <Link
                to="/get-involved"
                onClick={closeMenu}
                className="btn-primary"
              >
                Join Our Community
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
