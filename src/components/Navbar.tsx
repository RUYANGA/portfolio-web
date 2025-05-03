import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  scrollY: number;
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollY, isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'experience', text: 'Experience' },
    { id: 'education', text: 'Education' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50 
        ? 'bg-white dark:bg-gray-800 shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600 flex items-center">
          Merci
          <span className="text-gray-900 dark:text-gray-100 font-light ml-1">RUYANGA</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition duration-300 ${
                activeSection === link.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {link.text}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://github.com/RUYANGA" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <GitHub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ruyanga-merci-bab343307/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ruyangam15@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Mail size={20} />
            </a>
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>
          
          <button className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base py-2 ${
                  activeSection === link.id
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.text}
              </a>
            ))}
            <div className="flex items-center space-x-4 py-2">
              <a href="https://github.com/RUYANGA" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <GitHub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ruyanga-merci-bab343307/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ruyangam15@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <Mail size={20} />
              </a>
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;