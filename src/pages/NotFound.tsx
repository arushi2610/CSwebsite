import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <div className="notfound-code">404</div>
        <h1 className="font-inter font-bold text-3xl md:text-4xl mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Looks like this page doesn't exist — or it moved somewhere else. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
