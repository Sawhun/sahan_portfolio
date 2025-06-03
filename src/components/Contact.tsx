
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sahanbhasima12@gmail.com', href: 'mailto:sahanbhasima12@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/sawhun', href: 'https://github.com/sahanbhasima' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/sahanbhasima', href: 'https://linkedin.com/in/sahanbhasima' },
  ];

  const languages = ['Nepali', 'English', 'Hindi', 'Newari'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-16 sm:py-20 bg-cyber-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-cyber-gray text-base sm:text-lg">Let's discuss cybersecurity opportunities and collaborations</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 sm:p-6 bg-cyber-navy/50 backdrop-blur-sm rounded-xl border border-cyber-blue/20 hover:border-cyber-electric/50 transition-all duration-300 group hover:scale-105 transform"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="p-3 rounded-lg bg-cyber-electric/20 group-hover:bg-cyber-electric/30 transition-colors">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-electric" />
                  </div>
                  <div>
                    <p className="text-cyber-gray text-sm">{contact.label}</p>
                    <p className="text-white font-medium group-hover:text-cyber-electric transition-colors text-sm sm:text-base">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Languages */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="px-3 sm:px-4 py-2 bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 rounded-full text-sm hover:bg-cyber-purple/30 transition-colors"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cyber-navy/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-cyber-blue/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-cyber-green/20 border border-cyber-green/30 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyber-green" />
                <span className="text-cyber-green">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-cyber-gray text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white placeholder-cyber-gray focus:border-cyber-electric focus:outline-none focus:ring-2 focus:ring-cyber-electric/20 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-cyber-gray text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white placeholder-cyber-gray focus:border-cyber-electric focus:outline-none focus:ring-2 focus:ring-cyber-electric/20 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-cyber-gray text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white placeholder-cyber-gray focus:border-cyber-electric focus:outline-none focus:ring-2 focus:ring-cyber-electric/20 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyber-electric hover:bg-cyber-blue text-cyber-dark font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyber-electric/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105 transform"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-cyber-dark border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
