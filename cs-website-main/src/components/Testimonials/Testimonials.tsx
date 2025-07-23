import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  imageUrl: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "I'm so grateful for this community, I joined it in 2023, when I first came to US for my masters, with alot of helpful resources in the community, I got Senior Software Engineer role at Persistent in San Francisco Bay Area, California.",
      name: "Prakhar Gupta",
      role: "Sr. Software Engineer",
      company: "Persistent",
      imageUrl: ""
    },
    {
      id: 2,
      quote: "Code Social has been a guiding light in my tech journey, offering incredible resources which led me to where I am now, and they host events that truly enlighten. As a former Core Team member, I was mentored by the founder herself, whose constant support helped me grow both personally and professionally.",
      name: "Debasis Sikdar",
      role: "Final Year Student",
      company: "",
      imageUrl: ""
    },
    {
      id: 3,
      quote: "Joining CodeSocial in 2024 via Discord was a pleasant surprise. My engagement with the community has been consistently rewarding. From insightful workshops to practical SQL and JavaScript sessions, the diverse learning opportunities have significantly contributed to my growth.",
      name: "Kaushik Raj",
      role: "Final Year Student",
      company: "",
      imageUrl: ""
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, 5000); // 5 seconds

  return () => clearInterval(interval);
}, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonials-section py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl mb-4">What Our Community Says</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from our community members about their learning experiences and growth with Code Social.
          </p>
        </div>
        
        <div className="testimonial-carousel">
          <div className="testimonial-wrapper">
            <div className="testimonial-content">
              <div className="quote-icon">
                <Quote size={48} />
              </div>
              <blockquote>
                {testimonials[currentIndex].quote}
              </blockquote>
            
              <div className="author-info">
                <h4 className="font-inter font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-300">
                  {testimonials[currentIndex].role}
                  {testimonials[currentIndex].company && `, ${testimonials[currentIndex].company}`}
                </p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-controls">
            <button 
              onClick={handlePrev}
              className="control-btn"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="control-btn"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;