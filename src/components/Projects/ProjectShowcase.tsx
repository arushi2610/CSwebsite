import React from 'react';
import { Github } from 'lucide-react';
import './ProjectShowcase.css';

interface Project {
  id: number;
  title: string;
  description: string;
  repoUrl: string;
  technologies: string[];
}

const ProjectShowcase: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'FitFinder',
      description: 'A smart and community-driven platform where you can discover global scholarships, research programs and more, all based on your profile.',
      repoUrl: 'https://github.com/Code-Social/fitfinder',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Can I Try This?',
      description: 'A fun and beginner-friendly platform where you can explore real-world challenges in design, development, writing, data, and more.',
      repoUrl: 'https://github.com/Code-Social/canitrythis',
      technologies: ['Vue.js', 'Firebase', 'React', 'TypeScript'],
    },
  ];

  return (
    <section className="projects-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-xl">
              Love learning by doing? So do we. Come build with us at Code Social.
            </p>
          </div>
        </div>

        {/* TODO: restore project images, demo links, author cards, and like counts when ready */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="font-inter font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="technologies mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <div className="links">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-link"
                      aria-label="View GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
