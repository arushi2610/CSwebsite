import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
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

const Events: React.FC = () => {
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
        {/* Event Calendar Section */}
        <div className="luma-embed mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-center mb-12">Our Event Calendar</h2>
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
