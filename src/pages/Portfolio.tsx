
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThreeScene from "@/components/ThreeScene";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Server, Layers, Globe, ExternalLink, Github } from "lucide-react";

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
              Adamya Singh
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0 text-gray-300">
              Computer Science & Data Science Student at Rutgers University.
              <br />
              Full-stack Developer & AI Researcher
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <Button 
                size="lg" 
                className="bg-neon-purple hover:bg-neon-purple/90"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See my work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-neon-blue text-neon-blue hover:bg-neon-blue/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
                  I'm a Computer Science and Data Science student at Rutgers University with a passion for 
                  full-stack development and artificial intelligence. I'm driven by a persistent 
                  problem-solving mindset and am always eager to learn new technologies.
                </p>
                
                <p className="text-lg text-gray-300 mb-6">
                  Currently, I'm working as an Undergraduate Research Assistant under Professor Ruxiang Tang, 
                  where I develop benchmarks to evaluate model performance on negation-sensitive tasks and 
                  enhance negation comprehension in vision-language models for medical imaging.
                </p>
                
                <p className="text-lg text-gray-300">
                  When I'm not coding or researching, I'm actively involved in the Undergraduate Student 
                  Alliance of Computer Scientists at Rutgers, where I serve as a Tech Team and Executive 
                  Board Member. I'm also proud to have achieved the rank of Eagle Scout and to have been 
                  recognized on the Dean's list.
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
                    <span>Python</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>JavaScript/TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>React</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>Java</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>Spring Boot</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>MongoDB</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-neon-blue">▹</span>
                    <span>TensorFlow/PyTorch</span>
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
                    Building responsive and interactive web applications
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">React</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Next.js</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">JavaScript</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">TypeScript</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">HTML/CSS</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Responsive Design</span>
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
                    Building robust server-side applications and APIs
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Java</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Spring Boot</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Node.js</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">MongoDB</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">SQL</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">RESTful APIs</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Data Science */}
              <Card className="bg-space border-space-light/20 hover:border-neon-pink transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-neon-pink/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Layers className="h-8 w-8 text-neon-pink" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Data Science</h3>
                  <p className="text-gray-400 text-center">
                    Analyzing and interpreting complex data sets
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Python</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">R</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">TensorFlow</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">PyTorch</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Tableau</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Machine Learning</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* AI Research */}
              <Card className="bg-space border-space-light/20 hover:border-neon-green transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Globe className="h-8 w-8 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">AI Research</h3>
                  <p className="text-gray-400 text-center">
                    Exploring and developing AI solutions for real-world problems
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">HuggingFace</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">LangChain</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Ollama</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">Deep Learning</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">RAG</span>
                    <span className="bg-space-light/30 rounded px-2 py-1 text-xs text-center">NLP</span>
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
            
            {/* Project 1 - LevelUp */}
            <div className="mb-20">
              <div className="bg-space border border-space-light/20 rounded-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto bg-space-light/20 flex items-center justify-center">
                  <div className="text-6xl text-neon-purple">
                    <Layers />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">LevelUp</h3>
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
                    A full-stack web application for creating, tracking, and managing tasks with real-time feedback.
                    Designed and implemented RESTful APIs for CRUD operations and user authentication through Supabase.
                    Reduced latency by 40% using indexed database queries and client-side caching.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">React</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Spring Boot 3</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">MongoDB</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Supabase</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">RESTful API</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 - RU-Networking */}
            <div className="mb-20">
              <div className="bg-space border border-space-light/20 rounded-lg overflow-hidden flex flex-col md:flex-row-reverse">
                <div className="md:w-1/2 h-64 md:h-auto bg-space-light/20 flex items-center justify-center">
                  <div className="text-6xl text-neon-blue">
                    <Globe />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">RU-Networking</h3>
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
                    A full-stack RAG application to help students efficiently generate course schedules and connect with classmates.
                    Utilized Next.js, Ollama, OpenAI API, and PineconeDB for an intelligent, responsive experience.
                    Reduced average time spent searching for information by over 60%.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Next.js</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Ollama</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">OpenAI API</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">PineconeDB</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">RAG</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 - AI Web Scraper */}
            <div>
              <div className="bg-space border border-space-light/20 rounded-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto bg-space-light/20 flex items-center justify-center">
                  <div className="text-6xl text-neon-pink">
                    <Code />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">AI Web Scraper</h3>
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
                    An intelligent web scraping agent for dynamic extraction and LLM-driven interpretation of user-specified web content.
                    Built with Selenium, BeautifulSoup, and LangChain to efficiently process and analyze complex web data.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Python</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">Selenium</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">BeautifulSoup</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">LangChain</span>
                    <span className="bg-space-light/30 rounded px-3 py-1 text-xs">LLM</span>
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
                  <h3 className="text-xl font-bold">Undergraduate Research Assistant</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4">
                    <span>Professor Ruxiang Tang, Rutgers University</span>
                    <span className="hidden sm:block">•</span>
                    <span>Jan 2025 - Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4">
                  <li>Develop benchmarks to evaluate model performance on negation-sensitive tasks; analyzed model weaknesses and performance gaps</li>
                  <li>Conduct research on enhancing negation comprehension in vision-language models (CLIP, BioMedCLIP) for medical imaging tasks using the CheXpert dataset</li>
                </ul>
              </div>
              
              {/* Job 2 */}
              <div className="mb-12 border-l-2 border-neon-blue pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-blue"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">Senior Instructor</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4">
                    <span>Code Ninjas</span>
                    <span className="hidden sm:block">•</span>
                    <span>2022 - 2024</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4">
                  <li>Developed 5 STEM programs (AI, Web Dev, Python), enhancing curriculum by 50%</li>
                  <li>Designed and delivered technical training for 7 Junior Instructors, improving team coding proficiency</li>
                </ul>
              </div>
              
              {/* Job 3 */}
              <div className="border-l-2 border-neon-pink pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-pink"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">STEM Instructor</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-2 sm:gap-4">
                    <span>Empow Studios</span>
                    <span className="hidden sm:block">•</span>
                    <span>2019 - 2022</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 list-disc list-outside ml-4">
                  <li>Planned lessons and activities to facilitate students' acquisition of basic and advanced computer skills</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              <span className="gradient-text">Education</span>
            </h2>
            
            <div className="max-w-3xl mx-auto bg-space rounded-lg p-8 border border-space-light/20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Rutgers University, New Brunswick</h3>
                <span className="text-neon-purple">Fall 2026</span>
              </div>
              <p className="text-gray-300 font-semibold mb-4">Bachelor of Science in Computer Science, Bachelor of Science in Data Science</p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-space-light/30 rounded px-3 py-1 text-sm">Data Structures</span>
                  <span className="bg-space-light/30 rounded px-3 py-1 text-sm">Discrete Mathematics</span>
                  <span className="bg-space-light/30 rounded px-3 py-1 text-sm">Computer Architecture</span>
                  <span className="bg-space-light/30 rounded px-3 py-1 text-sm">Public Speaking</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Clubs</h4>
                <p className="text-gray-300">Undergraduate Student Alliance of Computer Scientists - Tech Team & Executive Board Member</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Achievements</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-space-light/30 rounded px-3 py-1 text-sm">Eagle Scout</span>
                  <span className="bg-space-light/30 rounded px-3 py-1 text-sm">Dean's List</span>
                  <span className="bg-space-light/30 rounded px-3 py-1 text-sm">Verizon Smart Campus Challenge Winner 2025 (RU-Networking)</span>
                </div>
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
                I'm currently open to new opportunities and collaborations.
                Whether you have a project in mind, a question about my work, or just want to connect,
                feel free to reach out!
              </p>
              
              <div className="flex justify-center space-x-4">
                <Button 
                  size="lg" 
                  className="bg-neon-purple hover:bg-neon-purple/90"
                  onClick={() => window.location.href = 'mailto:adamya.singh@rutgers.edu'}
                >
                  Email Me
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-neon-blue text-neon-blue hover:bg-neon-blue/20"
                  onClick={() => window.open('https://linkedin.com/in/adamya-singh', '_blank')}
                >
                  LinkedIn
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
