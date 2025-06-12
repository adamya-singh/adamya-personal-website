import React from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ThreeScene from "@/components/ThreeScene";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Server, Layers, Globe, ExternalLink, Github, Terminal, Database, Cpu, Zap } from "lucide-react";

const Portfolio = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const handleCopyEmail = () => {
    const email = 'adamya.singh@rutgers.edu';
    navigator.clipboard.writeText(email).then(() => {
      toast.success('Email copied to clipboard!', {
        description: email,
      });
    }).catch((err) => {
      toast.error('Failed to copy email');
    });
  };

  return <div className="min-h-screen bg-cyber-dark text-white overflow-hidden">
      <div className="scan-line opacity-30"></div>
      <ThreeScene />
      <Header />
      
      <div className="content-container">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto text-center md:text-left">
            <div className="inline-block mb-4 border border-cyber-blue/30 px-3 py-1 text-xs font-mono text-cyber-blue">
              <span className="mr-1">$</span>
              <span className="typing-animation">user.identify</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-title tracking-tight">
              ADAMYA SINGH
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0 text-gray-300 font-mono">
              <span className="text-cyber-blue">&gt;</span> Computer Science & Data Science Student<br />
              <span className="text-cyber-green">&gt;</span> Full-stack Developer & AI Researcher
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <Button className="cyber-button" onClick={() => document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                [View_Projects]
              </Button>
              <Button variant="outline" className="cyber-button" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                [Contact_Me]
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
              <h2 className="text-3xl md:text-4xl font-bold mx-4 cyber-title tracking-tight">
                ABOUT ME
              </h2>
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left column - Text */}
              <div className="md:w-2/3">
                <div className="cyber-card p-6 bg-cyber-dark/50">
                  <p className="text-lg text-gray-300 mb-6 font-mono leading-relaxed">
                    <span className="text-cyber-blue">$</span> I'm a Computer Science and Data Science student at Rutgers University with a passion for 
                    full-stack development and artificial intelligence. I'm driven by a love for problem solving and am always eager to learn new technologies.
                  </p>
                  
                  <p className="text-lg text-gray-300 mb-6 font-mono leading-relaxed">
                    <span className="text-cyber-blue">$</span> Currently, I'm working as an Undergraduate Research Assistant under Professor Ruxiang Tang, 
                    where I develop benchmarks to evaluate model performance on negation-sensitive tasks and 
                    enhance negation comprehension in vision-language models for medical imaging.
                  </p>
                  
                  <p className="text-lg text-gray-300 font-mono leading-relaxed">
                    <span className="text-cyber-blue">$</span> When I'm not coding or researching, I'm actively involved in the Undergraduate Student 
                    Alliance of Computer Scientists at Rutgers, where I serve as a Tech Team and Executive 
                    Board Member. I'm also proud to have achieved the rank of Eagle Scout and to have been 
                    recognized on the Dean's list.
                  </p>
                </div>
              </div>
              
              {/* Right column - Skills */}
              <div className="md:w-1/3">
                <div className="cyber-card p-6 bg-cyber-dark/50">
                  <div className="flex items-center space-x-2 mb-4">
                    <Terminal className="text-cyber-blue" size={18} />
                    <h3 className="text-xl font-bold cyber-title tracking-tight">
                      TECH STACK
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2 p-2 border border-cyber-blue/10 bg-cyber-blue/5">
                      <span className="text-cyber-blue">&gt;</span>
                      <span className="font-mono text-sm">Python</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border border-cyber-blue/10 bg-cyber-blue/5">
                      <span className="text-cyber-blue">&gt;</span>
                      <span className="font-mono text-sm">JavaScript/TS</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border border-cyber-blue/10 bg-cyber-blue/5">
                      <span className="text-cyber-blue">&gt;</span>
                      <span className="font-mono text-sm">React</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border border-cyber-blue/10 bg-cyber-blue/5">
                      <span className="text-cyber-blue">&gt;</span>
                      <span className="font-mono text-sm">Java</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border border-cyber-blue/10 bg-cyber-blue/5">
                      <span className="text-cyber-blue">&gt;</span>
                      <span className="font-mono text-sm">Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border border-cyber-blue/10 bg-cyber-blue/5">
                      <span className="text-cyber-blue">&gt;</span>
                      <span className="font-mono text-sm">Spring Boot</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border border-cyber-blue/10 bg-cyber-blue/5">
                      <span className="text-cyber-blue">&gt;</span>
                      <span className="font-mono text-sm">MongoDB</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border border-cyber-blue/10 bg-cyber-blue/5">
                      <span className="text-cyber-blue">&gt;</span>
                      <span className="font-mono text-sm">TensorFlow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-cyber-dark/80">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
              <h2 className="text-3xl md:text-4xl font-bold mx-4 cyber-title tracking-tight">
                SKILLSET
              </h2>
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Frontend Development */}
              <Card className="cyber-card border-cyber-blue/20 hover:shadow-neon-blue transition-all duration-300 bg-cyber-dark/50">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-cyber-blue/30">
                    <Code className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center font-mono text-cyber-blue tracking-tight">FRONTEND</h3>
                  <p className="text-gray-400 text-center text-sm mb-4">
                    Building responsive and interactive web applications
                  </p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">React</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">Next.js</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">JavaScript</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">TypeScript</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">HTML/CSS</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">Responsive</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Backend Development */}
              <Card className="cyber-card border-cyber-blue/20 hover:shadow-neon-blue transition-all duration-300 bg-cyber-dark/50">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-cyber-blue/30">
                    <Server className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center font-mono text-cyber-blue tracking-tight">BACKEND</h3>
                  <p className="text-gray-400 text-center text-sm mb-4">
                    Building robust server-side applications and APIs
                  </p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">Java</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">Spring Boot</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">Node.js</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">MongoDB</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">SQL</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">REST APIs</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Data Science */}
              <Card className="cyber-card border-cyber-blue/20 hover:shadow-neon-blue transition-all duration-300 bg-cyber-dark/50">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-cyber-blue/30">
                    <Database className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center font-mono text-cyber-blue tracking-tight">DATA SCIENCE</h3>
                  <p className="text-gray-400 text-center text-sm mb-4">
                    Analyzing and interpreting complex data sets
                  </p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">Python</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">R</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">TensorFlow</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">PyTorch</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">Tableau</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[80px]">ML</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* AI Research */}
              <Card className="cyber-card border-cyber-blue/20 hover:shadow-neon-blue transition-all duration-300 bg-cyber-dark/50">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-cyber-blue/30">
                    <Cpu className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center font-mono text-cyber-blue tracking-tight">AI RESEARCH</h3>
                  <p className="text-gray-400 text-center text-sm mb-4">
                    Exploring and developing AI solutions
                  </p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[90px]">HuggingFace</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[90px]">LangChain</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[90px]">Ollama</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[90px]">Deep Learning</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[90px]">RAG</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono truncate max-w-[90px]">NLP</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
              <h2 className="text-3xl md:text-4xl font-bold mx-4 cyber-title tracking-tight">
                PROJECTS
              </h2>
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
            </div>
            
            {/* Project 1 - LevelUp */}
            <div className="mb-20">
              <div className="cyber-card overflow-hidden flex flex-col md:flex-row bg-cyber-dark/50">
                <div className="md:w-1/2 h-64 md:h-auto bg-cyber-blue/10 flex items-center justify-center relative overflow-hidden">
                  <div className="cyber-grid absolute inset-0 opacity-20"></div>
                  <img 
                    src="https://raw.githubusercontent.com/adamya-singh/levelup/main/assets/demo.gif" 
                    alt="LevelUp Demo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 font-mono text-xs text-cyber-blue">01</div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold cyber-title tracking-tight">LEVELUP</h3>
                    <div className="flex space-x-2">
                      <a href="https://github.com/adamya-singh/levelup" className="text-gray-400 hover:text-cyber-blue transition-colors border border-gray-700 hover:border-cyber-blue/50 p-2 rounded-sm" aria-label="GitHub Repository">
                        <Github size={18} />
                      </a>
                      <a href="https://raw.githubusercontent.com/adamya-singh/levelup/main/assets/demo.gif" className="text-gray-400 hover:text-cyber-blue transition-colors border border-gray-700 hover:border-cyber-blue/50 p-2 rounded-sm" aria-label="View Demo GIF">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed">
                    A modern, full-stack task management application built with React, TypeScript, and Spring Boot. This project demonstrates professional-grade web development practices, including type safety, optimistic UI updates, and responsive design. Features include task creation, real-time performance metrics, and error handling.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">React</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">Spring Boot 3</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">MongoDB</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">Supabase</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">RESTful API</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 - RU-Networking */}
            <div className="mb-20">
              <div className="cyber-card overflow-hidden flex flex-col md:flex-row-reverse bg-cyber-dark/50">
                <div className="md:w-1/2 h-64 md:h-auto bg-cyber-blue/10 flex items-center justify-center relative overflow-hidden">
                  <div className="cyber-grid absolute inset-0 opacity-20"></div>
                  <img 
                    src="https://github.com/adamya-singh/ru-networking/raw/master/assets/Verizon%20Challenge%20Demo.gif" 
                    alt="RU-Networking Demo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 font-mono text-xs text-cyber-blue">02</div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold cyber-title tracking-tight">RU-NETWORKING</h3>
                    <div className="flex space-x-2">
                      <a href="https://github.com/adamya-singh/ru-networking" className="text-gray-400 hover:text-cyber-blue transition-colors border border-gray-700 hover:border-cyber-blue/50 p-2 rounded-sm" aria-label="GitHub Repository">
                        <Github size={18} />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors border border-gray-700 hover:border-cyber-blue/50 p-2 rounded-sm" aria-label="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed">
                    A full-stack RAG application to help students efficiently generate course schedules and connect with classmates.
                    Utilized Next.js, Ollama, OpenAI API, and PineconeDB for an intelligent, responsive experience.
                    Reduced average time spent searching for information by over 60%.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">Next.js</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">Ollama</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">OpenAI API</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">PineconeDB</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">RAG</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 - AI Web Scraper */}
            <div>
              <div className="cyber-card overflow-hidden flex flex-col md:flex-row bg-cyber-dark/50">
                <div className="md:w-1/2 h-64 md:h-auto bg-cyber-blue/10 flex items-center justify-center relative overflow-hidden">
                  <div className="cyber-grid absolute inset-0 opacity-20"></div>
                  <div className="text-6xl text-cyber-blue relative z-10">
                    <Code />
                  </div>
                  <div className="absolute top-4 left-4 font-mono text-xs text-cyber-blue">03</div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold cyber-title tracking-tight">AI WEB SCRAPER</h3>
                    <div className="flex space-x-2">
                      <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors border border-gray-700 hover:border-cyber-blue/50 p-2 rounded-sm" aria-label="GitHub Repository">
                        <Github size={18} />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors border border-gray-700 hover:border-cyber-blue/50 p-2 rounded-sm" aria-label="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed">
                    An intelligent web scraping agent for dynamic extraction and LLM-driven interpretation of user-specified web content.
                    Built with Selenium, BeautifulSoup, and LangChain to efficiently process and analyze complex web data.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">Python</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">Selenium</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">BeautifulSoup</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">LangChain</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">LLM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-cyber-dark/80">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
              <h2 className="text-3xl md:text-4xl font-bold mx-4 cyber-title tracking-tight">
                EXPERIENCE
              </h2>
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {/* Job 1 */}
              <div className="mb-12 border-l-2 border-cyber-blue pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-blue"></div>
                <div className="mb-2 cyber-card p-4 bg-cyber-dark/50">
                  <h3 className="text-xl font-bold cyber-title tracking-tight">UNDERGRADUATE RESEARCH ASSISTANT</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4 font-mono text-sm">
                    <span>Professor Ruxiang Tang, Rutgers University</span>
                    <span className="hidden sm:block text-cyber-blue">//</span>
                    <span className="text-cyber-green">Jan 2025 - Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4 font-mono text-sm">
                  <li>Develop benchmarks to evaluate model performance on negation-sensitive tasks; analyzed model weaknesses and performance gaps</li>
                  <li>Conduct research on enhancing negation comprehension in vision-language models (CLIP, BioMedCLIP) for medical imaging tasks using the CheXpert dataset</li>
                </ul>
              </div>
              
              {/* Job 2 */}
              <div className="mb-12 border-l-2 border-cyber-teal pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-teal"></div>
                <div className="mb-2 cyber-card p-4 bg-cyber-dark/50">
                  <h3 className="text-xl font-bold cyber-title tracking-tight">SENIOR INSTRUCTOR</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4 font-mono text-sm">
                    <span>Code Ninjas</span>
                    <span className="hidden sm:block text-cyber-blue">//</span>
                    <span className="text-cyber-green">2022 - 2024</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4 font-mono text-sm">
                  <li>Developed 5 STEM programs (AI, Web Dev, Python), enhancing curriculum by 50%</li>
                  <li>Designed and delivered technical training for 7 Junior Instructors, improving team coding proficiency</li>
                </ul>
              </div>
              
              {/* Job 3 */}
              <div className="border-l-2 border-cyber-green pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-green"></div>
                <div className="mb-2 cyber-card p-4 bg-cyber-dark/50">
                  <h3 className="text-xl font-bold cyber-title tracking-tight">STEM INSTRUCTOR</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4 font-mono text-sm">
                    <span>Empow Studios</span>
                    <span className="hidden sm:block text-cyber-blue">//</span>
                    <span className="text-cyber-green">2019 - 2022</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4 font-mono text-sm">
                  <li>Planned lessons and activities to facilitate students' acquisition of basic and advanced computer skills</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
              <h2 className="text-3xl md:text-4xl font-bold mx-4 cyber-title tracking-tight">
                EDUCATION
              </h2>
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
            </div>
            
            <div className="max-w-3xl mx-auto cyber-card p-8 bg-cyber-dark/50">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-bold cyber-title tracking-tight flex items-center">
                  <Terminal className="mr-2 text-cyber-blue" size={18} />
                  RUTGERS UNIVERSITY
                </h3>
                <span className="text-cyber-green font-mono">Fall 2026</span>
              </div>
              <p className="text-gray-300 font-semibold mb-4 font-mono">Bachelor of Science in Computer Science, Bachelor of Science in Data Science</p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-cyber-blue font-mono flex items-center">
                  <Zap size={16} className="mr-2" /> 
                  COURSEWORK
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Data Structures</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Discrete Mathematics</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Computer Architecture</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Public Speaking</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-cyber-blue font-mono flex items-center">
                  <Zap size={16} className="mr-2" /> 
                  CLUBS
                </h4>
                <p className="text-gray-300 font-mono text-sm">Undergraduate Student Alliance of Computer Scientists - Tech Team & Executive Board Member</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-cyber-blue font-mono flex items-center">
                  <Zap size={16} className="mr-2" /> 
                  ACHIEVEMENTS
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Eagle Scout</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Dean's List</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Verizon Smart Campus Challenge Winner 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-cyber-dark/80">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto cyber-card p-8 bg-cyber-dark/50">
              <div className="flex items-center justify-center mb-6">
                <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[50px]"></div>
                <h2 className="text-3xl md:text-4xl font-bold mx-4 cyber-title tracking-tight">
                  CONTACT
                </h2>
                <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[50px]"></div>
              </div>
              
              <p className="text-lg text-gray-300 text-center mb-8 font-mono">
                <span className="text-cyber-blue">&gt;</span> I'm currently open to new opportunities and collaborations.<br />
                <span className="text-cyber-teal">&gt;</span> Feel free to reach out for projects, questions, or just to connect.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <div 
                  onClick={handleCopyEmail} 
                  className="cursor-pointer bg-cyber-dark/70 border border-cyber-blue/30 px-4 py-2 rounded-sm text-center text-gray-300 hover:bg-cyber-blue/10 transition-colors font-mono"
                >
                  adamya.singh@rutgers.edu
                </div>
                <Button className="cyber-button" onClick={() => window.open('https://www.linkedin.com/in/adamya-singh-0a8746184/', '_blank')}>
                  [LinkedIn]
                </Button>
                <Button className="cyber-button" onClick={() => window.open('https://github.com/adamya-singh', '_blank')}>
                  [GitHub]
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>;
};

export default Portfolio;
