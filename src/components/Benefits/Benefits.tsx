import React from 'react';
import { Users, Lightbulb, BookOpen } from 'lucide-react';
import './Benefits.css';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Users size={48} />,
      title: 'Learning Community',
      description: 'Connect with like-minded individuals in a supportive learning environment. Participate in free learning sessions and peer-to-peer knowledge sharing.'
    },
    {
      icon: <Lightbulb size={48} />,
      title: 'Mentorship Programs',
      description: 'Access structured mentorship opportunities with experienced professionals who are passionate about helping others learn and succeed in their chosen fields.'
    },
    {
      icon: <BookOpen size={48} />,
      title: 'Hands-on Learning',
      description: 'Do not just follow courses, practice and grow your skills. Embrace problem-solving through projects, and real-world tech. Challenge yourself to build and apply what you learn.'
    }
  ];

  return (
    <section className="benefits-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark mb-4">Why Join Code Social?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're more than just a community. We're a vibrant learning hub dedicated to helping you excel in the ever-evolving tech landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="icon-container">
                {benefit.icon}
              </div>
              <h3 className="font-inter font-bold text-xl mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;