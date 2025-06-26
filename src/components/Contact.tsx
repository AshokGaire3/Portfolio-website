import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:ashok.gaire39@gmail.com?subject=${subject}&body=${body}`;
    
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, and interesting projects in data science and software development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you have a data analysis project, need a full-stack application, or want to discuss 
              AI/ML solutions, I'd love to hear from you. Let's build something amazing together!
            </p>
            
            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a href="mailto:ashok.gaire39@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    ashok.gaire39@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                  <MapPin className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">Cincinnati, Ohio, USA</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                  <Github className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">GitHub</h4>
                  <a href="https://github.com/AshIVg" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                    github.com/AshIVg
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition-colors duration-300">
                  <Linkedin className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/ashok-gaire-077562246" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none hover:border-gray-400"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send size={20} className="group-hover:animate-bounce" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;