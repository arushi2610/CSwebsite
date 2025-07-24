import React from 'react';
import { Users, Megaphone, UserPlus, HelpCircle } from 'lucide-react';
import './GetInvolved.css';

const GetInvolved: React.FC = () => {
  const faqs = [
    {
      question: "Who can join Code Social Community?",
      answer: "Honestly, anyone with a spark of interest in tech! Whether you're a student, thinking about a career change, just trying it for fun, or already a pro – you're welcome here. No prior experience needed at all!"
    },
    {
      question: "How can my organization partner with Code Social?",
      answer: "We'd absolutely love to team up with you! Just shoot us an email at codesocialcommunity@gmail.com with what you're hoping to achieve (like sponsoring a workshop, hosting a hackathon, or offering mentorship). We'll take a look and get back to you as quickly as possible!"
    },
    {
      question: "How to Join Code Social's Team?",
      answer: "Want to make a real impact? Join our team and give back to the community! You can help us grow through roles like creating content, managing events, and building our awesome community."
    },
    {
      question: "Can I give back as a mentor or speaker?",
      answer: "Yes, please! We'd love that. Just fill out our 'Get Involved' form, tell us a bit about your skills and when you're free, and we'll help you find the perfect way to contribute."
    },
    {
      question: "How can I contribute as a member?",
      answer: "Becoming an active member helps our whole community grow. There are many ways to pitch in, from sharing knowledge to organizing events and mentoring."
    }
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="get-involved-page">
      <section className="get-involved-hero">
        <div className="overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-white mb-6">Get Involved</h1>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Join our learning-focused community and embark on a journey of technological discovery. There are many ways to learn, contribute, and grow with us.
            </p>
          </div>
        </div>
      </section>

      <section className="ways-to-join py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="join-card">
              <div className="icon-container">
                <Users size={40} />
              </div>
              <h2 className="font-inter font-bold text-2xl mb-4">Join Learning Community</h2>
              <p className="text-gray-600 mb-6">
                Connect with fellow learners, access free learning sessions, and participate in peer-to-peer knowledge sharing.
              </p>
              <a href="https://discord.gg/MSTNyRSPYW" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Join Now
              </a>
            </div>

            <div className="join-card">
              <div className="icon-container">
                <Megaphone size={40} />
              </div>
              <h2 className="font-inter font-bold text-2xl mb-4">Become a Mentor/Speaker</h2>
              <p className="text-gray-600 mb-6">
                Share your expertise through workshops, mentorship programs, and help others grow.
              </p>
              <a href="https://forms.gle/V2H4U7GCtReLzQcz5" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Apply Now
              </a>
            </div>

            <div className="join-card">
              <div className="icon-container">
                <UserPlus size={40} />
              </div>
              <h2 className="font-inter font-bold text-2xl mb-4">Join Our Team</h2>
              <p className="text-gray-600 mb-6">
                Want to make a real impact? Join our team and give back to the community! You can help us grow through various roles.
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfssS9CrndfmKBoJCXrLp35sEsu3X4Vyyt1hKh0inTdtgafYQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Apply to Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="social-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-inter font-bold text-3xl text-center mb-12">Connect With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="https://twitter.com/codesocial_tech" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="icon-container twitter">
                <svg className="w-8 h-8" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M711.5 556.9l476.5-556.9h-111.2l-406.2 474.9L331.3 0H0l511.8 666.4L0 1227h111.2l440.9-515.4L874.7 1227H1200" />
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-xl mb-2">X</h3>
              <p className="text-gray-600"></p>
            </a>

            <a href="https://www.linkedin.com/company/code-social/" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="icon-container linkedin">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-xl mb-2">LinkedIn</h3>
              <p className="text-gray-600"></p>
            </a>

            <a href="https://github.com/orgs/Code-Social/dashboard" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="icon-container github">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-xl mb-2">GitHub</h3>
              <p className="text-gray-600"></p>
            </a>

            <a href="https://www.instagram.com/codesocial.tech/" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="icon-container discord">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-xl mb-2">Instagram</h3>
              <p className="text-gray-600"></p>
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about joining and participating in Code Social Community.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="font-inter font-semibold text-lg">{faq.question}</span>
                  <HelpCircle
                    size={20}
                    className={`transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`faq-answer ${openFaq === index ? 'active' : ''}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
