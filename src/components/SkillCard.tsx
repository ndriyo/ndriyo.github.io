import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
  scrollY: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, scrollY }) => {
  return (
    <div
      className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 transform hover:-translate-y-1"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        transform: `translateY(${Math.max(0, (scrollY - 900 - index * 50) * 0.03)}px)`
      }}
    >
      <skill.icon size={32} className="text-blue-600 mb-4" />
      <h3 className="font-semibold text-slate-800 mb-2">{skill.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{skill.description}</p>
    </div>
  );
};

export default SkillCard;