import React from 'react';
import { Users, Award, Target } from 'lucide-react';
import './About.css';
import { Linkedin } from 'lucide-react';

const About: React.FC = () => {
  const timelineEvents = [
    {
      year: 2020,
      title: 'Foundation',
      description: 'Code Social Community was founded as a learning-focused community dedicated to providing individuals with resources and opportunities to grow in various technologies.'
    },
    {
      year: 2021,
      title: 'First Learning Sessions',
      description: 'We launched our first free learning sessions and mentorship programs, establishing the foundation for our educational approach.'
    },
    {
      year: 2022,
      title: 'Digital Platform Launch',
      description: 'Expanded our reach with WhatsApp groups and Discord server to connect members globally and provide accessible learning resources.'
    },
    {
      year: 2023,
      title: 'Structured Mentorship',
      description: 'Introduced our comprehensive mentorship program, connecting experienced professionals with newcomers in a structured learning environment.'
    },
    {
      year: 2024,
      title: 'Community Growth',
      description: 'Established performance-based team structure with Core Team and Executive Team, fostering leadership development within our community.'
    },
    {
      year: 2025,
      title: 'Global Learning Hub',
      description: 'Became a recognized global hub for hands-on learning, mentorship, and networking in the tech industry with members worldwide.'
    }
  ];

  const metrics = [
    { 
      value: '8,000+', 
      label: 'Community Members',
      description: 'Students to senior devs, coming together to share their passion.'
    },
    { 
      value: '1,500+', 
      label: 'Resources Shared',
      description: 'Tutorials, PDFs, guides shared by members, making learning accessible.'
    },
    { 
      value: '500+', 
      label: 'Open-Source Contributions',
      description: 'Members build, fix, create PRs, working together on our GitHub.'
    },
    { 
      value: '50+', 
      label: 'Events Hosted',
      description: 'Workshops, bootcamps, meme-athons (yes, we are fun!)'
    }
  ];

  const teamMembers = [
    {
      name: 'Arushi Malhotra',
      role: 'Founder',
      bio: 'Started a community because my brain wouldn\'t shut up. Now it\'s everyone\'s problem.',
      imageUrl: '/arushi.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/malhotra-arushi/'
    },
    {
      name: 'Kushagra Shrivastava',
      role: 'Co-Founder',
      bio: 'I talk to myself too often to be considered normal.',
      imageUrl: '/kus.png',
      linkedinUrl: 'https://www.linkedin.com/in/protonicgod/'
    },
    {
      name: 'Ajinkya Balwant Soley',
      role: 'Core Team Member',
      bio: 'Chasing dreams at 1km/hr',
      imageUrl: '/ajinkya.png',
      linkedinUrl: 'https://www.linkedin.com/in/ajinkya-soley/'
    },
    {
      name: 'Sk Md Rizwan',
      role: 'Executive Team Member',
      bio: 'I make memes, code, and sometimes both at the same time.',
      imageUrl: '/riz.png',
      linkedinUrl: 'https://www.linkedin.com/in/skmdrizwan/'
    },
    {
      name: 'Tejal Dhanvijay',
      role: 'Graphic Designer',
      bio: 'Designing for years; don`t know if accidentally hitting the right button, turning wild ideas into visuals that wow every single time.',
      imageUrl: '/tejal.png',
      linkedinUrl: 'https://www.linkedin.com/in/tejal-dhanvijay/'
    },
    {
      name: 'Divya Shirsath',
      role: 'Social Media Manager',
      bio: 'I push your notification bell.',
      imageUrl: '/divya.png',
      linkedinUrl: 'https://www.linkedin.com/in/divya-shirsath-008702216/'
    },
    {
      name: 'Ashish Salve',
      role: 'Community Manager',
      bio: 'I train hard, nap harder, and get lost in between.',
      imageUrl: '/ashish.png',
      linkedinUrl: 'https://www.linkedin.com/in/ashishsalve/'
    },
    {
      name: 'Namish Sahu',
      role: 'Community Manager',
      bio: 'I guard a human community',
      imageUrl: '/namish.png',
      linkedinUrl: 'https://www.linkedin.com/in/namish-sahu/'
    },
    {
      name: 'Anand Saundarya',
      role: 'Video Editor',
      bio: 'Editorius Maximus Memetica',
      imageUrl: '/anand.png',
      linkedinUrl: 'https://www.linkedin.com/in/anand-saundarya-728a00226/'
    },
    {
      name: 'Roshni Rajani',
      role: 'Community Manager',
      bio: 'Little bit of Creativity, Little bit of Chaos.',
      imageUrl: '/roshni.png',
      linkedinUrl: 'https://www.linkedin.com/in/roshni-rajani/'
    },
    {
      name: 'Isha Vijay Mahajan',
      role: 'Graphic Designer',
      bio: 'I put shapes on screens.',
      imageUrl: '/isha.png',
      linkedinUrl: 'https://www.linkedin.com/in/isha-mahajan-22ab59259/'
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-white mb-6">Our Story</h1>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              We're building a learning-focused community where individuals can learn, grow, and excel without ever feeling judged for being a beginner.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mission-card">
              <div className="icon-container">
                <Target size={40} />
              </div>
              <h2 className="font-inter font-bold text-2xl mb-4">Our Mission</h2>
              <p>
                At Code Social, we're all about helping you shine in the ever-changing tech world. Our main goal is to build a collaborative learning space. We want to help you get easy access to resources and chances to keep growing, learning new skills, and doing great things.
              </p>
            </div>
            <div className="mission-card">
              <div className="icon-container">
                <Users size={40} />
              </div>
              <h2 className="font-inter font-bold text-2xl mb-4">Our Vision</h2>
              <p>
                We believe that not having enough resources or opportunites shouldn't stop you from doing amazing things in tech - a field where possibilities are endless. Our goal is to become a worldwide go-to spot for applied learning, guidance from mentors, and connecting with others in tech.
              </p>
            </div>
            <div className="mission-card">
              <div className="icon-container">
                <Award size={40} />
              </div>
              <h2 className="font-inter font-bold text-2xl mb-4">Our Approach</h2>
              <p>
                We encourage everyone to get hands-on with problem-solving. Work together, and build up your skills by truly getting your hands dirty! Think of our community as a stepping stone that helps you grow both personally and in your career.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* 
      <section className="timeline-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center font-inter font-bold text-3xl md:text-4xl mb-16">Our Journey</h2>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="year">{event.year}</div>
                  <h3 className="font-inter font-bold text-xl mb-2">{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
*/}

      <section className="journey-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center font-inter font-bold text-3xl md:text-4xl mb-10">Our Journey</h2>
          <p className="max-w-4xl mx-auto text-center text-WHITE text-lg leading-relaxed">
            Hi, I’m Arushi, Founder of Code Social 👋<br /><br />
I wasn’t coding since I was 12. I actually started learning when I was in college, but I knew I wanted to learn. When I joined random WhatsApp groups to ask questions, I was often judged for being “too behind.” I saw others get shut down too, especially beginners just getting started.<br /><br />
So in 2023, I created a WhatsApp group to share beginner-friendly resources, free of judgment. That small space grew into Code Social, a global community of 8,000+ learners and a team of 11 organizing workshops, meetups, and challenges to make tech more accessible and fun.
I started this while pursuing my bachelor’s, and now I’m continuing the journey with a Master’s in Computer Science in Chicago. I bring back everything I learn to help others grow.
What’s next? More events. Bigger challenges. New tools. And maybe your next breakthrough.
Stay tuned, stay curious, and let’s build something amazing together.
          </p>
        </div>
      </section>

      <section className="metrics-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center font-inter font-bold text-3xl md:text-4xl mb-16 text-#ff914d">Our Impact</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card bg-white border border-gray-200 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="metric-value text-#ff914d text-4xl font-bold mb-2">{metric.value}</div>
                <div className="metric-label text-#ff914d text-lg font-semibold mb-2">{metric.label}</div>
                <div className="metric-description text-gray-600 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center font-inter font-bold text-3xl md:text-4xl mb-16">Humans of Code Social</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.imageUrl} alt={member.name} loading="lazy" />
                </div>
                <div className="member-info">
                <div className="flex items-left gap-40">
                  <h3 className="font-inter font-bold text-xl">{member.name}</h3>
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] hover:underline"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
                  <p className="role mb-3">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
