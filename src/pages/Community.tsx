import React from 'react';
import { Users, MessageCircle, Share2, ExternalLink, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import './Community.css';
import { FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

/*const Community: React.FC = () => {
  const networkPartners = [
    {
      name: "TechHub Global",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      website: "https://techhub.com"
    },
    {
      name: "DevConnect Alliance",
      logo: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
      website: "https://devconnect.org"
    },
    {
      name: "Women in Tech Network",
      logo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      website: "https://womenintech.org"
    }
  ];
  */

  const socialMediaHandles = [
    {
      platform: "Discord",
      handle: "Code Social Community",
      url: "https://discord.gg/MSTNyRSPYW",
      icon: <FaDiscord size={24} />,
      description: ""
    },
    {
      platform: "X",
      handle: "@codesocial_tech",
      url: "https://twitter.com/codesocial_tech",
      icon: <FaXTwitter size={24} />,
      description: ""
    },
    {
      platform: "LinkedIn",
      handle: "Code Social",
      url: "https://www.linkedin.com/company/code-social/",
      icon: <Linkedin size={24} />,
      description: ""
    },
    {
      platform: "GitHub",
      handle: "Code-Social",
      url: "https://github.com/orgs/Code-Social/dashboard",
      icon: <Github size={24} />,
      description: ""
    },
    {
      platform: "Instagram",
      handle: "@codesocial.tech",
      url: "https://www.instagram.com/codesocial.tech/",
      icon: <Instagram size={24} />,
      description: ""
    }
  ];

  return (
    <div className="community-page">
      <section className="community-hero">
        <div className="overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-white mb-6">Join Code Social!</h1>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Ready to dive in? Connect with fellow learners, join our mentorship programs, and grow together. It's a supportive space, all about learning and exceling in your career!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.gg/MSTNyRSPYW" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2">
                <FaDiscord size={20} />
                Join Discord
              </a>
              <a href="https://www.linkedin.com/company/code-social/" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2">
                <Share2 size={20} />
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-card">
              <Users className="text-primary" size={40} />
              <div className="stat-value">8,000+</div>
              <div className="stat-label">Active Learners</div>
            </div>
            <div className="stat-card">
              <MessageCircle className="text-primary" size={40} />
              <div className="stat-value">50+</div>
              <div className="stat-label">Learning Sessions</div>
            </div>
            <div className="stat-card">
              <Share2 className="text-primary" size={40} />
              <div className="stat-value">500+</div>
              <div className="stat-label">Mentorship Connections</div>
            </div>
          </div>
        </div>
      </section>
      {/*
      <section className="network-partners py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">Our Network Partners</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We collaborate with leading tech communities and organizations worldwide to expand learning opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {networkPartners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} loading="lazy" />
                </div>
                <div className="partner-content">
                  <h3 className="font-inter font-bold text-xl mb-4">{partner.name}</h3>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="partner-link flex items-center justify-center gap-2"
                  >
                    <span>Visit Website</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
*/
      <section className="social-media py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">Connect With Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Want to stay in the loop? Follow us on social media for all the latest news, exciting events, and community updates!
            </p>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {socialMediaHandles.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-media-card"
              >
                <div className="social-icon">
                  {social.icon}
                </div>
                <div className="social-content">
                  <h3 className="font-inter font-bold text-xl mb-1">{social.platform}</h3>
                  <p className="social-handle mb-2">{social.handle}</p>
                  <p className="social-description">{social.description}</p>
                </div>
                <div className="social-arrow">
                  <ExternalLink size={20} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
