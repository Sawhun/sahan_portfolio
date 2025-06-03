
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navigation />
      
      <main>
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

      {/* Footer */}
      <footer className="bg-cyber-dark border-t border-cyber-blue/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-cyber-gray">
            © 2024 Sahan Bhasima. Secured by design, built with precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
