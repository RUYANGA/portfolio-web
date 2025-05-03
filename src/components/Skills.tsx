import React, { useEffect, useState, useRef } from 'react';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 0 to 100
  }[];
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 65 }
      ]
    },
    {
      category: 'Backend Frameworks',
      items: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Django', level: 70 },
        { name: 'Flask', level: 65 }
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Redis', level: 60 }
      ]
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD', level: 65 },
        { name: 'AWS', level: 60 }
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
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and competencies developed throughout my career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {skills.map((skillGroup, groupIndex) => (
              <div 
                key={groupIndex} 
                className={`bg-white p-6 rounded-lg shadow-md transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : `opacity-0 ${groupIndex % 2 === 0 ? 'translate-y-10' : 'translate-y-20'}`
                }`}
                style={{ transitionDelay: `${groupIndex * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-5">{skillGroup.category}</h3>
                <div className="space-y-5">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%', 
                            transitionDelay: `${(groupIndex * 150) + (skillIndex * 100)}ms` 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'RESTful APIs', 'Microservices', 'Authentication', 'Unit Testing',
                'API Documentation', 'Debugging', 'Performance Optimization', 'Database Design',
                'ORM', 'JWT', 'Agile Methodology', 'Code Review'
              ].map((skill, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 shadow-sm transition-all duration-700 transform ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + (index * 50)}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;