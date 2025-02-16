"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, User2, Mail, Moon, Sun, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from 'next-themes';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a full-featured e-commerce platform using Vue.js with Vuex for state management. Implemented features like cart management, payment integration, and real-time inventory updates.",
      tech: ["Vue.js", "Vuex", "TailwindCSS", "Node.js"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Real Estate Dashboard",
      description: "Developed a comprehensive real estate management dashboard using React.js. Features include property listings, analytics, and an admin panel.",
      tech: ["React.js", "Redux", "Material-UI", "Firebase"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Social Media Analytics Tool",
      description: "Created a social media analytics dashboard using Next.js. Implemented real-time data visualization and reporting features.",
      tech: ["Next.js", "TailwindCSS", "Chart.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    }
  ];

  const skills = [
    { name: "HTML5/CSS3", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 88 },
    { name: "Vue.js", level: 85 },
    { name: "Next.js", level: 82 },
    { name: "TailwindCSS", level: 90 },
    { name: "Git", level: 85 },
    { name: "Responsive Design", level: 92 },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-primary"
            >
              <Code2 className="inline-block mr-2" />
              John Doe
            </motion.div>
            <div className="flex items-center gap-4">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
              <div className="hidden md:flex items-center gap-6">
                <Button
                  variant={activeSection === 'about' ? 'default' : 'ghost'}
                  onClick={() => setActiveSection('about')}
                >
                  <User2 className="mr-2 h-4 w-4" /> About
                </Button>
                <Button
                  variant={activeSection === 'projects' ? 'default' : 'ghost'}
                  onClick={() => setActiveSection('projects')}
                >
                  <Briefcase className="mr-2 h-4 w-4" /> Projects
                </Button>
                <Button
                  variant={activeSection === 'contact' ? 'default' : 'ghost'}
                  onClick={() => setActiveSection('contact')}
                >
                  <Mail className="mr-2 h-4 w-4" /> Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* About Section */}
        {activeSection === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold">Frontend Developer</h1>
                <p className="text-lg text-muted-foreground">
                  With 4.5 years of experience in building beautiful and functional web applications.
                  Specialized in modern JavaScript frameworks and responsive design.
                </p>
                <div className="flex gap-4">
                  <Button>
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                  <Button variant="outline">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=1000"
                  alt="Profile"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
            <Card className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    className="w-full p-2 rounded-md border bg-background min-h-[150px]"
                    placeholder="Your message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  );
}