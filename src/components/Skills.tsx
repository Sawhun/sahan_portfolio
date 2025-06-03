
import React from 'react';
import { Shield, Database, Terminal, Network, Search, Bug, Award, Zap } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Security Analysis',
      icon: Shield,
      color: 'cyber-electric',
      skills: [
        { name: 'Cyber Threat Intelligence', level: 85, description: 'Advanced threat detection and analysis' },
        { name: 'Vulnerability Assessment', level: 80, description: 'Comprehensive security auditing' },
        { name: 'Risk Analysis', level: 75, description: 'Security risk evaluation and mitigation' },
      ]
    },
    {
      category: 'Security Tools',
      icon: Database,
      color: 'cyber-green',
      skills: [
        { name: 'SIEM Tools (Splunk)', level: 80, description: 'Security information and event management' },
        { name: 'IDS/IPS Systems', level: 75, description: 'Intrusion detection and prevention' },
        { name: 'Security Scanners', level: 70, description: 'Automated vulnerability scanning' },
      ]
    },
    {
      category: 'Technical Expertise',
      icon: Terminal,
      color: 'cyber-purple',
      skills: [
        { name: 'Linux Administration', level: 90, description: 'Advanced Linux system management' },
        { name: 'Python Scripting', level: 85, description: 'Security automation and tooling' },
        { name: 'Network Security', level: 80, description: 'Network protocol analysis and hardening' },
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-cyber-navy/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-cyber-electric/10 border border-cyber-electric/20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-cyber-electric" />
            <span className="text-cyber-electric text-sm font-medium">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-cyber-electric">Expertise</span>
          </h2>
          <p className="text-xl text-cyber-gray max-w-3xl mx-auto leading-relaxed">
            Comprehensive cybersecurity expertise across threat intelligence, security tools, and technical implementation
          </p>
        </div>

        {/* Skills grid with alternating layout */}
        <div className="space-y-20">
          {skillsData.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const isReversed = categoryIndex % 2 === 1;
            
            return (
              <div key={category.category} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Category info */}
                <div className={`space-y-6 ${isReversed ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-${category.color}/20 rounded-2xl flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                      <p className="text-cyber-gray">Professional competencies</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {category.category === 'Security Analysis' && 'Advanced capabilities in threat detection, vulnerability assessment, and comprehensive security analysis.'}
                    {category.category === 'Security Tools' && 'Proficient in industry-standard security tools and platforms for monitoring and incident response.'}
                    {category.category === 'Technical Expertise' && 'Strong foundation in systems administration, scripting, and network security protocols.'}
                  </p>
                </div>

                {/* Skills list */}
                <div className={`space-y-6 ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="bg-cyber-dark/40 backdrop-blur-sm border border-cyber-blue/20 rounded-2xl p-6 hover:border-cyber-electric/30 transition-all duration-300 group"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-lg group-hover:text-cyber-electric transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-cyber-gray text-sm mt-1">{skill.description}</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-2xl font-bold text-${category.color}`}>{skill.level}%</span>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-cyber-dark rounded-full h-3">
                          <div
                            className={`bg-gradient-to-r from-${category.color} to-${category.color}/60 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Certifications & <span className="text-cyber-green">Recognition</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyber-green/10 to-cyber-green/5 border border-cyber-green/20 rounded-2xl p-8 hover:border-cyber-green/40 transition-all duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 bg-cyber-green/20 rounded-2xl mx-auto mb-6 group-hover:bg-cyber-green/30 transition-colors">
                <Award className="w-8 h-8 text-cyber-green" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-green transition-colors">
                Cybersecurity Awareness
              </h4>
              <p className="text-cyber-gray mb-2">CyberProStudy Ltd</p>
              <p className="text-cyber-green font-semibold">2023</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyber-blue/10 to-cyber-blue/5 border border-cyber-blue/20 rounded-2xl p-8 hover:border-cyber-blue/40 transition-all duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 bg-cyber-blue/20 rounded-2xl mx-auto mb-6 group-hover:bg-cyber-blue/30 transition-colors">
                <Shield className="w-8 h-8 text-cyber-blue" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                Ethical Hacking Degree
              </h4>
              <p className="text-cyber-gray mb-2">In Progress</p>
              <p className="text-cyber-blue font-semibold">2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
