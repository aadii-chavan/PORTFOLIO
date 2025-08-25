import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js, featuring payment integration and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['TypeScript', 'React', 'Socket.io', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather application with location-based forecasts, data visualization, and responsive design.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS3'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern design principles and smooth user experience.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-light text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 font-poppins font-light text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-dark-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.githubUrl}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-200"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-200"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-poppins font-medium text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-poppins font-light mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-poppins font-light bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-white transition-colors duration-200 font-poppins font-light text-sm flex items-center space-x-1"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="text-gray-400 hover:text-white transition-colors duration-200 font-poppins font-light text-sm flex items-center space-x-1"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;