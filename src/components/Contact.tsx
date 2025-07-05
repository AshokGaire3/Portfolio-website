import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:ashok.gaire39@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-light">
            I'm always open to discussing new opportunities, collaborations, and interesting projects in data science and software development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed font-light">
              Whether you have a data analysis project, need a full-stack application, or want to discuss 
              AI/ML solutions, I'd love to hear from you. Let's build something amazing together!
            </p>
            
            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 card-hover-subtle">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-all duration-300">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a href="mailto:ashok.gaire39@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 animate-underline-expand font-light">
                    ashok.gaire39@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 card-hover-subtle">
                <div className="bg-gray-50 p-3 rounded-lg group-hover:bg-gray-100 transition-all duration-300">
                  <MapPin className="text-gray-700" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600 font-light">Cincinnati, Ohio, USA</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 card-hover-subtle">
                <div className="bg-gray-50 p-3 rounded-lg group-hover:bg-gray-100 transition-all duration-300">
                  <Github className="text-gray-700" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">GitHub</h4>
                  <a href="https://github.com/AshIVg" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 animate-underline-expand font-light">
                    github.com/AshIVg
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 card-hover-subtle">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-all duration-300">
                  <Linkedin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/ashok-gaire-077562246" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 animate-underline-expand font-light">
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 card-hover-subtle">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="text-blue-600 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Message Sent!</h3>
                  <p className="text-gray-600 font-light">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-gray-400"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-sm hover:shadow-md btn-hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;