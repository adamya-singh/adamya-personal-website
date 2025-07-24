import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/90 backdrop-blur-sm border-b border-cyber-blue/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cyber-blue/20 border border-cyber-blue/50 flex items-center justify-center">
              <span className="text-cyber-blue font-mono text-sm font-bold">AS</span>
            </div>
            <span className="text-white font-mono text-lg">ADAMYA.SINGH</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-cyber-blue transition-colors font-mono text-sm">
              [ABOUT]
            </a>
            <a href="#skills" className="text-gray-300 hover:text-cyber-blue transition-colors font-mono text-sm">
              [SKILLS]
            </a>
            <a href="#projects" className="text-gray-300 hover:text-cyber-blue transition-colors font-mono text-sm">
              [PROJECTS]
            </a>
            <a href="#experience" className="text-gray-300 hover:text-cyber-blue transition-colors font-mono text-sm">
              [EXPERIENCE]
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyber-blue transition-colors font-mono text-sm">
              [CONTACT]
            </a>
          </div>
          
          <div className="md:hidden">
            <button className="text-cyber-blue font-mono text-sm">
              [MENU]
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;