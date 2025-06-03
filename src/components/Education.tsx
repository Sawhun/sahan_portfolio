
import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'BSc (Hons) Ethical Hacking and Cybersecurity',
      institution: 'Softwarica College of IT and E-commerce',
      period: 'Mar 2023 - Present',
      location: 'Kathmandu',
      type: 'education',
      status: 'In Progress'
    },
    {
      degree: '+2 Physics',
      institution: 'Everest Secondary Higher School',
      period: 'Aug 2020 - Sep 2022',
      location: 'Bhaktapur',
      type: 'education',
      status: 'Completed'
    },
    {
      degree: 'Employee Cybersecurity Awareness First Line of Defense',
      institution: 'CyberProStudy Ltd',
      period: '2023',
      location: 'Online',
      type: 'certification',
      status: 'Certified'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-cyber-navy">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <p className="text-cyber-gray text-base sm:text-lg">Academic background and professional development</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-electric via-cyber-green to-cyber-purple hidden sm:block"></div>

            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start mb-8 sm:mb-12 group"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full ${
                  item.type === 'education' ? 'bg-cyber-electric/20 border-2 border-cyber-electric' : 'bg-cyber-green/20 border-2 border-cyber-green'
                } group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  {item.type === 'education' ? (
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-electric" />
                  ) : (
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-green" />
                  )}
                </div>

                {/* Content */}
                <div className="ml-4 sm:ml-8 flex-1 bg-cyber-dark/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-cyber-blue/20 hover:border-cyber-electric/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-0 group-hover:text-cyber-electric transition-colors">
                      {item.degree}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'In Progress' ? 'bg-cyber-blue/20 text-cyber-blue' :
                      item.status === 'Completed' ? 'bg-cyber-green/20 text-cyber-green' :
                      'bg-cyber-purple/20 text-cyber-purple'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <p className="text-cyber-electric font-medium mb-3 text-sm sm:text-base">{item.institution}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 text-cyber-gray text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyber-gray text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
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
