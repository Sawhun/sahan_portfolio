
import React from 'react';
import { Scan, Shield, Monitor, Github, Eye, ExternalLink, Code, Terminal } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Advanced Port Scanner',
      subtitle: 'Network Reconnaissance Tool',
      description: 'Sophisticated Python-based port scanning utility with banner grabbing capabilities, multi-threading support, and comprehensive reporting.',
      features: ['Multi-threaded scanning', 'Banner grabbing', 'Stealth mode', 'Report generation'],
      tech: ['Python', 'Socket Programming', 'Threading', 'Network Protocols'],
      icon: Scan,
      color: 'cyber-electric',
      github: '#',
      demo: '#',
      featured: true,
      status: 'Completed'
    },
    {
      id: 2,
      title: 'SOC Analyst Dashboard',
      subtitle: 'Security Operations Toolkit',
      description: 'Comprehensive toolkit for Security Operations Center analysts with automated threat detection and incident response workflows.',
      features: ['Real-time monitoring', 'Threat correlation', 'Automated alerts', 'Incident tracking'],
      tech: ['Python', 'Threat Intelligence', 'API Integration', 'Dashboard Design'],
      icon: Shield,
      color: 'cyber-green',
      github: '#',
      demo: '#',
      featured: true,
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'SIEM Visualization Platform',
      subtitle: 'Security Event Management',
      description: 'Interactive SIEM dashboard simulation with real-time event correlation, threat visualization, and automated alerting.',
      features: ['Event correlation', 'Visual analytics', 'Custom dashboards', 'Alert management'],
      tech: ['Splunk', 'Data Visualization', 'Event Processing', 'Security Analytics'],
      icon: Monitor,
      color: 'cyber-purple',
      github: '#',
      demo: '#',
      featured: false,
      status: 'Completed'
    }
  ];

  const handleProjectAction = (url: string, action: string) => {
    if (url === '#') {
      alert(`${action} functionality will be available soon. Please check back later or contact me for more information.`);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-cyber-navy/30 to-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-cyber-green/10 border border-cyber-green/20 rounded-full px-6 py-2 mb-6">
            <Code className="w-4 h-4 text-cyber-green" />
            <span className="text-cyber-green text-sm font-medium">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="text-cyber-green">Projects</span>
          </h2>
          <p className="text-xl text-cyber-gray max-w-3xl mx-auto leading-relaxed">
            Cybersecurity tools and solutions demonstrating practical skills in threat detection, security analysis, and system protection
          </p>
        </div>

        {/* Featured projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => {
              const IconComponent = project.icon;
              const isReversed = index % 2 === 1;
              
              return (
                <div 
                  key={project.id}
                  className={`group ${isReversed ? 'lg:mt-12' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-gradient-to-br from-cyber-dark/60 to-cyber-navy/40 backdrop-blur-lg border border-cyber-blue/20 rounded-3xl p-8 hover:border-cyber-electric/40 transition-all duration-500 hover:transform hover:scale-105 h-full">
                    {/* Project header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 bg-${project.color}/20 rounded-2xl flex items-center justify-center group-hover:bg-${project.color}/30 transition-colors`}>
                          <IconComponent className={`w-7 h-7 text-${project.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyber-electric transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-cyber-gray text-sm">{project.subtitle}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-cyber-green/20 text-cyber-green' 
                          : 'bg-cyber-blue/20 text-cyber-blue'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Project description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full`}></div>
                            <span className="text-cyber-gray text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-cyber-blue/20 text-cyber-electric text-xs rounded-full border border-cyber-blue/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4">
                      <button 
                        onClick={() => handleProjectAction(project.github, 'GitHub')}
                        className="flex items-center gap-2 text-cyber-electric hover:text-white transition-colors hover:scale-105 transform"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Source Code</span>
                      </button>
                      <button 
                        onClick={() => handleProjectAction(project.demo, 'Demo')}
                        className="flex items-center gap-2 text-cyber-green hover:text-white transition-colors hover:scale-105 transform"
                      >
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => !project.featured).map((project, index) => {
            const IconComponent = project.icon;
            
            return (
              <div 
                key={project.id}
                className="bg-cyber-dark/40 backdrop-blur-sm border border-cyber-blue/20 rounded-2xl p-6 hover:border-cyber-electric/40 transition-all duration-300 group hover:transform hover:scale-105"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-${project.color}/20 rounded-lg flex items-center justify-center group-hover:bg-${project.color}/30 transition-colors`}>
                    <IconComponent className={`w-5 h-5 text-${project.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyber-electric transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-cyber-gray text-sm">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyber-blue/20 text-cyber-electric text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => handleProjectAction(project.github, 'GitHub')}
                    className="flex items-center gap-1 text-cyber-electric hover:text-white transition-colors text-sm"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </button>
                  <button 
                    onClick={() => handleProjectAction(project.demo, 'Demo')}
                    className="flex items-center gap-1 text-cyber-green hover:text-white transition-colors text-sm"
                  >
                    <Eye className="w-3 h-3" />
                    Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
