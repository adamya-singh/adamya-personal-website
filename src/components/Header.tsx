
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navigation items
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <>
      <div className="scan-line"></div>
      <header 
        className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
          scrolled ? 'bg-cyber-dark/90 backdrop-blur-md py-2 shadow-neon-blue' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/portfolio" className="flex items-center space-x-2">
            <Terminal className="text-cyber-blue" size={20} />
            <span className="text-xl font-bold cyber-title tracking-wider">AS</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyber-blue transition-colors relative group text-sm font-mono uppercase tracking-wider"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-blue transition-all duration-300 group-hover:w-full shadow-neon-blue"></span>
              </a>
            ))}
            <Button 
              className="cyber-button"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              [Resume]
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-cyber-blue hover:text-cyber-teal" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size="icon"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden px-4 py-4 bg-cyber-dark/95 backdrop-blur-lg border-t border-cyber-blue/20 flex flex-col space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyber-blue py-2 transition-colors font-mono uppercase tracking-wider text-sm flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Code size={14} className="text-cyber-blue" />
                <span>[{item.name}]</span>
              </a>
            ))}
            <Button 
              className="cyber-button w-full mt-2"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              [Resume]
            </Button>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
