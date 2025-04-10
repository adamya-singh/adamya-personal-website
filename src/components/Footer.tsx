import { Github, Linkedin, Mail, Terminal, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <Terminal className="text-cyber-blue" size={18} />
              <h2 className="cyber-title text-xl">Adamya Singh</h2>
            </div>
            <p className="text-gray-400 mt-2 font-mono text-xs">
              Computer Science & Data Science @ Rutgers University
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/adamya-singh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-blue transition-colors p-2 border border-gray-800 hover:border-cyber-blue/50 rounded-sm"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/adamya-singh-0a8746184/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-teal transition-colors p-2 border border-gray-800 hover:border-cyber-teal/50 rounded-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:adamya.singh@rutgers.edu" 
              className="text-gray-400 hover:text-cyber-green transition-colors p-2 border border-gray-800 hover:border-cyber-green/50 rounded-sm"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs font-mono">
            <span className="text-cyber-blue">// </span>
            © {new Date().getFullYear()} Adamya Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
