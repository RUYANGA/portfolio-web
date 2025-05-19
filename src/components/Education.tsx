import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Award, BookOpen } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialLink?: string;
}

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const education: Education[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Rwanda",
      period: "",
      description: "Graduated with honors, specializing in software engineering. Completed coursework in data structures, algorithms, database systems, and web development."
    }
  ];

  const certifications: Certification[] = [
    {
      name: "Legacy JavaScript Algorithms and Data Structures",
      issuer: "Legacy JavaScript Algorithms and Data Structures refers to implementing classical data structures and algorithms using pre-ES6 JavaScript (i.e., before features like class, let, const, arrow functions, etc.).",
      date: "May 2023",
      credentialLink: "https://www.freecodecamp.org/certification/fcc45215ff5-43ea-4b51-9a74-5a71825de1a8/javascript-algorithms-and-data-structures"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "Jan 2023",
      credentialLink: "#"
    },
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "Aug 2022",
      credentialLink: "#"
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
    <section id="education" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              My academic background and professional certifications that have shaped my expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div 
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen size={24} className="text-blue-600 mr-2" />
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                    <h5 className="text-lg text-blue-600 mb-2">{edu.institution}</h5>
                    
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <Calendar size={16} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    
                    <p className="text-gray-700">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div 
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award size={24} className="text-blue-600 mr-2" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 transition-all hover:shadow-lg"
                    style={{ transitionDelay: `${200 + (index * 100)}ms` }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-600">{cert.issuer}</span>
                      <span className="text-sm text-gray-500">{cert.date}</span>
                    </div>
                    {cert.credentialLink && (
                      <div className="mt-3">
                        <a 
                          href={cert.credentialLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 text-sm font-medium hover:text-blue-800 transition"
                        >
                          View Credential →
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-5 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                <p className="text-gray-700">
                  I am committed to continuous learning and regularly take courses to expand my knowledge and
                  stay current with the latest technologies and best practices in backend development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;