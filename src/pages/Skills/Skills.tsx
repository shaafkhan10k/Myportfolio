import Seo from '../../components/Seo';
import { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import Navbar from '../../components/Navbar';
import MagicBento, { BentoCardItem } from '../../components/MagicBento/MagicBento';
import './Skills.css';
import SocialFooter from '../../components/SocialFooter';

const skillCards: BentoCardItem[] = [
  {
    label: 'AI/ML & RAG',
    title: 'AI, Machine Learning & RAG',
    description: '1. Machine learning & deep learning (Python, PyTorch, TensorFlow, scikit-learn)\n2. Retrieval-Augmented Generation (RAG) pipelines\n3. NLP & Hugging Face Transformers\n4. Agent workflows (CrewAI, LangChain)'
  },
  {
    label: 'Computer Vision',
    title: 'Computer Vision',
    description: '1. Object detection & image processing (YOLOv5, OpenCV)\n2. Image analysis pipelines from preprocessing to evaluation\n3. Segmentation & DSP (Coursework)'
  },
  {
    label: 'Workflow Automation',
    title: 'Workflow Automation',
    description: '1. n8n workflows for form intake, task routing, and email updates\n2. Human-in-the-loop review steps\n3. API integrations and agent orchestration'
  },
  {
    label: 'Web Development',
    title: 'Web Development',
    description: '1. Frontend development (React, TypeScript, HTML/CSS/JS)\n2. Backend services (FastAPI, Flask)\n3. WordPress websites'
  },
  {
    label: 'Tools & Methods',
    title: 'Tools & Methods',
    description: '1. Vector databases (ChromaDB, FAISS)\n2. Model serving & containerisation (FastAPI, Docker)\n3. Cloud & version control (AWS, Git/GitHub)'
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
      <Seo path="/skills" />
      <Navbar />

      <div className="skills-content">
        <h1 className="hero-heading skills-header font-black uppercase tracking-tight leading-none text-[10vw] sm:text-[8vw] md:text-[6vw] mb-4">
          AI &amp; Automation
        </h1>
        <p className="skills-header text-[#D7E2EA] font-light uppercase tracking-wide opacity-80 max-w-2xl mb-12">
          My work spans AI, automation, computer vision, and web development. Project links show where each skill has been applied. Coursework areas are labeled separately.
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

        <SocialFooter />
      </div>
    </div>
  );
}
