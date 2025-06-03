
import React from 'react';
import { Mail, Globe, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sahanbhasima12@gmail.com', href: 'mailto:sahanbhasima12@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/sahanbhasima', href: 'https://github.com/sahanbhasima' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/sahanbhasima', href: 'https://linkedin.com/in/sahanbhasima' },
  ];

  const languages = ['Nepali', 'English', 'Hindi', 'Newari'];

  return (
    <section className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-cyber-gray text-lg">Let's discuss cybersecurity opportunities and collaborations</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 bg-cyber-navy/50 backdrop-blur-sm rounded-xl border border-cyber-blue/20 hover:border-cyber-electric/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="p-3 rounded-lg bg-cyber-electric/20 group-hover:bg-cyber-electric/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-cyber-electric" />
                  </div>
                  <div>
                    <p className="text-cyber-gray text-sm">{contact.label}</p>
                    <p className="text-white font-medium group-hover:text-cyber-electric transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="px-4 py-2 bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="bg-cyber-navy/50 backdrop-blur-sm p-8 rounded-xl border border-cyber-blue/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-cyber-gray text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white placeholder-cyber-gray focus:border-cyber-electric focus:outline-none focus:ring-2 focus:ring-cyber-electric/20 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-cyber-gray text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white placeholder-cyber-gray focus:border-cyber-electric focus:outline-none focus:ring-2 focus:ring-cyber-electric/20 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-cyber-gray text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white placeholder-cyber-gray focus:border-cyber-electric focus:outline-none focus:ring-2 focus:ring-cyber-electric/20 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-cyber-electric hover:bg-cyber-blue text-cyber-dark font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyber-electric/50"
              >
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
