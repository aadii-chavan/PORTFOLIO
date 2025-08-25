import React from 'react';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';
import Threads from './Threads';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, TypeScript, JavaScript' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe XD, Tailwind CSS' },
    { name: 'Responsive Design', icon: Smartphone, description: 'Mobile-first, Cross-browser' },
    { name: 'Web Technologies', icon: Globe, description: 'HTML5, CSS3, Node.js' },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <Threads
          amplitude={3}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-light text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="text-center lg:text-left animate-slide-up">
            <p className="text-gray-300 font-poppins font-light text-lg leading-relaxed mb-8">
            </p>
            <p className="text-gray-400 font-poppins font-light leading-relaxed">
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-up">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-dark-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                >
                  <Icon className="text-white mb-4 group-hover:scale-110 transition-transform duration-200" size={32} />
                  <h3 className="text-white font-poppins font-medium text-lg mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 font-poppins font-light text-sm">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;