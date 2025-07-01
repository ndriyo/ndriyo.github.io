# Technical Context: Digital Land of Darundriyos

## Technology Stack

### Core Framework
- **React 18.3.1**: Latest stable version with concurrent features
- **TypeScript 5.5.3**: Full type safety and modern JavaScript features
- **Vite 5.4.2**: Fast development server and optimized production builds

### Styling & UI
- **Tailwind CSS 3.4.1**: Utility-first CSS framework for rapid development
- **PostCSS 8.4.35**: CSS processing with autoprefixer support
- **Lucide React 0.344.0**: Modern, consistent icon library

### Development Tools
- **ESLint 9.9.1**: Code linting with TypeScript and React hooks support
- **TypeScript ESLint 8.3.0**: TypeScript-specific linting rules
- **Autoprefixer 10.4.18**: Automatic CSS vendor prefixing

### Build & Development
- **Vite Plugin React 4.3.1**: Optimized React support for Vite
- **Node.js**: Runtime environment (version to be confirmed)
- **npm**: Package manager for dependency management

## Project Structure

```
ndriyo.github.io/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── ProjectCard.tsx # Project showcase cards
│   │   └── SkillCard.tsx   # Skills display cards
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx # Landing/hero section
│   │   ├── ProjectsSection.tsx # Projects showcase
│   │   └── AboutSection.tsx # About/skills section
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles and Tailwind imports
│   └── vite-env.d.ts      # Vite environment types
├── memory-bank/           # Project documentation
├── public/               # Static assets
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript base configuration
├── tsconfig.app.json    # TypeScript app configuration
├── tsconfig.node.json   # TypeScript Node configuration
└── eslint.config.js     # ESLint configuration
```

## Development Configuration

### Vite Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### Key Configuration Details
- **ESLint**: Configured for TypeScript, React hooks, and React refresh
- **Tailwind**: Utility-first approach with custom gradient configurations
- **TypeScript**: Strict mode enabled for maximum type safety
- **Vite**: Optimized for React development with lucide-react excluded from optimization

## Development Environment

### Prerequisites
- Node.js (version to be confirmed - recommend LTS)
- npm (comes with Node.js)
- Modern browser with ES6+ support
- Git for version control

### Development Commands
```bash
npm install          # Install dependencies
npm run dev         # Start development server (http://localhost:5173)
npm run build       # Build for production
npm run lint        # Run ESLint checks
npm run preview     # Preview production build
```

### Development Workflow
1. **Local Development**: `npm run dev` for hot-reload development
2. **Code Quality**: ESLint runs automatically and can be triggered manually
3. **Type Checking**: TypeScript compilation happens in real-time
4. **Build Process**: Vite handles bundling and optimization
5. **Deployment**: GitHub Pages deployment from built files

## Technical Constraints & Considerations

### Performance Requirements
- **Bundle Size**: Keep JavaScript bundle under 500KB gzipped
- **Load Time**: Target sub-3 second initial load on 3G connections
- **Lighthouse Scores**: Aim for 90+ across all categories
- **Image Optimization**: Use WebP format where possible, lazy loading

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Graceful Degradation**: Core functionality works without JavaScript

### Accessibility Requirements
- **WCAG 2.1 AA Compliance**: Minimum accessibility standard
- **Keyboard Navigation**: Full site navigable via keyboard
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Minimum 4.5:1 ratio for text

### SEO Considerations
- **Meta Tags**: Comprehensive OpenGraph and Twitter Card support
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Performance**: Fast loading times for better search rankings
- **Mobile-First**: Responsive design for mobile search ranking

## Dependencies Management

### Production Dependencies
- **react**: Core React library
- **react-dom**: React DOM rendering
- **lucide-react**: Icon system

### Development Dependencies
- **Build Tools**: Vite, TypeScript compiler
- **Linting**: ESLint with React and TypeScript plugins
- **Styling**: Tailwind CSS with PostCSS processing

### Security Considerations
- Regular dependency updates for security patches
- No sensitive data in client-side code
- HTTPS deployment via GitHub Pages
- Content Security Policy considerations for production

## Deployment Strategy

### GitHub Pages Setup
- **Repository**: ndriyo.github.io (username.github.io format)
- **Branch**: Deploy from main branch
- **Build Process**: Manual or automated via GitHub Actions
- **Custom Domain**: Option to configure custom domain in future

### Deployment Checklist
1. Run production build (`npm run build`)
2. Test production build locally (`npm run preview`)
3. Commit and push to main branch
4. Verify deployment on GitHub Pages
5. Test across different devices and browsers

## Known Technical Debt & Future Improvements

### Current Limitations
- No automated testing setup
- Missing CI/CD pipeline
- No image optimization pipeline
- No analytics integration

### Planned Technical Enhancements
- **Testing**: Add Jest and React Testing Library
- **CI/CD**: GitHub Actions for automated testing and deployment
- **Performance**: Image optimization and lazy loading
- **Analytics**: Google Analytics or privacy-friendly alternative
- **SEO**: Dynamic meta tags and structured data
