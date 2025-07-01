import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  color: string;
  icon: LucideIcon;
  status: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  scrollY: number;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, scrollY }) => {
  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"
        style={{ transform: `translate(${scrollY * 0.05}px, ${-scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-100/50 to-cyan-100/50 rounded-full blur-3xl"
        style={{ transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.08}px)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-16"
          style={{ 
            transform: `translateY(${Math.max(0, (scrollY - 200) * 0.1)}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 100) / 400))
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that combine beautiful design with powerful functionality
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              scrollY={scrollY}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;