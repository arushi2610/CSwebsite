import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, Users, Presentation, Code, Trophy, Video, Coffee } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import './Events.css';

// Public Google Calendar embed (no API key required). To change the calendar,
// swap the `src` value with your calendar ID from Settings → Integrate calendar.
const GOOGLE_CALENDAR_EMBED_SRC =
  'https://calendar.google.com/calendar/embed?src=9365dc46515ee05fecadd380002a268dc2ed3e53b18cd761ddd514516c7e0d0c%40group.calendar.google.com&ctz=America%2FChicago';

// The month grid is unreadable on phones; agenda mode lists events instead.
const useCalendarSrc = () => {
  const [isNarrow, setIsNarrow] = useState(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => setIsNarrow(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isNarrow ? `${GOOGLE_CALENDAR_EMBED_SRC}&mode=AGENDA` : GOOGLE_CALENDAR_EMBED_SRC;
};

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
  registrationUrl?: string;
}

const Events: React.FC = () => {
  useSEO({
    title: 'Events & Workshops | Code Social',
    description: 'Join free coding workshops, hackathons, and learning sessions by Code Social. Hands-on tech events for all skill levels.',
    path: '/events',
  });

  const calendarSrc = useCalendarSrc();

  const events: Event[] = [
    {
      id: 1,
      title: 'How to Choose the Right Tech Career',
      date: 'July 25, 2026',
      time: '9:00 AM',
      location: 'Virtual',
      category: 'Tech Talks',
      imageUrl: '/chitechweek.png',
      description: 'A Chicago Tech Week 2026 recommended event, presented by Code Social.',
      isPast: false,
      registrationUrl: 'https://luma.com/ek7m5ctg'
    },
    {
      id: 2,
      title: 'Build with AI: Portfolio Builder Hackathon',
      date: 'April 10, 2026',
      time: '48 Hours',
      location: 'Online',
      category: 'Hackathon',
      imageUrl: '/Build%20with%20AI%20Poster.png',
      description: 'A 48-hour hackathon to build an AI-powered portfolio project.',
      isPast: true
    },
    {
      id: 3,
      title: 'Winter of Code Social 2025-26',
      date: 'Nov 2025 - Jan 2026',
      time: 'Season-long',
      location: 'Online',
      category: 'Hackathon',
      imageUrl: '/wocs-logo.png',
      description: 'Our flagship open-source program — the first edition drew 1,500+ participants and 15 community partners.',
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

  // Past in-person initiatives / highlights (title-only for now).
  // Add a photo to each by setting `imageUrl` to a file in public/.
  const initiatives = [
    {
      title: "Offline Debut — Quantum Ready: Preparing Today's Workforce for Tomorrow's Tech",
      imageUrl: '/CSU25.jpg',
    },
    {
      title: 'ThinkChicago Launchpad',
      imageUrl: '/ChiThinkPad.jpeg',
    },
    {
      title: 'Winter of Code Social — High School Track Finale',
      imageUrl: '/wocs-highschool.jpeg',
    },
    {
      title: 'Chicago Gen Z Founders Dinner',
      imageUrl: '/csdinner.jpeg',
    },
  ];

  const upcomingEvents = events.filter(event => !event.isPast);
  const pastEvents = events.filter(event => event.isPast);

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

      {/* Past Events Section */}
      <section className="past-events py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="font-inter font-bold text-2xl mb-6">Upcoming Events</h3>
          <p className="text-gray-600 mb-6">
            Here's what's coming up. Add these to your own calendar and{' '}
            <a
              href="https://codesocial.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--primary)', textDecoration: 'underline' }}
            >
              subscribe to our email list
            </a>{' '}
            so you never miss one.
          </p>

          {upcomingEvents.length > 0 && (
            <div className="upcoming-events-list mb-12">
              {upcomingEvents.map(event => (
                <div key={event.id} className="upcoming-event-card">
                  <div className="upcoming-event-image">
                    {event.imageUrl ? (
                      <img src={event.imageUrl} alt={event.title} loading="lazy" />
                    ) : (
                      <div className="initiative-image-placeholder">
                        <Calendar size={32} />
                      </div>
                    )}
                    <span className={`event-category ${event.category.toLowerCase()}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="upcoming-event-content">
                    <h3 className="font-inter font-bold text-2xl mb-3">{event.title}</h3>
                    <p className="event-description mb-5">{event.description}</p>
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
                    {event.registrationUrl && (
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary mt-5 upcoming-event-btn"
                      >
                        Register Now
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="calendar-embed mb-16">
            <iframe
              src={calendarSrc}
              title="Code Social Events Calendar"
              style={{ border: 0 }}
              width="100%"
              height="600"
              loading="lazy"
            />
          </div>

          <h3 className="font-inter font-bold text-2xl mb-6">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.length > 0 ? (
              pastEvents.map(event => (
                <div key={event.id} className="event-card past">
                  <div className="event-image">
                    {event.imageUrl ? (
                      <img src={event.imageUrl} alt={event.title} loading="lazy" />
                    ) : (
                      <div className="initiative-image-placeholder">
                        <Calendar size={32} />
                      </div>
                    )}
                    <span className={`event-category ${event.category.toLowerCase()}`}>
                      {event.category}
                    </span>
                    <div className="past-overlay">
                      <span>Past Event</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h3 className="font-inter font-bold text-xl mb-3 event-title" title={event.title}>
                      {event.title}
                    </h3>
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
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No past events to show yet.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Initiatives & Highlights Section */}
      <section className="initiatives-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-4">Initiatives &amp; Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A look back at the programs, challenges, and in-person moments that brought our community together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item, index) => (
              <div key={index} className="initiative-card">
                <div className="initiative-image">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.title} loading="lazy" />
                  ) : (
                    <div className="initiative-image-placeholder">
                      <Calendar size={32} />
                    </div>
                  )}
                </div>
                <div className="initiative-content">
                  <h3 className="font-inter font-bold text-xl">{item.title}</h3>
                </div>
              </div>
            ))}
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
                href="mailto:codesocialcommunity@gmail.com?subject=Partner%20with%20Code%20Social"
                target="_blank"
                rel="noopener noreferrer"
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
