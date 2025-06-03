
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

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-navy to-cyber-dark cyber-grid flex items-center justify-center relative overflow-hidden">
      {/* Floating icons */}
      <div className="absolute inset-0">
        <Shield className="absolute top-20 left-20 w-8 h-8 text-cyber-electric/30 animate-pulse" />
        <Terminal className="absolute top-40 right-32 w-6 h-6 text-cyber-green/40 animate-pulse delay-1000" />
        <Lock className="absolute bottom-32 left-32 w-7 h-7 text-cyber-purple/30 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Sahan <span className="text-cyber-electric">Bhasima</span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-cyber-gray font-mono">
              {displayText}
              <span className="animate-ping text-cyber-electric">|</span>
            </p>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Specialized in threat intelligence, SIEM tools, and penetration testing. 
            Passionate about defending digital infrastructure and uncovering vulnerabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyber-electric hover:bg-cyber-blue text-cyber-dark font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyber-electric/50 animate-glow">
              View Projects
            </button>
            <button className="border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-dark font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
