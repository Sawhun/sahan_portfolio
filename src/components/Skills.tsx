
import React from 'react';
import { Shield, Database, Terminal, Network, Search, Bug } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Cyber Threat Intelligence', level: 85, icon: Search, color: 'cyber-electric' },
    { name: 'SIEM Tools (Splunk)', level: 80, icon: Database, color: 'cyber-green' },
    { name: 'IDS/IPS', level: 75, icon: Shield, color: 'cyber-purple' },
    { name: 'Linux', level: 90, icon: Terminal, color: 'cyber-blue' },
    { name: 'Python Scripting', level: 85, icon: Bug, color: 'cyber-electric' },
    { name: 'Network Security', level: 80, icon: Network, color: 'cyber-green' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-cyber-navy">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-cyber-gray text-base sm:text-lg">Expertise across cybersecurity domains</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-cyber-dark/50 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20 hover:border-cyber-electric/50 transition-all duration-300 group hover:scale-105 transform"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-${skill.color}/20 group-hover:bg-${skill.color}/30 transition-colors`}>
                    <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 text-${skill.color}`} />
                  </div>
                  <h3 className="text-white font-semibold ml-4 text-sm sm:text-base">{skill.name}</h3>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-cyber-dark rounded-full h-3">
                    <div
                      className={`bg-gradient-to-r from-${skill.color} to-${skill.color}/70 h-3 rounded-full skill-bar transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-cyber-gray text-sm mt-2 block text-right">{skill.level}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
