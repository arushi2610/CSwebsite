import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Filter, Search, Users, Presentation, Code, Trophy, Video, Coffee } from 'lucide-react';
import './Events.css';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  imageUrl: string;
  description: string;
  isPast: boolean;
}

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lumaLoaded, setLumaLoaded] = useState(false);
  
  const categories = [
    'All', 'Workshop', 'Meetup', 'Hackathon', 'Tech Talks', 'Webinar','Competition'
  ];
  
  const events: Event[] = [
    {
      id: 1,
      title: 'Linkedin X-Ray',
      date: 'March 22, 2025',
      time: '8:00 PM - 10:00 PM',
      location: 'Virtual',
      category: 'Workshop',
      imageUrl: '/Event-1.jpg',
      description: 'Get your Linkedin reviewed by experts.',
      isPast: true
    },
    {
      id: 2,
      title: 'Coding Quest Week',
      date: 'June 30, 2025',
      time: '5:30 PM - 7:30 PM',
      location: 'Virtual',
      category: 'Hackathon',
      imageUrl: '/Event2.jpg',
      description: '7 day DSA contest',
      isPast: true
    },
    {
      id: 3,
      title: 'Meme Competition',
      date: 'July 5, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Virtual',
      category: 'Competition',
      imageUrl: '/Event3.jpg',
      description: 'A full-day immersive workshop covering Python basics through advanced topics. Perfect for beginners and those looking to refresh their Python skills.',
      isPast: true
    },
    {
      id: 4,
      title: 'Placement Mentorship For Freshers',
      date: 'Oct 2, 2024',
      time: '6:30 PM - 8:30 PM',
      location: 'Virtual',
      category: 'Webinar',
      imageUrl: '/Event4.jpg',
      description: 'Learn how to build cross-platform mobile applications using Flutter. This webinar will cover UI design, state management, and deployment.',
      isPast: true
    },
    {
      id: 5,
      title: 'From College to Career',
      date: 'August 1-3, 2025',
      time: 'All Day',
      location: 'Virtual',
      category: 'Tech Talks',
      imageUrl: '/Event5.jpg',
      description: 'Mastering the top 5 interview questions',
      isPast: true
    },
    {
      id: 6,
      title: 'Pursuing Masters Abroad',
      date: 'Oct 12, 2023',
      time: '10:00 AM - 12:00 PM',
      location: 'Virtual',
      category: 'Tech Talks',
      imageUrl: '/Event6.jpg',
      description: 'An insightful discussion on pursuing higher education abroad, covering application processes, scholarships, and personal experiences.',
      isPast: true
    },
    {
      id: 7,
      title: 'Roadmap for Flutter',
      date: 'Oct 12, 2023',
      time: '8:00 PM',
      location: 'Virtual',
      category: 'Tech Talks',
      imageUrl: '/Event7.jpg',
      description: 'An introductory workshop on Flutter development, covering the basics of building cross-platform mobile applications.',
      isPast: true
    },
    {
      id: 8,
      title: 'Why Don\'t you react',
      date: 'June 8, 2024',
      time: '3:30 PM',
      location: 'Virtual',
      category: 'Workshop',
      imageUrl: '/Event8.jpg',
      description: 'An introductory workshop on React development, covering the basics of building user interfaces with React.',
      isPast: true
    }
  ];

  const eventTypes = [
    {
      icon: <Presentation size={32} />,
      title: 'Workshops',
      description: 'Hands-on learning sessions with experts'
    },
    {
      icon: <Users size={32} />,
      title: 'Meetups',
      description: 'Networking events and community gatherings'
    },
    {
      icon: <Code size={32} />,
      title: 'Hackathons',
      description: 'Collaborative coding competitions and innovation challenges'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Tech Talks',
      description: 'Focused presentations and discussions from industry experts and community leaders.'
    },
    {
      icon: <Video size={32} />,
      title: 'Webinars',
      description: 'Online educational sessions and virtual presentations'
    },
    {
      icon: <Coffee size={32} />,
      title: 'Social Events',
      description: 'Casual networking and community building activities'
    }
  ];

  const filteredEvents = events.filter(event => {
    // Filter by category
    const categoryMatch = activeFilter === 'all' || event.category.toLowerCase() === activeFilter.toLowerCase();
    
    // Filter by search query
    const searchMatch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  const upcomingEvents = filteredEvents.filter(event => !event.isPast);
  const pastEvents = filteredEvents.filter(event => event.isPast);

  return (
    <div className="events-page">
      <section className="events-hero">
        <div className="overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-white mb-6">Events</h1>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Join us for workshops, meetups, and hackathons to learn, connect, and grow with fellow tech enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Luma Event Calendar Section */}
      <section className="events-calendar py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center font-inter font-bold text-3xl md:text-4xl mb-16">Event Calendar</h2>
          
          <div className="luma-embed mb-16">
            {/* REPLACE: update the iframe src to your Luma calendar embed URL */}
            <div className="luma-container" style={{ position: 'relative', minHeight: 450 }}>
              {!lumaLoaded && (
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', fontSize: '1rem',
                  border: '1px solid #bfcbda88', borderRadius: 4,
                  background: 'var(--bg-surface)'
                }}>
                  Loading events…
                </div>
              )}
              <iframe
                src="https://luma.com/embed/event/evt-b2mPKd7J5YDLFyx/simple"
                width="600"
                height="450"
                style={{
                  border: '1px solid #bfcbda88', borderRadius: 4,
                  opacity: lumaLoaded ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}
                allow="fullscreen; payment"
                aria-hidden="false"
                tabIndex={0}
                onLoad={() => setLumaLoaded(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Winter of Code Social Section */}
<section className="wocs-section py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
  <div className="container mx-auto px-4 wocs-wrapper">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6">
          Flagship Open Source Program
        </span>

        <h2 className="font-inter font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
          Winter of Code Social
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Winter of Code Social is a community-driven open source program designed
          to help students collaborate on real-world projects, improve development
          skills, and connect with mentors from across the tech ecosystem.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-gray-200">
            <Calendar size={20} className="text-blue-400" />
            <span>3-Month Open Source Journey</span>
          </div>

          <div className="flex items-center gap-3 text-gray-200">
            <Users size={20} className="text-blue-400" />
            <span>Collaborate with Developers & Mentors</span>
          </div>

          <div className="flex items-center gap-3 text-gray-200">
            <Code size={20} className="text-blue-400" />
            <span>Contribute to Real Projects</span>
          </div>

          <div className="flex items-center gap-3 text-gray-200">
            <Trophy size={20} className="text-blue-400" />
            <span>Earn Recognition & Build Your Portfolio</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://woc.codesocial.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Explore Program
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src="/wocs-banner.jpg"
            alt="Winter of Code Social"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="#1e293b"/><text x="400" y="205" text-anchor="middle" fill="#60a5fa" font-size="28" font-family="sans-serif" font-weight="700">Winter of Code Social</text><text x="400" y="255" text-anchor="middle" fill="#94a3b8" font-size="18" font-family="sans-serif">Open Source Program</text></svg>')}`;
            }}
          />
        </div>
      {/* Floating Stats */}
        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 hidden md:block">
          <h4 className="text-3xl font-bold text-orange-900">500+</h4>
          <p className="text-white-600 text-sm">Community Contributors</p>
        </div>

        <div className="absolute -top-6 -right-6 bg-blue-600 rounded-2xl shadow-xl p-5 hidden md:block">
          <h4 className="text-3xl font-bold text-white">50+</h4>
          <p className="text-blue-100 text-sm">Open Source Projects</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Past Events Section */}
      <section className="past-events py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="events-filter-bar mb-8">
            <div className="search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search events..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="categories-filter">
              <div className="filter-icon">
                <Filter size={18} />
                <span>Filter:</span>
              </div>
              <div className="categories">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className={`category-btn ${activeFilter === category.toLowerCase() ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.toLowerCase())}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <h3 className="font-inter font-bold text-2xl mb-6">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map(event => (
                <div key={event.id} className="event-card">
                  <div className="event-image">
                    <img src={event.imageUrl} alt={event.title} loading="lazy" />
                    <span className={`event-category ${event.category.toLowerCase()}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="event-content">
                    <h3 className="font-inter font-bold text-xl mb-3">{event.title}</h3>
                    <p className="event-description mb-4">{event.description}</p>
                    <div className="event-details">
                      <div className="event-detail">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="event-detail">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="event-detail">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <a href={`/events/${event.id}`} className="btn-primary mt-4">
                      Register Now
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">
                  No upcoming events right now — check back soon or{' '}
                  <a
                    href="https://lu.ma/codesocial"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)', textDecoration: 'underline' }}
                  >
                    visit our Luma page
                  </a>.
                </p>
              </div>
            )}
          </div>
          
          <h3 className="font-inter font-bold text-2xl mb-6">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.length > 0 ? (
              pastEvents.map(event => (
                <div key={event.id} className="event-card past">
                  <div className="event-image">
                    <img src={event.imageUrl} alt={event.title} loading="lazy" />
                    <span className={`event-category ${event.category.toLowerCase()}`}>
                      {event.category}
                    </span>
                    <div className="past-overlay">
                      <span>Past Event</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h3 className="font-inter font-bold text-xl mb-3">{event.title}</h3>
                    <p className="event-description mb-4">{event.description}</p>
                    <div className="event-details">
                      <div className="event-detail">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="event-detail">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="event-detail">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    {/*
                    <a href={`/events/${event.id}`} className="btn-secondary mt-4">
                      View Details
                    </a>
                    */}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No past events match your filters. Try adjusting your search.</p>
              </div>
            )}
          </div>

          <p className="text-center mt-8" style={{ color: 'var(--text-secondary)' }}>
            <a
              href="https://lu.ma/codesocial"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--primary)', textDecoration: 'underline' }}
            >
              See all upcoming events on our Luma page →
            </a>
          </p>
        </div>
      </section>

      {/* Organize an Event Section */}
      <section className="organize-section py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-6">
              Organize an Event with Us
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Got a great idea for an event? Let's team up! We'll help bring your event to life and share it with our passionate tech community.
            </p>
          </div>

          <div className="organize-card max-w-4xl mx-auto mb-12">
            <h3 className="font-inter font-bold text-2xl text-center mb-8">Types of Events We Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((type, index) => (
                <div key={index} className="event-type-card">
                  <div className="icon-container">
                    {type.icon}
                  </div>
                  <h4 className="font-inter font-semibold text-lg mb-2">{type.title}</h4>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="organize-card max-w-2xl mx-auto">
              <h3 className="font-inter font-bold text-2xl mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-8">
                Whether you're an industry expert wanting to share knowledge, a company looking to engage with developers, or a community member with a great idea, we'd love to collaborate with you.
              </p>
              <a 
                href="/GetInvolved"
                className="btn-white inline-flex items-center gap-2"
              >
                <span>Partner with Code Social</span>
                <Calendar size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
