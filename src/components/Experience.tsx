import React, { useEffect, useState, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const jobs: Job[] = [
    {
      title: "Junior Backend Developer",
      company: "VIPI Transiport",
      period: "Sept 2022 - Present",
      location: "Kigali, Rwanda",
      responsibilities: [
        "Developing and maintaining RESTful APIs using Node.js and Express",
        "Designing and optimizing database schemas in MongoDB and PostgreSQL",
        "Collaborating with frontend developers to integrate backend services",
        "Implementing authentication and authorization using JWT and Session",
        "Writing comprehensive unit and integration tests",
        "Participating in code reviews and providing constructive feedback"
      ]
    },
    {
      title: "Backend Development Intern",
      company: "Binary Hub",
      period: "Jan 2022 - Aug 2022",
      location: "Kigali, Rwanda",
      responsibilities: [
        "Assisted in developing API endpoints using Node.js and Express",
        "Created and maintained database schemas and models",
        "Debugged and fixed backend issues in existing applications",
        "Implemented input validation and error handling for API endpoints",
        "Collaborated with senior developers on improving code quality"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              My professional journey as a backend developer, showcasing my growth and contributions.
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row mb-12 relative ${
                  isVisible 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`}
                style={{ transition: 'opacity 0.6s ease-out', transitionDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md z-10"></div>
                
                {/* Left side (for desktop) or top (for mobile) */}
                <div className={`md:w-1/2 md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-last md:text-left md:pl-12 md:pr-0'}`}>
                  <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">{job.company}</h4>
                    
                    <div className="flex items-center text-gray-600 text-sm mb-4 md:justify-end">
                      <Calendar size={16} className="mr-1" />
                      <span>{job.period}</span>
                      <span className="mx-2">•</span>
                      <MapPin size={16} className="mr-1" />
                      <span>{job.location}</span>
                    </div>
                    
                    <ul className={`space-y-2 text-gray-700 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right side empty div for layout (desktop only) */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:order-last' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;