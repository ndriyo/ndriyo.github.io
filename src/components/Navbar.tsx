import React from 'react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-slate-800">
            Darundriyos
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['hero', 'projects', 'about'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 font-medium relative ${
                  activeSection === section 
                    ? 'text-blue-600' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                {section === 'hero' ? 'Home' : section}
                {activeSection === section && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;