
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThreeScene from "@/components/ThreeScene";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Server, Layers, Globe, Star, ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-space-dark text-white">
      <ThreeScene />
      <Header />
      
      <div className="content-container">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto text-center md:text-left">
            <span className="inline-block text-neon-purple mb-4">Hi there, I'm</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-glow">
              Adamya
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0 text-gray-300">
              I build exceptional digital experiences for the web.
              <br />
              Frontend Developer & UI/UX Enthusiast
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <Button 
                size="lg" 
                className="bg-neon-purple hover:bg-neon-purple/90"
              >
                See my work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-neon-blue text-neon-blue hover:bg-neon-blue/20"
              >
                Contact Me
              </Button>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <a href="#about" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left column - Text */}
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 mb-6">
                  Hello! I'm Adamya, a passionate frontend developer with a strong background in creating 
                  modern and interactive web applications. My journey in web development began during my 
                  college years, and since then, I've been constantly learning and improving my skills.
                </p>
                
                <p className="text-lg text-gray-300 mb-6">
                  I specialize in JavaScript frameworks like React and Next.js, and I'm particularly 
                  interested in creating visually appealing interfaces with technologies like Three.js 
                  and WebGL. I believe that a great user experience combines beautiful design with 
                  seamless functionality.
                </p>
                
                <p className="text-lg text-gray-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or enjoying outdoor activities. I'm always open to 
                  new opportunities and challenges!
                </p>
              </div>
              
              {/* Right column - Skills */}
              <div className="md:w-1/3 bg-space rounded-lg p-6 border border-space-light/20">
                <h3 className="text-xl font-bold mb-4 text-neon-purple">
                  Technologies I work with
                </h3>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>JavaScript (ES6+)</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>React</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>Next.js</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>Three.js</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>GraphQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 bg-space-dark">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              <span className="gradient-text">My Skills</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Frontend Development */}
              <Card className="bg-space border-space-light/20 hover:border-neon-purple transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Code className="h-8 w-8 text-neon-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Frontend Development</h3>
                  <p className="text-gray-400 text-center">
                    Building responsive websites with modern frameworks and libraries
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">React</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Next.js</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Vue</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Tailwind</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">SASS</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">TypeScript</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Backend Development */}
              <Card className="bg-space border-space-light/20 hover:border-neon-blue transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Server className="h-8 w-8 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Backend Development</h3>
                  <p className="text-gray-400 text-center">
                    Creating robust server-side applications and APIs
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Node.js</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Express</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">MongoDB</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">GraphQL</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Firebase</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">REST API</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Web Design */}
              <Card className="bg-space border-space-light/20 hover:border-neon-pink transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-neon-pink/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Layers className="h-8 w-8 text-neon-pink" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Web Design</h3>
                  <p className="text-gray-400 text-center">
                    Creating beautiful and functional user interfaces
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Figma</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">UI/UX</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Photoshop</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Prototyping</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Wireframing</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Accessibility</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* 3D & WebGL */}
              <Card className="bg-space border-space-light/20 hover:border-neon-green transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Globe className="h-8 w-8 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">3D & WebGL</h3>
                  <p className="text-gray-400 text-center">
                    Creating immersive 3D experiences for the web
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Three.js</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">React Three Fiber</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">WebGL</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">GLSL</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">3D Modeling</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Animation</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            
            {/* Project 1 */}
            <div className="mb-20">
              <div className="bg-space border border-space-light/20 rounded-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto bg-space-light/20 flex items-center justify-center">
                  <div className="text-6xl text-neon-purple">
                    <Star />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">Project Alpha</h3>
                    <div className="flex space-x-2">
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-neon-purple transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-neon-purple transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6">
                    A feature-rich web application with a 3D interface. Built with 
                    React, Three.js, and Node.js. Includes user authentication, 
                    interactive 3D elements, and real-time data visualization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">React</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Three.js</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Node.js</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">MongoDB</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">WebGL</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="mb-20">
              <div className="bg-space border border-space-light/20 rounded-lg overflow-hidden flex flex-col md:flex-row-reverse">
                <div className="md:w-1/2 h-64 md:h-auto bg-space-light/20 flex items-center justify-center">
                  <div className="text-6xl text-neon-blue">
                    <Layers />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">Project Beta</h3>
                    <div className="flex space-x-2">
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-neon-blue transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-neon-blue transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6">
                    A modern e-commerce platform with advanced filtering, user 
                    authentication, and payment integration. Built with Next.js, 
                    Stripe, and a headless CMS for content management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Next.js</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">TypeScript</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Stripe</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Tailwind CSS</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Contentful</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div>
              <div className="bg-space border border-space-light/20 rounded-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto bg-space-light/20 flex items-center justify-center">
                  <div className="text-6xl text-neon-pink">
                    <Globe />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">Project Gamma</h3>
                    <div className="flex space-x-2">
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-neon-pink transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-neon-pink transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6">
                    An interactive dashboard for data visualization with realtime 
                    updates. Features include customizable widgets, data filtering, 
                    and export capabilities. Built with React, D3.js, and Socket.io.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">React</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">D3.js</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Socket.io</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Express</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4 bg-space-dark">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              <span className="gradient-text">Experience</span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              {/* Job 1 */}
              <div className="mb-12 border-l-2 border-neon-purple pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-purple"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4">
                    <span>TechCorp Inc.</span>
                    <span className="hidden sm:block">•</span>
                    <span>Jan 2023 - Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4">
                  <li>Led the development of a complex web application using React, TypeScript, and GraphQL</li>
                  <li>Implemented 3D data visualization features using Three.js, improving user engagement by 40%</li>
                  <li>Optimized application performance, reducing load time by 60% and improving Lighthouse scores</li>
                  <li>Mentored junior developers and established coding standards for the frontend team</li>
                </ul>
              </div>
              
              {/* Job 2 */}
              <div className="mb-12 border-l-2 border-neon-blue pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-blue"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">Frontend Developer</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4">
                    <span>InnovateSoft</span>
                    <span className="hidden sm:block">•</span>
                    <span>Mar 2020 - Dec 2022</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4">
                  <li>Developed and maintained multiple web applications using Vue.js and Nuxt.js</li>
                  <li>Created responsive user interfaces with SCSS and Tailwind CSS</li>
                  <li>Collaborated with UX designers to implement pixel-perfect designs</li>
                  <li>Integrated RESTful APIs and implemented state management with Vuex</li>
                </ul>
              </div>
              
              {/* Job 3 */}
              <div className="border-l-2 border-neon-pink pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-pink"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">Web Developer Intern</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4">
                    <span>StartupLabs</span>
                    <span className="hidden sm:block">•</span>
                    <span>Jun 2019 - Feb 2020</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4">
                  <li>Assisted in developing websites using HTML, CSS, and JavaScript</li>
                  <li>Built responsive landing pages for marketing campaigns</li>
                  <li>Learned modern frontend frameworks like React and participated in code reviews</li>
                  <li>Created interactive prototypes for client presentations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="gradient-text">Get In Touch</span>
              </h2>
              
              <p className="text-lg text-gray-300 text-center mb-8">
                I'm currently open to new opportunities and would love to hear from you. 
                Whether you have a project in mind, a question about my work, or just 
                want to say hello, feel free to reach out!
              </p>
              
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-neon-purple hover:bg-neon-purple/90"
                  onClick={() => window.location.href = 'mailto:hello@adamya.xyz'}
                >
                  Say Hello
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
