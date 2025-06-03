
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyber-dark to-cyber-navy text-white overflow-x-hidden">
      <Navigation />
      
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-cyber-electric/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-4 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyber-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Modern footer with grid layout */}
      <footer className="relative z-10 mt-20">
        <div className="bg-gradient-to-r from-cyber-dark via-slate-900 to-cyber-navy border-t border-cyber-electric/20">
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Brand section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyber-electric/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyber-electric font-bold text-xl">SB</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Sahan Bhasima</h3>
                    <p className="text-cyber-gray">Cybersecurity Professional</p>
                  </div>
                </div>
                <p className="text-cyber-gray leading-relaxed mb-6 max-w-md">
                  Passionate about securing digital infrastructure through ethical hacking, 
                  threat intelligence, and comprehensive security analysis.
                </p>
                <div className="flex gap-4">
                  <a href="mailto:sahanbhasima12@gmail.com" className="w-10 h-10 bg-cyber-electric/20 hover:bg-cyber-electric/30 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-cyber-electric text-sm font-bold">@</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-cyber-green/20 hover:bg-cyber-green/30 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-cyber-green text-sm font-bold">G</span>
                  </a>
                </div>
              </div>
              
              {/* Quick navigation */}
              <div>
                <h4 className="text-white font-semibold mb-6">Navigation</h4>
                <div className="space-y-3">
                  {['Home', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`} 
                      className="block text-cyber-gray hover:text-cyber-electric transition-colors text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Expertise areas */}
              <div>
                <h4 className="text-white font-semibold mb-6">Expertise</h4>
                <div className="space-y-3">
                  {['Threat Intelligence', 'SIEM Tools', 'Penetration Testing', 'Linux Security', 'Python Scripting'].map((skill) => (
                    <div key={skill} className="text-cyber-gray text-sm">{skill}</div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-cyber-blue/20 mt-12 pt-8 text-center">
              <p className="text-cyber-gray text-sm">
                © 2024 Sahan Bhasima. All rights reserved. Built with security in mind.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
