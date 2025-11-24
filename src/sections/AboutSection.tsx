import React from 'react';
import { Github, Linkedin, X } from 'lucide-react';
import SkillCard from '../components/SkillCard';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AboutSectionProps {
  skills: Skill[];
  scrollY: number;
}

const AboutSection: React.FC<AboutSectionProps> = ({ skills, scrollY }) => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-slate-200/30 to-blue-200/30 rounded-full blur-2xl"
        style={{ transform: `translate(${scrollY * 0.02}px, ${-scrollY * 0.05}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-purple-200/30 to-pink-200/30 rounded-full blur-2xl"
        style={{ transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.04}px)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div
            className="lg:sticky lg:top-24"
            style={{ 
              opacity: Math.min(1, Math.max(0, (scrollY - 600) / 400))
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About The Creator
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              I design and deliver digital solutions that help organizations modernize how they operate and serve their customers. My work combines product thinking, experience design, and modern engineering practices to build technology that is intuitive, secure, and business-driven.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              I turn ideas into reliable digital products that create real business impact. This is just a showcase of my personal project in my spare time.
            </p>
            
            {/* Social media links - hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a 
                href="https://github.com/ndriyo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/ndriyo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
              <a 
                href="https://x.com/ndriyo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <X size={20} className="mr-2" />
                X
              </a>
            </div>
          </div>
          
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            style={{ 
              opacity: Math.min(1, Math.max(0, (scrollY - 600) / 400))
            }}
          >
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                index={index}
                scrollY={scrollY}
              />
            ))}
          </div>
        </div>
        
        {/* Social media links - shown at bottom on mobile, hidden on desktop */}
        <div 
          className="lg:hidden flex flex-col items-center gap-4 mt-12"
          style={{ 
            opacity: Math.min(1, Math.max(0, (scrollY - 600) / 400))
          }}
        >
          <a 
            href="https://github.com/ndriyo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Github size={20} className="mr-2" />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/ndriyo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Linkedin size={20} className="mr-2" />
            LinkedIn
          </a>
          <a 
            href="https://x.com/ndriyo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <X size={20} className="mr-2" />
            X
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;