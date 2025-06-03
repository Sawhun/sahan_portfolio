
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'BSc (Hons) Ethical Hacking and Cybersecurity',
      institution: 'Softwarica College of IT and E-commerce',
      period: 'Mar 2023 - Present',
      location: 'Kathmandu',
      type: 'education'
    },
    {
      degree: '+2 Physics',
      institution: 'Everest Secondary Higher School',
      period: 'Aug 2020 - Sep 2022',
      location: 'Bhaktapur',
      type: 'education'
    },
    {
      degree: 'Employee Cybersecurity Awareness First Line of Defense',
      institution: 'CyberProStudy Ltd',
      period: '2023',
      location: 'Online',
      type: 'certification'
    }
  ];

  return (
    <section className="py-20 bg-cyber-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <p className="text-cyber-gray text-lg">Academic background and professional development</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-electric via-cyber-green to-cyber-purple"></div>

            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 group"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${
                  item.type === 'education' ? 'bg-cyber-electric/20 border-2 border-cyber-electric' : 'bg-cyber-green/20 border-2 border-cyber-green'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {item.type === 'education' ? (
                    <GraduationCap className="w-6 h-6 text-cyber-electric" />
                  ) : (
                    <Award className="w-6 h-6 text-cyber-green" />
                  )}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1 bg-cyber-dark/50 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20 hover:border-cyber-electric/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-electric transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-cyber-electric font-medium mb-2">{item.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-cyber-gray">
                    <span className="bg-cyber-blue/20 px-3 py-1 rounded-full text-sm">{item.period}</span>
                    <span className="bg-cyber-purple/20 px-3 py-1 rounded-full text-sm">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
