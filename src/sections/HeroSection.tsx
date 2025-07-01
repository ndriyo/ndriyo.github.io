import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY, scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background Layers */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
      
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>

      {/* Floating Elements */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
        style={{ transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.25}px)` }}
      ></div>
      <div 
        className="absolute bottom-40 left-1/4 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl"
        style={{ transform: `translate(${scrollY * 0.08}px, ${-scrollY * 0.1}px)` }}
      ></div>
      
      <div 
        className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="mb-8">
          <div 
            className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm mb-6 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <span className="text-blue-300 text-sm font-medium">✨ Creating Beautiful Digital Experiences</span>
          </div>
        </div>
        
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Digital Land of
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Darundriyos
          </span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        >
          Crafting unique, professional homepages that showcase your projects and tell your story. 
          Specializing in modern design, seamless user experiences, and cutting-edge technology.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ transform: `translateY(${scrollY * 0.04}px)` }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            Learn More
          </button>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 hover:text-white transition-colors z-20"
        style={{ transform: `translateX(-50%) translateY(${scrollY * 0.02}px)` }}
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;