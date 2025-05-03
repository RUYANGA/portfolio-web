import React from 'react';
import { CheckCircle, Calendar, MapPin, Mail, Github } from 'lucide-react';
import profileImageUrl from '../../.bolt/WhatsApp Image 2025-05-03 at 18.43.22.jpeg'

const About: React.FC = () => {

  
  const keyPoints = [
    'Backend development specialist with focus on RESTful APIs',
    'Experience with Node.js, Express,TypeScript,PostgreSQL and MongoDB',
    'Skilled in application architecture and database design',
    'Committed to writing clean, maintainable, and well-tested code'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative">
                <div className="w-full h-full absolute -top-3 -left-3 border-2 border-blue-600 rounded-lg"></div>
                <img 
                  src={profileImageUrl} 
                  alt="Ruyanga Merci" 
                  className="w-full rounded-lg shadow-lg relative z-10 object-cover aspect-square"
                />
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar size={16} className="text-blue-600" />
                  <span>Available for new opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={16} className="text-blue-600" />
                  <span>Kigali, Rwanda</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={16} className="text-blue-600" />
                  <a href="mailto:ruyangam15@gmail.com" className="hover:text-blue-600 transition">
                    ruyangam15@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Github size={16} className="text-blue-600" />
                  <a href="https://github.com/RUYANGA" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                    github.com/RUYANGA
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I am a detail-oriented backend developer with a passion for creating robust, efficient, and 
                scalable web applications. Experienced in designing APIs, optimizing database performance, 
                and implementing security best practices. I thrive in collaborative environments where I can 
                contribute my technical expertise to solve complex challenges and deliver high-quality solutions.
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;