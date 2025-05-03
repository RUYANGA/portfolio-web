import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              Ruyanga<span className="text-blue-400 font-light">Merci</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Backend developer focused on creating efficient and scalable solutions
              for complex technical challenges.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-4 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            
            <p className="text-gray-400 text-sm flex items-center">
              © {currentYear} Made with <Heart size={14} className="mx-1 text-red-500" /> by Ruyanga Merci
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/RUYANGA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/ruyanga-merci-bab343307/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:ruyangam15@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies</h3>
            <ul className="space-y-2">
              {['Node.js', 'Express', 'MongoDB', 'TypeScript', 'RESTful APIs'].map((item) => (
                <li key={item} className="text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Available For</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Full-time Positions</li>
              <li className="text-gray-400">Freelance Work</li>
              <li className="text-gray-400">Consulting</li>
              <li className="text-gray-400">Collaborations</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;