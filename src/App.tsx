import React, { useState, useEffect } from 'react';
import { Smartphone, BarChart, Layers, Bot, Code2, BookOpen } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState('portfolio');

  useEffect(() => {
    // Check URL for privacy policy route
    const path = window.location.pathname;
    if (path.includes('privacy-policy') || window.location.search.includes('privacy-policy')) {
      setCurrentPage('privacy-policy');
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'projects', 'about'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 'winkabook',
      title: 'Winkabook',
      subtitle: 'Mobile App for Kids',
      description: 'An engaging mobile application designed specifically for children, featuring interactive learning experiences, colorful animations, and age-appropriate content that makes learning fun and accessible.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Figma'],
      features: ['Interactive Learning', 'Child-Safe Design', 'Progress Tracking', 'Offline Mode'],
      color: 'from-pink-500 to-purple-600',
      icon: Smartphone,
      status: 'Live in App Store'
    },
    {
      id: 'primepm',
      title: 'Primepm',
      subtitle: 'Project & Portfolio Management',
      description: 'A comprehensive project and portfolio management platform that streamlines workflows, enhances team collaboration, and provides powerful analytics to drive project success.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      features: ['Team Collaboration', 'Advanced Analytics', 'Resource Planning', 'Real-time Updates'],
      color: 'from-blue-500 to-cyan-600',
      icon: BarChart,
      status: 'In Development'
    }
  ];

  const skills = [
    { 
      icon: Layers, 
      title: 'Product Architecture & Innovation', 
      description: 'Expertise in transforming abstract ideas into structured product blueprints— to deliver scalable, high-impact solutions.' 
    },
    { 
      icon: Bot, 
      title: 'AI-Driven Automation', 
      description: 'Skilled in leveraging AI models and agent frameworks to develop intelligent workflows that enhance customer experience across diverse industries.' 
    },
    { 
      icon: Code2, 
      title: 'Full-Stack Engineering', 
      description: 'Proficient across the entire technology stack, from database schema design and backend services to crafting fluid front-end interfaces for seamless user experiences.' 
    },
    { 
      icon: BookOpen, 
      title: 'Technical Storytelling & Team Leadership', 
      description: 'Adept at translating complex technical concepts into engaging narratives to ensure successful project delivery.' 
    }
  ];

  const handleBackToPortfolio = () => {
    setCurrentPage('portfolio');
    window.history.pushState({}, '', '/');
  };

  const handlePrivacyPolicyClick = () => {
    setCurrentPage('privacy-policy');
    window.history.pushState({}, '', '/?privacy-policy');
  };

  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicyPage onBack={handleBackToPortfolio} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollY={scrollY} scrollToSection={scrollToSection} />
      <ProjectsSection projects={projects} scrollY={scrollY} onPrivacyPolicyClick={handlePrivacyPolicyClick} />
      <AboutSection skills={skills} scrollY={scrollY} />
    </div>
  );
}

export default App;
