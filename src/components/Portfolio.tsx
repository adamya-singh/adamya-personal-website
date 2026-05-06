"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Server, ExternalLink, Github, Terminal, Database, Cpu, Zap } from "lucide-react";

const Portfolio = () => {
  const [showMoreExperience, setShowMoreExperience] = useState(false);

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
    }).catch(() => {
      toast.error('Failed to copy email');
    });
  };

  return <div className="min-h-screen bg-cyber-dark/20 text-white overflow-hidden">
      <Header />
      
      <div className="content-container">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto text-center">
            <div className="inline-block mb-4 border border-cyber-blue/30 px-3 py-1 text-xs font-mono text-cyber-blue">
              <span className="mr-1">$</span>
              <span className="typing-animation">user.identify</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-title tracking-tight">
              ADAMYA SINGH
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300 font-mono">
              <span className="text-cyber-blue">&gt;</span> Agentic Engineer
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
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
            
            <div className="max-w-3xl mx-auto">
              <div className="cyber-card p-6 md:p-8 bg-cyber-dark/50">
                <p className="text-xl md:text-2xl text-gray-200 font-mono leading-relaxed mb-6">
                  <span className="text-cyber-blue">&gt;</span> I build agentic systems, ML infrastructure, and polished full-stack products.
                </p>

                <div className="grid gap-3 md:grid-cols-3">
                  <div className="border border-cyber-blue/10 bg-cyber-blue/5 p-4">
                    <div className="text-cyber-blue font-mono text-xs mb-2">CURRENT</div>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">ML Engineer Intern at Aviro, building RL environments for enterprise AI agents.</p>
                  </div>
                  <div className="border border-cyber-teal/10 bg-cyber-teal/5 p-4">
                    <div className="text-cyber-teal font-mono text-xs mb-2">RESEARCH</div>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">Computer Vision research at Rutgers on VLM negation failures in medical imaging.</p>
                  </div>
                  <div className="border border-cyber-green/10 bg-cyber-green/5 p-4">
                    <div className="text-cyber-green font-mono text-xs mb-2">NEXT</div>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">Incoming data engineering intern at Moody&apos;s and CS/Data Science student at Rutgers.</p>
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
              {/* Languages */}
              <Card className="cyber-card border-cyber-blue/20 hover:shadow-neon-blue transition-all duration-300 bg-cyber-dark/50">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-cyber-blue/30">
                    <Database className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center font-mono text-cyber-blue tracking-tight">LANGUAGES</h3>
                  <p className="text-gray-400 text-center text-sm mb-4">
                    Core programming languages and scripting
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Python</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">C/C++</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Java</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">TypeScript</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">SQL</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Bash</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* AI / ML */}
              <Card className="cyber-card border-cyber-blue/20 hover:shadow-neon-blue transition-all duration-300 bg-cyber-dark/50">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-cyber-blue/30">
                    <Cpu className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center font-mono text-cyber-blue tracking-tight">AI / ML</h3>
                  <p className="text-gray-400 text-center text-sm mb-4">
                    Agentic systems, RL training, and applied ML
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">PyTorch</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Transformers</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">HuggingFace</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">vLLM</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">LoRA</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">GRPO</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">RAG</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">VLA</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">RL</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Computer Vision</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Infra / Backend */}
              <Card className="cyber-card border-cyber-blue/20 hover:shadow-neon-blue transition-all duration-300 bg-cyber-dark/50">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-cyber-blue/30">
                    <Server className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center font-mono text-cyber-blue tracking-tight">INFRA / BACKEND</h3>
                  <p className="text-gray-400 text-center text-sm mb-4">
                    APIs, retrieval systems, and deployment foundations
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">FastAPI</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Spring Boot</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">PostgreSQL</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">pgvector</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Docker</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">AWS S3</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Linux</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">CUDA</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">REST APIs</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Product */}
              <Card className="cyber-card border-cyber-blue/20 hover:shadow-neon-blue transition-all duration-300 bg-cyber-dark/50">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-cyber-blue/30">
                    <Code className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center font-mono text-cyber-blue tracking-tight">PRODUCT</h3>
                  <p className="text-gray-400 text-center text-sm mb-4">
                    Full-stack interfaces and production app delivery
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">React</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Next.js</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Tailwind CSS</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Assistant API</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">SSE</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/20 rounded px-2 py-1 text-xs text-center font-mono">Analytics</span>
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
            
            {/* Project 1 - RU-Networking */}
            <div className="mb-20">
              <div className="cyber-card overflow-hidden flex flex-col md:flex-row bg-cyber-dark/50">
                <div className="md:w-1/2 h-64 md:h-auto bg-cyber-blue/10 flex items-center justify-center relative overflow-hidden">
                  <div className="cyber-grid absolute inset-0 opacity-20"></div>
                  {/* TODO: Consider replacing <img> with <Image /> from next/image for better performance and optimization. */}
                  <img 
                    src="https://github.com/adamya-singh/ru-networking/raw/master/assets/Verizon%20Challenge%20Demo.gif" 
                    alt="RU-Networking Demo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 font-mono text-xs text-cyber-blue">01</div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold cyber-title tracking-tight">RU-NETWORKING</h3>
                      <span className="text-cyber-green font-mono text-xs">AI Course Planning Assistant</span>
                    </div>
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
                    Full-stack AI-powered course planning assistant using RAG, engineering function-calling workflows, tool orchestration, and Server-Sent Events for <span className="text-cyber-blue">real-time, production-scale chat recommendations</span>.
                    Reverse-engineered undocumented endpoints and developed a highly parallelized Python scraper to extract a <span className="text-cyber-green">1M+ line dataset</span>.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">Next.js</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">GPT-4o</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">Assistant API</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">RAG</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">PineconeDB</span>
                    <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-2 py-1 text-xs font-mono">SSE</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 - SO-ARM-101 MuJoCo Simulation */}
            <div className="mb-20">
              <div className="cyber-card overflow-hidden flex flex-col md:flex-row-reverse bg-cyber-dark/50">
                <div className="md:w-1/2 h-64 md:h-auto bg-cyber-green/10 flex items-center justify-center relative overflow-hidden">
                  <div className="cyber-grid absolute inset-0 opacity-20"></div>
                  {/* TODO: Consider replacing <img> with <Image /> from next/image for better performance and optimization. */}
                  <img
                    src="https://raw.githubusercontent.com/adamya-singh/SO-ARM-101/master/readme-assets/hero-sim-top.gif"
                    alt="SO-ARM-101 Simulation Top View"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 font-mono text-xs text-cyber-green">02</div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold cyber-title tracking-tight">SO-ARM-101 SIMULATION</h3>
                      <span className="text-cyber-green font-mono text-xs">VLA Policy Training</span>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/adamya-singh/SO-ARM-101" className="text-gray-400 hover:text-cyber-green transition-colors border border-gray-700 hover:border-cyber-green/50 p-2 rounded-sm" aria-label="GitHub Repository">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed">
                    Built a <span className="text-cyber-green">MuJoCo + Gymnasium</span> simulation environment for the SO-ARM-101 arm with multi-camera observations, normalized state/action interfaces, teleoperation, and shaped pick-and-place rewards.
                    Implemented VLA policy inference with adapters for <span className="text-cyber-teal">SmolVLA (450M)</span> and <span className="text-cyber-teal">Pi0 (3.3B)</span>, enabling model swapping via CLI flags. Trained policies with <span className="text-cyber-green">ReinFlow using PPO-style objectives</span>.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-cyber-green/10 border border-cyber-green/30 rounded px-2 py-1 text-xs font-mono">MuJoCo</span>
                    <span className="bg-cyber-green/10 border border-cyber-green/30 rounded px-2 py-1 text-xs font-mono">Gymnasium</span>
                    <span className="bg-cyber-green/10 border border-cyber-green/30 rounded px-2 py-1 text-xs font-mono">PyTorch</span>
                    <span className="bg-cyber-green/10 border border-cyber-green/30 rounded px-2 py-1 text-xs font-mono">Transformers</span>
                    <span className="bg-cyber-green/10 border border-cyber-green/30 rounded px-2 py-1 text-xs font-mono">RL</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 - AtomicCoach */}
            <div className="mb-20">
              <div className="cyber-card overflow-hidden flex flex-col md:flex-row bg-cyber-dark/50">
                <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-cyber-teal/20 via-cyber-blue/10 to-cyber-dark flex items-center justify-center relative overflow-hidden">
                  <div className="cyber-grid absolute inset-0 opacity-20"></div>
                  <div className="relative z-10 text-center p-8">
                    <div className="text-6xl mb-4">🧠</div>
                    <div className="font-mono text-cyber-teal text-sm">LLaMA 3 8B Fine-Tuned</div>
                    <div className="font-mono text-gray-500 text-xs mt-1">Behavioral AI Coach</div>
                  </div>
                  <div className="absolute top-4 left-4 font-mono text-xs text-cyber-teal">03</div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold cyber-title tracking-tight">ATOMICCOACH</h3>
                      <span className="text-cyber-teal font-mono text-xs">LLaMA 3 Fine-Tuning</span>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/adamya-singh" className="text-gray-400 hover:text-cyber-teal transition-colors border border-gray-700 hover:border-cyber-teal/50 p-2 rounded-sm" aria-label="GitHub Repository">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed">
                    Built a scalable AI-powered behavioral coach by fine-tuning Meta&apos;s <span className="text-cyber-teal">LLaMA 3 8B</span> on <em>Atomic Habits</em>, enabling high-quality, personalized habit formation guidance.
                    Created a <span className="text-cyber-green">2,300+ Q&A dataset</span> and fine-tuned using LoRA and QLoRA, reducing memory requirements by <span className="text-cyber-green">60%+</span> — making training viable on consumer hardware.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-cyber-teal/10 border border-cyber-teal/30 rounded px-2 py-1 text-xs font-mono">LLaMA 3 8B</span>
                    <span className="bg-cyber-teal/10 border border-cyber-teal/30 rounded px-2 py-1 text-xs font-mono">LoRA</span>
                    <span className="bg-cyber-teal/10 border border-cyber-teal/30 rounded px-2 py-1 text-xs font-mono">QLoRA</span>
                    <span className="bg-cyber-teal/10 border border-cyber-teal/30 rounded px-2 py-1 text-xs font-mono">HuggingFace</span>
                    <span className="bg-cyber-teal/10 border border-cyber-teal/30 rounded px-2 py-1 text-xs font-mono">PyTorch</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 4 - LevelUp */}
            <div className="mb-20">
              <div className="cyber-card overflow-hidden flex flex-col md:flex-row-reverse bg-cyber-dark/50">
                <div className="md:w-1/2 h-64 md:h-auto bg-cyber-blue/10 flex items-center justify-center relative overflow-hidden">
                  <div className="cyber-grid absolute inset-0 opacity-20"></div>
                  {/* TODO: Consider replacing <img> with <Image /> from next/image for better performance and optimization. */}
                  <img 
                    src="https://raw.githubusercontent.com/adamya-singh/levelup/main/assets/demo.gif" 
                    alt="LevelUp Demo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 font-mono text-xs text-cyber-blue">04</div>
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
              {/* Job 1 - Aviro */}
              <div className="mb-12 border-l-2 border-cyber-blue pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-blue animate-pulse"></div>
                <div className="mb-2 cyber-card p-4 bg-cyber-dark/50">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold cyber-title tracking-tight">MACHINE LEARNING ENGINEER INTERN</h3>
                    <span className="bg-cyber-blue/20 border border-cyber-blue/40 text-cyber-blue text-[10px] px-2 py-0.5 rounded font-mono">YC-BACKED</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4 font-mono text-sm">
                    <a href="https://www.aviro.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue transition-colors">Aviro</a>
                    <span className="hidden sm:block text-cyber-blue">•</span>
                    <span>Remote</span>
                    <span className="hidden sm:block text-cyber-blue">•</span>
                    <span className="text-cyber-green">Nov 2025 - Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4 font-mono text-sm">
                  <li>Built a <span className="text-cyber-teal">Dockerized Enterprise Search Benchmark</span> over PDFs, PowerPoints, and spreadsheets, backed by PostgreSQL + pgvector semantic search</li>
                  <li>Designed an <span className="text-cyber-teal">MCP-based RL environment</span> with search/fetch/answer tools, step budgeting, citation validation, and redaction-after-view memory constraints, improving model performance by <span className="text-cyber-green">26%</span></li>
                  <li>Trained <span className="text-cyber-green">Qwen3-14B with GRPO</span> using W&B serverless distillation and local on-policy RL with vLLM + LoRA hot-reloaded adapters</li>
                </ul>
              </div>
              
              {/* Job 2 - Moody's */}
              <div className="mb-12 border-l-2 border-cyber-blue/60 pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-blue/60"></div>
                <div className="mb-2 cyber-card p-4 bg-cyber-dark/50">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-xl font-bold cyber-title tracking-tight">SOFTWARE ENGINEERING INTERN</h3>
                    <span className="bg-cyber-teal/20 border border-cyber-teal/40 text-cyber-teal text-[10px] px-2 py-0.5 rounded font-mono">DATA ENGINEERING</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4 font-mono text-sm">
                    <a href="https://www.moodys.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue transition-colors">Moody&apos;s Corporation</a>
                    <span className="hidden sm:block text-cyber-blue">•</span>
                    <span>New York, NY</span>
                    <span className="hidden sm:block text-cyber-blue">•</span>
                    <span className="text-cyber-green">Jun 2026 - Aug 2026</span>
                  </div>
                </div>
              </div>
              
              {/* Job 3 - rebootED */}
              <div className="mb-12 border-l-2 border-cyber-teal pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-teal"></div>
                <div className="mb-2 cyber-card p-4 bg-cyber-dark/50">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-xl font-bold cyber-title tracking-tight">SOFTWARE ENGINEER</h3>
                    <span className="bg-cyber-teal/20 border border-cyber-teal/40 text-cyber-teal text-[10px] px-2 py-0.5 rounded font-mono">FUSEN FELLOW</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4 font-mono text-sm">
                    <a href="https://tryrebooted.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-teal transition-colors">rebootED</a>
                    <span className="hidden sm:block text-cyber-blue">•</span>
                    <span>Atlanta, GA</span>
                    <span className="hidden sm:block text-cyber-blue">•</span>
                    <span className="text-cyber-green">May 2025 - Aug 2025</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-[10px] text-gray-500 font-mono">Backed by:</span>
                    <span className="text-[10px] text-gray-400 font-mono">Fusen World Accelerator</span>
                    <span className="text-[10px] text-gray-500">•</span>
                    <span className="text-[10px] text-gray-400 font-mono">Google Cloud for Startups</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4 font-mono text-sm">
                  <li>Engineered an enterprise LMS end-to-end: <span className="text-cyber-teal">Spring Boot + PostgreSQL</span> services with JWT auth and REST APIs, <span className="text-cyber-teal">Next.js + TypeScript</span> frontend with role-based dashboards</li>
                  <li>Implemented AI-driven course generation pipelines reducing content creation time by <span className="text-cyber-green">~80%</span> while preserving quality across enterprise training programs</li>
                  <li>Partnered with <span className="text-cyber-green">15+</span> enterprise tech orgs to validate requirements and ship production-ready specs for large-scale deployments (<span className="text-cyber-green">10K+ learners</span>)</li>
                </ul>
              </div>
              
              {/* Job 4 - Research */}
              <div className="mb-12 border-l-2 border-cyber-green pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-green"></div>
                <div className="mb-2 cyber-card p-4 bg-cyber-dark/50">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold cyber-title tracking-tight">UNDERGRADUATE RESEARCH ASSISTANT</h3>
                    <span className="bg-cyber-green/20 border border-cyber-green/40 text-cyber-green text-[10px] px-2 py-0.5 rounded font-mono">COMPUTER VISION</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4 font-mono text-sm">
                    <span>Rutgers University, CS Department</span>
                    <span className="hidden sm:block text-cyber-blue">•</span>
                    <span className="text-cyber-green">Jan 2025 - Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4 font-mono text-sm">
                  <li>Investigating vision-language model (VLM) failures in negation comprehension using <span className="text-cyber-green">225K+</span> multimodal medical images from the CheXpert dataset</li>
                  <li>Benchmarked <span className="text-cyber-teal">3+ GenAI VLMs</span> (CLIP, BioMedCLIP) on negation-sensitive tasks using PyTorch; developed domain-specific evaluation tools</li>
                </ul>
              </div>
              <div className="flex justify-center mb-12">
                <Button
                  className="cyber-button"
                  onClick={() => setShowMoreExperience((isShowing) => !isShowing)}
                >
                  {showMoreExperience ? "[Show_Less]" : "[Show_More]"}
                </Button>
              </div>

              {showMoreExperience && (
                <>
                  {/* Job 5 - Code Ninjas */}
                  <div className="mb-12 border-l-2 border-gray-600 pl-8 relative">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-600"></div>
                    <div className="mb-2 cyber-card p-4 bg-cyber-dark/50">
                      <h3 className="text-xl font-bold cyber-title tracking-tight">SENIOR CODING INSTRUCTOR</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4 font-mono text-sm">
                        <span>Code Ninjas</span>
                        <span className="hidden sm:block text-cyber-blue">•</span>
                        <span>Canton, MA</span>
                        <span className="hidden sm:block text-cyber-blue">•</span>
                        <span className="text-cyber-green">Jan 2022 - Jul 2024</span>
                      </div>
                    </div>
                    {/* <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4 font-mono text-sm">
                      <li>Designed and led <span className="text-cyber-teal">3 new STEM programs</span> (AI, Web Dev, Python), reaching <span className="text-cyber-green">200+ students</span> and improving learning outcomes across age groups</li>
                      <li>Led technical training for <span className="text-cyber-green">7 Junior Instructors</span>, boosting student project completion rates by <span className="text-cyber-green">30%</span></li>
                    </ul> */}
                  </div>
                  
                  {/* Job 6 - Empow Studios */}
                  <div className="border-l-2 border-gray-700 pl-8 relative">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-700"></div>
                    <div className="mb-2 cyber-card p-4 bg-cyber-dark/50">
                      <h3 className="text-xl font-bold cyber-title tracking-tight">STEM INSTRUCTOR</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4 font-mono text-sm">
                        <span>Empow Studios</span>
                        <span className="hidden sm:block text-cyber-blue">•</span>
                        <span>Boston, MA</span>
                        <span className="hidden sm:block text-cyber-blue">•</span>
                        <span className="text-cyber-green">2019 - 2022</span>
                      </div>
                    </div>
                    {/* <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4 font-mono text-sm">
                      <li>Planned lessons and activities to facilitate students&#39; acquisition of basic and advanced computer skills</li>
                    </ul> */}
                  </div>
                </>
              )}
              
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
                <div className="flex items-center gap-3">
                  <span className="bg-cyber-green/20 border border-cyber-green/40 text-cyber-green text-sm px-2 py-0.5 rounded font-mono">GPA: 3.6</span>
                  <span className="text-cyber-green font-mono">May 2027</span>
                </div>
              </div>
              <p className="text-gray-300 font-semibold mb-4 font-mono">B.S. in Computer Science & Data Science</p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-cyber-blue font-mono flex items-center">
                  <Zap size={16} className="mr-2" /> 
                  COURSEWORK
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Artificial Intelligence</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Machine Learning</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Deep Learning</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Algorithms</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Data Structures</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Discrete Math</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Computer Architecture</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-cyber-blue font-mono flex items-center">
                  <Zap size={16} className="mr-2" /> 
                  LEADERSHIP & CLUBS
                </h4>
                <div className="space-y-2">
                  <p className="text-gray-300 font-mono text-sm"><span className="text-cyber-teal">USACS</span> — Tech Team Lead & Executive Board Member</p>
                  <p className="text-gray-300 font-mono text-sm"><span className="text-cyber-teal">STAR</span> — Space Technology Association at Rutgers</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-cyber-blue font-mono flex items-center">
                  <Zap size={16} className="mr-2" /> 
                  ACHIEVEMENTS
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyber-green/20 border border-cyber-green/40 rounded px-3 py-1 text-sm font-mono text-cyber-green">Verizon Smart Campus Challenge Winner 2025</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Dean&#39;s List</span>
                  <span className="bg-cyber-blue/10 border border-cyber-blue/30 rounded px-3 py-1 text-sm font-mono">Eagle Scout</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-20 px-4 bg-cyber-dark/80">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
              <h2 className="text-3xl md:text-4xl font-bold mx-4 cyber-title tracking-tight">
                RESUME
              </h2>
              <div className="h-[1px] flex-1 bg-cyber-blue/20 max-w-[80px]"></div>
            </div>
            
            <div className="cyber-card p-6 bg-cyber-dark/50">
              <iframe
                src="/Adamya_Singh_Resume.pdf"
                width="100%"
                height="800px"
                className="border border-cyber-blue/30 rounded-sm"
                title="Adamya Singh Resume"
              />
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