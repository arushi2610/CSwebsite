import React from 'react';
import { ExternalLink, Github, ThumbsUp } from 'lucide-react';
import './ProjectShowcase.css';

interface Project {
  id: number;
  title: string;
  description: string;
  //imageUrl: string;
  repoUrl: string;
  //demoUrl: string;
  //technologies: string[];
  /*author: {
    name: string;
    avatarUrl: string;
  };
  likes: number;
  */
}

const ProjectShowcase: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "FitFinder",
      description: "A smart and community-driven platform where you can discover global scholarships, research programs and more, all based on your profile.",
      //imageUrl: "https://images.pexels.com/photos/7439141/pexels-photo-7439141.jpeg?auto=compress&cs=tinysrgb&w=1600",
      repoUrl: "https://github.com/Code-Social/fitfinder",
      //demoUrl: "https://example.com",
      //technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      /*author: {
        name: "Emma Wilson",
        avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
      },
      likes: 132*/
    },
    {
      id: 2,
      title: "Can I Try This?",
      description: "A fun and beginner-friendly platform where you can explore real-world challenges in design, development, writing, data, and more.",
      //imageUrl: "https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1600",
      repoUrl: "https://github.com/Code-Social/canitrythis",
      //demoUrl: "https://example.com",
      //technologies: ["Vue.js", "Firebase", "Three.js", "TypeScript"],
      /*author: {
        name: "James Chen",
        avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600"
      },
      likes: 98*/
    }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              {/*
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} loading="lazy" />
              </div>
              */}
              <div className="project-content">
                <h3 className="font-inter font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="technologies mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {/*<div className="project-author mb-4">
                  <img 
                    src={project.author.avatarUrl} 
                    alt={project.author.name}
                    className="author-avatar"
                    loading="lazy"
                  />
                  <span>{project.author.name}</span>
                </div>*/}
                
                <div className="project-actions">
                  {/*
                  <div className="likes">
                    <ThumbsUp size={16} />
                    <span>{project.likes}</span>
                  </div>
                  */}
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
                    {/*
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="demo-link"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    */}
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
