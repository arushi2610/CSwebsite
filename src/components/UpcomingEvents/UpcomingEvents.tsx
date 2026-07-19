import React from 'react';
import { CalendarPlus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './UpcomingEvents.css';

// Public Google Calendar ID. The `cid` link prompts visitors to subscribe to
// the calendar in their own Google account (no iframe needed).
const GOOGLE_CALENDAR_ID =
  '9365dc46515ee05fecadd380002a268dc2ed3e53b18cd761ddd514516c7e0d0c@group.calendar.google.com';

const ADD_TO_CALENDAR_URL = `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(
  GOOGLE_CALENDAR_ID
)}`;

const UpcomingEvents: React.FC = () => {
  return (
    <section className="upcoming-events-section py-20">
      <div className="container mx-auto px-4">
        <div className="upcoming-events-card">
          <div className="upcoming-events-text">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-4">Upcoming Events</h2>
            <p className="text-gray-600">
              Workshops, community calls, challenges, and more. Subscribe to our calendar and
              every new event lands in yours automatically — no checking back required.
            </p>
          </div>
          <div className="upcoming-events-actions">
            <a
              href={ADD_TO_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <CalendarPlus size={18} />
              <span>Add to Google Calendar</span>
            </a>
            <Link to="/events" className="btn-secondary flex items-center justify-center gap-2">
              <span>View All Events</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
