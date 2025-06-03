
import React from 'react';
import { Scan, Shield, Monitor, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Port Scanner with Banner Grabbing',
      description: 'Advanced network reconnaissance tool built in Python that performs comprehensive port scanning and banner grabbing for security assessment.',
      tech: ['Python', 'Socket Programming', 'Network Protocols'],
      icon: Scan,
      color: 'cyber-electric'
    },
    {
      title: 'Basic SOC Analyst Toolkit',
      description: 'Comprehensive toolkit for Security Operations Center analysts featuring automated threat detection and incident response capabilities.',
      tech: ['Python', 'Threat Intelligence', 'Log Analysis'],
      icon: Shield,
      color: 'cyber-green'
    },
    {
      title: 'Simple SIEM Dashboard (Simulated)',
      description: 'Simulated Security Information and Event Management dashboard with real-time monitoring and alert correlation features.',
      tech: ['Splunk', 'Dashboard Design', 'Event Correlation'],
      icon: Monitor,
      color: 'cyber-purple'
    }
  ];

  return (
    <section className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-cyber-gray text-lg">Cybersecurity tools and solutions I've developed</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="bg-cyber-navy/50 backdrop-blur-sm p-8 rounded-xl border border-cyber-blue/20 hover:border-cyber-electric/50 transition-all duration-300 group hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`p-4 rounded-lg bg-${project.color}/20 group-hover:bg-${project.color}/30 transition-colors w-fit mb-6`}>
                  <IconComponent className={`w-8 h-8 text-${project.color}`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyber-electric transition-colors">
                  {project.title}
                </h3>

                <p className="text-cyber-gray mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyber-blue/20 text-cyber-electric text-sm rounded-full border border-cyber-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-cyber-electric hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-cyber-green hover:text-white transition-colors">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
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
