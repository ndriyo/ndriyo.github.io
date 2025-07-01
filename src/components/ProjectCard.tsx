import React from 'react';
import { ExternalLink, Shield, DivideIcon as LucideIcon } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  color: string;
  icon: typeof LucideIcon;
  status: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  scrollY: number;
  onPrivacyPolicyClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, scrollY, onPrivacyPolicyClick }) => {
  return (
    <div
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200 transform hover:-translate-y-2"
      style={{ 
        transform: `translateY(${Math.max(0, (scrollY - 300 - index * 200) * 0.05)}px)`,
        opacity: Math.min(1, Math.max(0, (scrollY - 200 - index * 100) / 300))
      }}
    >
      <div className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <project.icon size={64} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
          {project.status}
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">{project.title}</h3>
            <p className="text-blue-600 font-medium">{project.subtitle}</p>
          </div>
          <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
        </div>
        
        <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-slate-800 mb-3">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Privacy Policy Link for Winkabook */}
        {project.id === 'winkabook' && onPrivacyPolicyClick && (
          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={onPrivacyPolicyClick}
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium text-sm group"
            >
              <Shield size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              View Privacy Policy
              <ExternalLink size={14} className="ml-2 opacity-60" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
