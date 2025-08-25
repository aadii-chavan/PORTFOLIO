import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-light text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 font-poppins font-light text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-poppins font-light text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-lg text-white font-poppins font-light focus:border-white focus:outline-none transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-poppins font-light text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-lg text-white font-poppins font-light focus:border-white focus:outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-poppins font-light text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-lg text-white font-poppins font-light focus:border-white focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-3 font-poppins font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up lg:pl-8">
            <div className="mb-12">
              <h3 className="text-2xl font-poppins font-medium text-white mb-6">
                Let's Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-gray-400" size={20} />
                  <span className="text-gray-300 font-poppins font-light">alex.morgan@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-gray-400" size={20} />
                  <span className="text-gray-300 font-poppins font-light">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-gray-400" size={20} />
                  <span className="text-gray-300 font-poppins font-light">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-poppins font-medium text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-dark-900 p-3 rounded-lg border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={24} className="text-white hover:text-black transition-colors duration-300" />
                </a>
                <a
                  href="#"
                  className="bg-dark-900 p-3 rounded-lg border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={24} className="text-white hover:text-black transition-colors duration-300" />
                </a>
                <a
                  href="#"
                  className="bg-dark-900 p-3 rounded-lg border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={24} className="text-white hover:text-black transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;