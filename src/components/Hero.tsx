import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Backend Developer';
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        timer = setTimeout(typeText, 100);
      } else {
        setIsComplete(true);
      }
    };

    timer = setTimeout(typeText, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 font-medium mb-2 opacity-0 animate-fade-in">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-gray-900 opacity-0 animate-slide-up">
            Ruyanga Merci
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-gray-700 mb-8 h-10">
            <span className="relative">
              <span className="inline-block">{displayText}</span>
              {!isComplete && <span className="inline-block w-1 h-8 bg-blue-600 ml-1 animate-blink"></span>}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-10 opacity-0 animate-fade-in-delayed">
            Detail-oriented and dedicated backend developer passionate about creating robust, 
            scalable solutions for complex technical challenges.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delayed-more">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;