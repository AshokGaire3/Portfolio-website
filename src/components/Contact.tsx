import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import SectionEffects from './SectionEffects';

// Type definitions for EmailJS
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (serviceId: string, templateId: string, templateParams: any, publicKey: string) => Promise<{status: number}>;
    };
  }
}

// Type definitions for Vite env
interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// EmailJS configuration
const EMAILJS_SERVICE_ID = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || 'service_erl2y9l';
const EMAILJS_TEMPLATE_ID = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || 'template_oy2enpc';
const EMAILJS_PUBLIC_KEY = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || 'rxfKhkFBeHg30Hlyg';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Check if EmailJS is loaded
      if (!window.emailjs) {
        throw new Error('Email service not loaded');
      }

      // Send email using EmailJS
      const result = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'ashok.gaire39@gmail.com',
          to_name: 'Ashok Gaire'
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again or use the email link below.');
      
      // Fallback to mailto if form submission fails
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:ashok.gaire39@gmail.com?subject=${subject}&body=${body}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (!value.trim() && ['name', 'email', 'subject', 'message'].includes(name)) {
      setErrors(prev => ({
        ...prev,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      }));
    }
  };

  return (
    <section id="contact" className="py-20 section-cosmic relative overflow-hidden">
      <SectionEffects effectType="contact" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-orbitron text-glow-purple">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-light font-exo">
            I'm always open to discussing new opportunities, collaborations, and interesting projects in data science and software development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight font-orbitron text-glow-blue">Let's Connect</h3>
            <p className="text-slate-300 mb-8 leading-relaxed font-light font-exo">
              Whether you have a data analysis project, need a full-stack application, or want to discuss 
              AI/ML solutions, I'd love to hear from you. Let's build something amazing together!
            </p>
            
            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 rounded-lg card-cosmic">
                <div className="glass-morphism p-3 rounded-lg group-hover:glow-blue transition-all duration-300">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white font-exo">Email</h4>
                  <a href="mailto:ashok.gaire39@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-light font-exo">
                    gaireashok79@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-lg card-cosmic">
                <div className="glass-morphism p-3 rounded-lg group-hover:glow-purple transition-all duration-300">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white font-exo">Location</h4>
                  <p className="text-slate-300 font-light font-exo">Cincinnati, Ohio, USA</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-lg card-cosmic">
                <div className="glass-morphism p-3 rounded-lg group-hover:glow-cyan transition-all duration-300">
                  <Github className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white font-exo">GitHub</h4>
                  <a href="https://github.com/AshokGaire3" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-light font-exo">
                    github.com/AshokGaire3
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-lg card-cosmic">
                <div className="glass-morphism p-3 rounded-lg group-hover:glow-blue transition-all duration-300">
                  <Linkedin className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white font-exo">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/ashok-gaire-077562246" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-light font-exo">
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="card-cosmic p-8 rounded-lg transition-all duration-300 form-cosmic">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="text-cyan-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight font-orbitron">Message Sent!</h3>
                  <p className="text-slate-300 font-light font-exo">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <>
                  {submitError && (
                    <div className="mb-6 p-4 rounded-md bg-red-500/10 border border-red-500/30">
                      <div className="flex items-center gap-2 text-red-400">
                        <AlertCircle size={20} />
                        <span className="font-medium font-exo">{submitError}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 font-exo">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 rounded-md transition-all duration-300 ${
                        errors.name ? 'border-2 border-red-500/50 bg-red-500/10' : ''
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1 font-exo">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 font-exo">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 rounded-md transition-all duration-300 ${
                        errors.email ? 'border-2 border-red-500/50 bg-red-500/10' : ''
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 font-exo">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2 font-exo">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 rounded-md transition-all duration-300 ${
                        errors.subject ? 'border-2 border-red-500/50 bg-red-500/10' : ''
                      }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1 font-exo">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 font-exo">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-md transition-all duration-300 resize-none ${
                        errors.message ? 'border-2 border-red-500/50 bg-red-500/10' : ''
                      }`}
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1 font-exo">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full btn-cosmic-primary py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed font-exo"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-slate-400 mt-4 text-center font-exo">
                    * Required fields. Your information will be kept confidential.
                  </p>
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