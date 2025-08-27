import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import DarkVeil from './DarkVeil';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* DarkVeil Background */}
      <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <DarkVeil />
      </div>
      hr
      <div className="container mx-auto px-6 text-center relative z-10 pt-24">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-poppins font-light text-white mb-6 leading-tight">
            Hi, I'm <span className="font-medium text-white">Aditya Chavan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-poppins font-light text-gray-300 mb-8">
            Web Developer
          </h2>
          <p className="text-lg md:text-xl font-poppins font-light text-gray-400 mb-12 max-w-2xl mx-auto">
            A 2nd-year Computer Science (Data Science) student at Vishwakarma Institute of Technology, Pune. With 1 year of hands-on web development experience, I'm passionate about building impactful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-black px-8 py-3 font-poppins font-medium rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-white text-white px-8 py-3 font-poppins font-light rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/aadii-chavan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aadii-chavan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        {/* Removed ArrowDown button */}
      </div>
    </section>
  );
};

export default Hero;