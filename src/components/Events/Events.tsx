import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Events.css';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
}

interface FeaturedEvent {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  duration: string;
  location: string;
  mode: string;
  platform: string;
  audience: string;
  format: string;
}

const Events: React.FC = () => {
  const featuredEvent: FeaturedEvent = {
    title: 'Build with AI: Code Social - Portfolio Builder Hackathon',
    subtitle: 'Build a real portfolio project in 48 hours using AI',
    description:
      'A build-first hackathon designed to help beginners and builders ship a real, portfolio-ready project with practical AI tools.',
    date: 'April 10th, 2026',
    duration: '48 Hours',
    location: 'Online',
    mode: 'Devpost + Discord',
    platform: 'Google AI Studio, Gemini API, Firebase / Cloud tools',
    audience: 'Beginners, students, builders, and anyone interested in AI + projects',
    format: 'Solo or team of up to 3'
  };

  const pastEvents: Event[] = [
    {
      id: 1,
      title: 'Coding Quest Week',
      date: 'June 30, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Virtual',
      imageUrl: '/Event2.jpg'
    },
    {
      id: 2,
      title: 'Linkedin X-Ray',
      date: 'March 22, 2025',
      time: '8:00 PM - 10:00 PM',
      location: 'Virtual',
      imageUrl: '/Event-1.jpg'
    }
  ];

  return (
    <section className="events-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Featured Event Section */}
        <div className="featured-event mb-16">
          <div className="featured-event-copy">
            <p className="featured-event-eyebrow">Featured event</p>
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark mb-4">{featuredEvent.title}</h2>
            <p className="featured-event-subtitle">{featuredEvent.subtitle}</p>
            <p className="featured-event-description">{featuredEvent.description}</p>

            <div className="featured-event-meta">
              <div className="featured-event-detail">
                <Calendar size={18} />
                <span>{featuredEvent.date}</span>
              </div>
              <div className="featured-event-detail">
                <Clock size={18} />
                <span>{featuredEvent.duration}</span>
              </div>
              <div className="featured-event-detail">
                <MapPin size={18} />
                <span>{featuredEvent.location}</span>
              </div>
              <div className="featured-event-detail">
                <Users size={18} />
                <span>{featuredEvent.mode}</span>
              </div>
            </div>

            <div className="featured-event-tags">
              <span>{featuredEvent.audience}</span>
              <span>{featuredEvent.platform}</span>
              <span>{featuredEvent.format}</span>
            </div>

            <div className="featured-event-actions">
              <a
                href="https://build-with-ai-cs.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Register for Event
              </a>
              <a href="/events" className="btn-outline">
                Explore Events
              </a>
            </div>
          </div>

          <div className="featured-event-poster" aria-label={`${featuredEvent.title} poster`}>
            <div className="poster-image-wrap">
              <img src="/Build%20with%20AI%20Poster.png" alt="Build with AI hackathon poster" className="poster-image" />
              <div className="poster-image-overlay">
                <span>{featuredEvent.date}</span>
                <span>{featuredEvent.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="text-center mb-12">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark mb-4">Past Events</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Take a look at some of our recent events and workshops that brought our community together.
          </p>
          <Link to="/events" className="btn-outline">
            View All Events
          </Link>
        </div>
        
        <div className="events-grid">
          {pastEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.imageUrl} alt={event.title} loading="lazy" />
              </div>
              <div className="event-content">
                <h3 className="font-inter font-bold text-xl mb-3">{event.title}</h3>
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
                {/*<Link to={`/events/${event.id}`} className="btn-primary mt-4">
                  View Details
                </Link>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
