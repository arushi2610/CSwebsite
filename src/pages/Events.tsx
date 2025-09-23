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

  //const upcomingEvents = filteredEvents.filter(event => !event.isPast);
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
            <div className="luma-container">
              <iframe
                src="https://luma.com/embed/event/evt-PGT2xCESf1eKh0V/simple"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
                allow="fullscreen; payment"
                aria-hidden="false"
                tabIndex={0}
              />
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
          
          {/* <h3 className="font-inter font-bold text-2xl mb-6">Upcoming Events</h3>
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
                <p className="text-gray-500">No upcoming events match your filters. Try adjusting your search.</p>
              </div>
            )}
          </div> */}
          
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
                href="./GetInvolved.tsx"
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
