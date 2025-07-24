import React from 'react';
import { Search, Filter, ExternalLink } from 'lucide-react';
import './Resources.css';

interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
  type: string;
}

const Resources: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<string>('all');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  
  const categories = [
    'All', 'Course', 'Article', 'Website', 'Tool', 'Tutorial', 'Documentation'
  ];
  
  const resources: Resource[] = [
    {
      id: 1,
      title: 'freeCodeCamp',
      description: 'Learn to code for free with interactive coding lessons and projects.',
      link: 'https://www.freecodecamp.org/',
      tags: ['JavaScript', 'Python', 'Web Development', 'Data Science'],
      type: 'Course'
    },
    {
      id: 2,
      title: 'MDN Web Docs',
      description: 'Comprehensive documentation for web technologies including HTML, CSS, and JavaScript.',
      link: 'https://developer.mozilla.org/',
      tags: ['HTML', 'CSS', 'JavaScript', 'Web APIs'],
      type: 'Documentation'
    },
    {
      id: 3,
      title: 'The Odin Project',
      description: 'A free full stack curriculum supported by an open source community.',
      link: 'https://www.theodinproject.com/',
      tags: ['Full Stack', 'Ruby', 'JavaScript', 'Node.js'],
      type: 'Course'
    },
    {
      id: 4,
      title: 'CSS-Tricks',
      description: 'Daily articles about CSS, HTML, JavaScript, and all things related to web design.',
      link: 'https://css-tricks.com/',
      tags: ['CSS', 'HTML', 'JavaScript', 'Web Design'],
      type: 'Article'
    },
    {
      id: 5,
      title: 'Codecademy',
      description: 'Interactive coding lessons in various programming languages and technologies.',
      link: 'https://www.codecademy.com/',
      tags: ['Python', 'JavaScript', 'SQL', 'Data Science'],
      type: 'Course'
    },
    {
      id: 6,
      title: 'GitHub',
      description: 'Platform for version control and collaboration, hosting millions of open source projects.',
      link: 'https://github.com/',
      tags: ['Git', 'Version Control', 'Open Source'],
      type: 'Tool'
    },
    {
      id: 7,
      title: 'Coursera',
      description: 'Online courses from top universities and companies worldwide.',
      link: 'https://www.coursera.org/',
      tags: ['Machine Learning', 'Data Science', 'Computer Science'],
      type: 'Course'
    },
    {
      id: 8,
      title: 'W3Schools',
      description: 'Web development tutorials covering HTML, CSS, JavaScript, and more.',
      link: 'https://www.w3schools.com/',
      tags: ['HTML', 'CSS', 'JavaScript', 'SQL', 'PHP'],
      type: 'Tutorial'
    },
    {
      id: 9,
      title: 'Khan Academy',
      description: 'Free online courses in computer programming and computer science.',
      link: 'https://www.khanacademy.org/computing',
      tags: ['Programming', 'Computer Science', 'Algorithms', 'Beginner'],
      type: 'Course'
    },
    {
      id: 10,
      title: 'Dev.to',
      description: 'Community of software developers sharing articles, tutorials, and insights.',
      link: 'https://dev.to/',
      tags: ['Articles', 'Programming', 'Career'],
      type: 'Article'
    },
    {
      id: 11,
      title: 'LeetCode',
      description: 'Platform for practicing coding interview questions and improving problem-solving skills.',
      link: 'https://leetcode.com/',
      tags: ['Algorithms', 'Data Structures', 'Interview Prep', 'Problem Solving'],
      type: 'Tool'
    },
    {
      id: 12,
      title: 'React Documentation',
      description: 'Official documentation for React, the popular JavaScript library for building user interfaces.',
      link: 'https://react.dev/',
      tags: ['React', 'JavaScript', 'Frontend'],
      type: 'Documentation'
    },
    {
      id: 13,
      title: 'HackerRank',
      description: 'Coding challenges and competitions to improve programming skills.',
      link: 'https://www.hackerrank.com/',
      tags: ['Coding Challenges', 'Algorithms', 'Interview Prep'],
      type: 'Tool'
    },
    {
      id: 14,
      title: 'Udemy',
      description: 'Online learning platform with courses on programming, web development, and more.',
      link: 'https://www.udemy.com/',
      tags: ['Courses', 'Web Development', 'Mobile Development'],
      type: 'Course'
    },
    {
      id: 15,
      title: 'Medium - Programming',
      description: 'Articles and insights from developers and tech professionals.',
      link: 'https://medium.com/topic/programming',
      tags: ['Articles', 'Programming', 'Career'],
      type: 'Article'
    },
    {
      id: 16,
      title: 'Codepen',
      description: 'Online code editor and community for front-end developers.',
      link: 'https://codepen.io/',
      tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
      type: 'Tool'
    }
  ];

  const filteredResources = resources.filter(resource => {
    // Filter by category
    const categoryMatch = activeFilter === 'all' || resource.type.toLowerCase() === activeFilter.toLowerCase();
    
    // Filter by search query
    const searchMatch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-white mb-6">Learning Resources</h1>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Discover curated courses, articles, tools, and websites to accelerate your learning journey in tech.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="resources-filter-bar mb-8">
            <div className="search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="categories-filter">
              <div className="filter-icon">
                <Filter size={18} />
                <span>Filter:</span>
              </div>
              <div className="categories">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className={`category-btn ${activeFilter === category.toLowerCase() ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.toLowerCase())}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="resources-grid">
            {filteredResources.length > 0 ? (
              filteredResources.map(resource => (
                <div key={resource.id} className="resource-card">
                  <span className="resource-type">{resource.type}</span>
                  <h3 className="font-inter font-bold text-xl">{resource.title}</h3>
                  <p className="resource-description">{resource.description}</p>
                  <div className="resource-tags">
                    {resource.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    <span>Visit Resource</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No resources match your search. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="submit-resource-section">
            <h3 className="font-inter font-bold">Contribute to Our Resources</h3>
            <p>
              Would you like to submit a resource? Do it on our GitHub!
            </p>
            <a 
              href="https://github.com/Code-Social" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              <span>Submit on GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
