# System Patterns: Digital Land of Darundriyos

## Architecture Overview

### Component Architecture
The application follows a clean, hierarchical component structure with clear separation of concerns:

```
App.tsx (Root Container)
├── Navbar.tsx (Navigation)
├── HeroSection.tsx (Landing)
├── ProjectsSection.tsx (Project Showcase)
└── AboutSection.tsx (Skills & Contact)
```

### State Management Pattern
- **Local State**: React hooks (useState, useEffect) for component-specific state
- **Props Drilling**: Simple prop passing for shared data (projects, skills)
- **No External State**: Currently no Redux/Zustand - keeps complexity minimal

### Data Flow Architecture
```
App.tsx
├── Static Data (projects, skills) defined in component
├── Scroll State (scrollY, activeSection) managed centrally
├── Props passed down to child components
└── Callback functions passed for user interactions
```

## Component Patterns

### 1. Section-Based Architecture
Each major page section is a separate component:
- **HeroSection**: Landing with parallax effects
- **ProjectsSection**: Project cards and showcase
- **AboutSection**: Skills grid and professional info
- **Navbar**: Fixed navigation with section highlighting

### 2. Reusable Component Pattern
Small, focused components for common UI elements:
- **ProjectCard**: Individual project showcase cards
- **SkillCard**: Individual skill presentation cards
- **Navbar**: Navigation with active section highlighting

### 3. Props Interface Pattern
Strong TypeScript interfaces for all components:
```typescript
interface HeroSectionProps {
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
}
```

## Design Patterns

### 1. Parallax Scrolling Pattern
Sophisticated layered scrolling effects throughout:
- Multiple background layers with different scroll speeds
- Floating UI elements that move at varying rates
- Transform calculations based on scroll position
- Performance-optimized with CSS transforms

### 2. Smooth Scrolling Navigation
Elegant section-to-section navigation:
- JavaScript-driven smooth scrolling to sections
- Active section detection based on viewport position
- Visual feedback in navigation for current section
- Scroll-triggered animations and state changes

### 3. Responsive Design Pattern
Mobile-first responsive approach:
- Tailwind CSS breakpoint system (sm, md, lg)
- Flexible grid layouts that adapt to screen size
- Typography scaling across devices
- Touch-friendly interaction zones

### 4. Animation & Motion Pattern
Subtle, purposeful animations:
- CSS transforms for parallax effects
- Hover states with scale and color transitions
- Staggered animations for lists and grids
- Performance-optimized animations using CSS transforms

## Technical Design Decisions

### 1. Single Page Application (SPA)
- **Rationale**: Portfolio content fits naturally in single page
- **Benefits**: Smooth transitions, fast navigation, cohesive experience
- **Trade-offs**: All content loads initially (acceptable for portfolio size)

### 2. Static Data Approach
- **Current**: Projects and skills hardcoded in components
- **Rationale**: Content changes infrequently, keeps complexity low
- **Future**: Could extract to JSON files or CMS if content grows

### 3. CSS-in-JS Alternative (Tailwind)
- **Pattern**: Utility-first CSS with Tailwind classes
- **Benefits**: Rapid development, consistent spacing, responsive utilities
- **Conventions**: Custom gradients and colors defined in Tailwind config

### 4. TypeScript Integration
- **Strict Mode**: Full type safety enabled
- **Interface-Driven**: All components have proper TypeScript interfaces
- **Build-Time Safety**: Catches errors before runtime

## Code Organization Patterns

### 1. File Structure Convention
```
src/
├── components/     # Reusable UI components
├── sections/       # Page section components
├── App.tsx        # Main application logic
├── main.tsx       # Application entry point
└── index.css      # Global styles
```

### 2. Import Conventions
- **Named Imports**: Prefer named imports for utilities
- **Default Imports**: Use for React components
- **Grouped Imports**: Third-party, then relative imports
- **Icon Imports**: Destructured from lucide-react

### 3. Component Structure Pattern
Each component follows consistent structure:
```typescript
// 1. Imports
import React from 'react';
import { IconName } from 'lucide-react';

// 2. Interface definition
interface ComponentProps {
  // props definition
}

// 3. Component implementation
const Component: React.FC<ComponentProps> = ({ props }) => {
  // 4. Hooks and state
  // 5. Event handlers
  // 6. Render logic
  return (
    // JSX
  );
};

// 7. Export
export default Component;
```

## Performance Patterns

### 1. Optimized Scroll Handling
- **Event Listeners**: Properly cleaned up in useEffect
- **Throttling**: Could benefit from scroll throttling for performance
- **Transform-Based**: Uses CSS transforms for smooth animations

### 2. Bundle Optimization
- **Vite Configuration**: Optimized build process
- **Tree Shaking**: Unused code automatically removed
- **Icon Optimization**: Lucide React provides tree-shakeable icons

### 3. Image Strategy
- **Current**: Minimal image usage to avoid optimization complexity
- **Future**: WebP format, lazy loading, responsive images

## User Experience Patterns

### 1. Progressive Disclosure
- **Hero First**: Immediate impact with hero section
- **Scroll Revelation**: Content revealed as user scrolls
- **Detailed Views**: Projects show more detail on interaction

### 2. Visual Hierarchy
- **Typography Scale**: Clear heading hierarchy (text-5xl to text-lg)
- **Color Significance**: Consistent color meaning across components
- **Spacing System**: Tailwind spacing scale for visual rhythm

### 3. Interaction Feedback
- **Hover States**: Clear visual feedback on interactive elements
- **Active States**: Navigation shows current section
- **Smooth Transitions**: All state changes have smooth animations

## Accessibility Patterns

### 1. Semantic HTML Structure
- **Proper Headings**: H1-H6 hierarchy maintained
- **Semantic Elements**: nav, section, article tags used appropriately
- **ARIA Labels**: Where semantic HTML isn't sufficient

### 2. Keyboard Navigation
- **Focus Management**: Proper tab order throughout site
- **Skip Links**: Could benefit from skip-to-content links
- **Button Accessibility**: All interactive elements are properly focusable

### 3. Screen Reader Support
- **Alt Text**: All images have descriptive alt text
- **ARIA Descriptions**: Complex interactions have ARIA descriptions
- **Content Structure**: Logical reading order for screen readers

## Future Architecture Considerations

### 1. Content Management
- **Static Files**: Move to JSON/Markdown files for easier updates
- **CMS Integration**: Headless CMS for non-technical content updates
- **Dynamic Loading**: Content loaded from API for scalability

### 2. Performance Optimizations
- **Code Splitting**: Route-based or component-based code splitting
- **Image Optimization**: Automated image processing pipeline
- **CDN Integration**: Asset delivery optimization

### 3. Enhanced Interactivity
- **Animation Library**: Framer Motion for complex animations
- **Intersection Observer**: More sophisticated scroll-based animations
- **3D Elements**: Three.js integration for advanced visual effects

### 4. Analytics & Optimization
- **Performance Monitoring**: Real user monitoring integration
- **A/B Testing**: Framework for testing different content approaches
- **User Analytics**: Privacy-respecting analytics implementation
