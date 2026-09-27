import { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import Navbar from '../../components/Navbar';
import MagicBento, { BentoCardItem } from '../../components/MagicBento/MagicBento';
import './Skills.css';
import SocialLinks from '../../components/SocialLinks';
const skillCards: BentoCardItem[] = [
  {
    label: 'Game AI & RL',
    title: 'Game AI & Reinforcement Learning',
    description: '1. Reinforcement learning for game AI (PPO, Unity ML-Agents)\n2. NPC behavior and decision-making systems in Unity and Blender'
  },
  {
    label: 'Web Technologies',
    title: 'Full-Stack & Web Development',
    description: '1. AI-powered web interfaces (React, TypeScript)\n2. Full-stack web development\n3. WordPress and WooCommerce builds with payment gateway integration'
  },
  {
    label: 'Agentic AI & Workflows',
    title: 'Agentic AI & Automation',
    description: '1. Multi-agent pipelines with LangChain and CrewAI\n2. Workflow automation and agent orchestration with n8n and Make.com\n3. RAG pipelines for retrieval-augmented LLM apps\n4. NLP and LLM application development'
  },
  {
    label: 'Machine Learning & NLP',
    title: 'ML, CV & Model Development',
    description: '1. Deep learning model training and architecture design (PyTorch)\n2. Computer vision: object detection and segmentation (OpenCV, YOLOv5)\n3. Custom LLM fine-tuning\n4. Statistical modeling and pattern recognition\n5. DSP and speech processing (coursework)'
  },
  {
    label: 'QA & Engineering',
    title: 'Deployment & MLOps',
    description: '1. Model deployment and serving (FastAPI)\n2. MLOps: lifecycle, monitoring, and production performance\n3. QA and testing tooling'
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    anime.timeline({ easing: 'easeOutExpo' })
      .add({
        targets: '.skills-header',
        translateY: [-40, 0],
        opacity: [0, 1],
        duration: 1000,
      })
      .add({
        targets: '.skills-bento-wrapper',
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=600');
  }, []);

  return (
    <div className="skills-page-wrapper" ref={containerRef}>
      <Navbar />

      <div className="skills-content">
        <h1 className="hero-heading skills-header font-black uppercase tracking-tight leading-none text-[10vw] sm:text-[8vw] md:text-[6vw] mb-4">
          My Expertise
        </h1>
        <p className="skills-header text-[#D7E2EA] font-light uppercase tracking-wide opacity-80 max-w-2xl mb-12">
          Leveraging cutting-edge technology to craft intelligent and unforgettable digital experiences.
        </p>

                <div className="skills-bento-wrapper opacity-0">
          <MagicBento
            cards={skillCards}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>

        <div className="flex justify-center mt-16 pb-4">
          <SocialLinks iconSize={22} />
        </div>
      </div>
    </div>
  );
}
