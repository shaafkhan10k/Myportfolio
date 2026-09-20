# Project Context: Jack 3D Creator Portfolio

This document provides a comprehensive overview of the portfolio project, its tech stack, structure, theme, and styling conventions. It serves as context for any AI or developer working on the project.

## 1. Project Overview
- **Name**: jack-3d-creator-portfolio
- **Type**: Web Portfolio (Single Page Application with Routing)
- **Goal**: To showcase the creator's portfolio with high-end 3D graphics, animations, and a modern aesthetic.

## 2. Tech Stack & Dependencies
- **Core Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: `react-router-dom` v7
- **Styling**: Tailwind CSS + standard CSS modules/files
- **3D Rendering & WebGL**: 
  - `three` (v0.186.0)
  - `@react-three/fiber` (React wrapper for Three.js)
  - `@react-three/drei` (Useful helpers for R3F)
  - `@react-three/rapier` (3D physics)
  - `meshline`
- **Animations**:
  - `framer-motion` (Declarative React animations)
  - `gsap` (Advanced tweening and scroll animations)
  - `animejs` 
- **Icons**: `lucide-react`

## 3. Theming & Styling
- **Base Background**: Deep dark theme. The primary background color is `#0C0C0C` (set in both `App.tsx` and `index.css`).
- **Typography**: 
  - The main font family is **Kanit** (`font-family: 'Kanit', sans-serif;`).
  - Configured in `tailwind.config.js` as `font-kanit`.
- **Key Visual Elements**:
  - **Hero Headings**: Uses a metallic/silver gradient: `linear-gradient(180deg, #646973 0%, #bbccd7 100%)`. The text is clipped to the background (`-webkit-background-clip: text`) to create a metallic text effect.
  - Overall aesthetic is modern, dark mode by default, emphasizing smooth animations and interactive 3D elements.

## 4. Project Architecture
The project follows a standard React/Vite structure, mainly centralized within the `src` directory.

### Directory Structure
```
src/
├── assets/          # Static assets (images, 3d models, etc.)
├── components/      # Reusable UI and 3D components
│   ├── AboutSection.tsx
│   ├── AnimatedText.tsx
│   ├── Antigravity/ # 3D/Animation specific component
│   ├── ContactButton.tsx
│   ├── FadeIn.tsx
│   ├── HeroSection.tsx
│   ├── IntegrationsSection.tsx
│   ├── Lanyard/     # 3D interactive component
│   ├── LiveProjectButton.tsx
│   ├── Magnet.tsx
│   ├── MarqueeSection.tsx
│   ├── Navbar.tsx
│   ├── ProfileCard/ 
│   ├── ProjectsSection.tsx
│   ├── ServicesSection.tsx
│   └── TextLoop/
├── pages/           # Route-level page components
│   ├── Home/
│   ├── About/
│   ├── Skills/
│   ├── Contact/
│   └── NotFound/
├── App.tsx          # Main application router and layout wrapper
├── index.css        # Global CSS, Tailwind imports, and base styles
├── main.tsx         # React entry point
└── global.d.ts      # TypeScript global declarations
```

## 5. Development Guidelines
- **Adding New Pages**: Create a new folder inside `src/pages/`, export the default component, and register the route in `src/App.tsx`.
- **Styling Components**: Prefer Tailwind CSS classes. Use CSS files (like `index.css` or component-specific CSS) only for complex animations, pseudo-elements, or specific WebKit properties (like text gradients) that are cumbersome in Tailwind.
- **Animations**: Use Framer Motion for UI transitions (fade-ins, layout changes). Use GSAP for complex timelines. Use React Three Fiber for anything within the WebGL `<Canvas>`.
- **Responsiveness**: Ensure all components use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) to adapt to mobile and desktop screens.
