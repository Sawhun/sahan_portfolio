
import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Lock } from 'lucide-react';

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
    <section className="min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-navy to-cyber-dark cyber-grid flex items-center justify-center relative overflow-hidden">
      {/* Floating icons */}
      <div className="absolute inset-0">
        <Shield className="absolute top-20 left-20 w-8 h-8 text-cyber-electric/30 animate-pulse hidden md:block" />
        <Terminal className="absolute top-40 right-32 w-6 h-6 text-cyber-green/40 animate-pulse delay-1000 hidden md:block" />
        <Lock className="absolute bottom-32 left-32 w-7 h-7 text-cyber-purple/30 animate-pulse delay-500 hidden md:block" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            Sahan <span className="text-cyber-electric">Bhasima</span>
          </h1>
          
          <div className="h-12 sm:h-16 mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-cyber-gray font-mono">
              {displayText}
              <span className="animate-ping text-cyber-electric">|</span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Specialized in threat intelligence, SIEM tools, and penetration testing. 
            Passionate about defending digital infrastructure and uncovering vulnerabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-cyber-electric hover:bg-cyber-blue text-cyber-dark font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyber-electric/50 hover:scale-105 transform"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-dark font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
