
import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Lock, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Cybersecurity Student & Ethical Hacker';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-cyber-electric/10 border border-cyber-electric/20 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-cyber-electric" />
                <span className="text-cyber-electric text-sm font-medium">Cybersecurity Specialist</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-cyber-electric via-cyber-blue to-cyber-green bg-clip-text text-transparent">
                  Sahan Bhasima
                </span>
              </h1>
              
              <div className="h-8">
                <p className="text-xl text-cyber-gray font-mono">
                  {displayText}
                  <span className="animate-ping text-cyber-electric">|</span>
                </p>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Specialized in <span className="text-cyber-electric font-semibold">threat intelligence</span>, 
                <span className="text-cyber-green font-semibold"> SIEM tools</span>, and 
                <span className="text-cyber-purple font-semibold"> penetration testing</span>. 
                Passionate about securing digital infrastructure.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-cyber-electric to-cyber-blue hover:from-cyber-blue hover:to-cyber-electric text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyber-electric/30 hover:scale-105 transform"
              >
                <span className="flex items-center justify-center gap-2">
                  <Terminal className="w-5 h-5" />
                  View My Work
                </span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-cyber-green/50 hover:border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-dark font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 transform"
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a href="mailto:sahanbhasima12@gmail.com" className="group">
                <div className="w-12 h-12 bg-cyber-electric/20 hover:bg-cyber-electric/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-5 h-5 text-cyber-electric" />
                </div>
              </a>
              <a href="https://github.com/sahanbhasima" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-12 h-12 bg-cyber-green/20 hover:bg-cyber-green/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Terminal className="w-5 h-5 text-cyber-green" />
                </div>
              </a>
            </div>
          </div>

          {/* Profile image side */}
          <div className="relative lg:order-2">
            <div className="relative z-10">
              {/* Main profile container */}
              <div className="relative bg-gradient-to-br from-cyber-navy/60 to-cyber-dark/60 backdrop-blur-lg border border-cyber-electric/20 rounded-3xl p-8 shadow-2xl">
                {/* Profile image */}
                <div className="relative mb-6">
                  <div className="w-80 h-96 mx-auto rounded-2xl overflow-hidden border-4 border-cyber-electric/30 shadow-lg shadow-cyber-electric/20">
                    <img 
                      src="/lovable-uploads/17b5b95f-4aaf-43f8-ad79-41b8e83ea733.png" 
                      alt="Sahan Bhasima - Cybersecurity Professional" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  {/* Floating status indicator */}
                  <div className="absolute -bottom-2 -right-2 bg-cyber-green rounded-full p-3 border-4 border-cyber-dark shadow-lg">
                    <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-cyber-dark/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyber-electric">2+</div>
                    <div className="text-sm text-cyber-gray">Years Learning</div>
                  </div>
                  <div className="bg-cyber-dark/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyber-green">6+</div>
                    <div className="text-sm text-cyber-gray">Skills</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyber-electric/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyber-green/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
