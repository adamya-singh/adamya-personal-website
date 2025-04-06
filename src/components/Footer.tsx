
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-space-dark border-t border-space-light/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text">Adamya Singh</h2>
            <p className="text-gray-400 mt-2">
              Computer Science & Data Science @ Rutgers University
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors p-2"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/adamya-singh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:adamya.singh@rutgers.edu" 
              className="text-gray-400 hover:text-neon-pink transition-colors p-2"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Adamya Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
