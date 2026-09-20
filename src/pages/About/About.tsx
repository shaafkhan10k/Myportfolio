import { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import Navbar from '../../components/Navbar';
import Antigravity from '../../components/Antigravity/Antigravity';
import Lanyard from '../../components/Lanyard/Lanyard';
import TextLoop from '../../components/TextLoop/TextLoop';
import './About.css';

interface InfoCardProps {
  label: string;
  tag?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

function InfoCard({ label, tag, children, fullWidth = false }: InfoCardProps) {
  return (
    <div className={`integration-card z-10 rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative anime-element ${fullWidth ? 'full-width' : ''}`}
      style={{ background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), #0c0d0d)' }}>
      <div
        className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl p-8 relative backdrop-blur overflow-hidden"
        style={{ background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222' }}>
        
        <div className="animated-dot bg-zinc-400 w-[5px] h-[5px] z-[2] rounded-full absolute"
          style={{ boxShadow: 'rgba(139, 92, 246, 0.8) 0px 0px 10px', right: '22px', top: '22px', animation: 'moveDot 6s linear infinite paused' }}>
        </div>

        {/* Restored Top Highlight Line */}
        <div className="absolute top-0 left-[20%] right-[20%] h-[1px] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:left-[5%] group-hover:right-[5%]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(187, 204, 215, 0.45), transparent)' }}>
        </div>

        <div className="blur-[10px] z-10 opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0"
          style={{ backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%' }}>
        </div>

        {/* Restored Original Card Header with White Dot */}
        <div className="about-card-header relative z-10">
          <div className="about-card-label-wrap">
            <span className="about-card-dot" />
            <h2 className="about-card-label" style={{ fontSize: '1.25em' }}>{label}</h2>
          </div>
          {tag && (
            <span className="about-card-tag" style={{ fontSize: '0.75em' }}>
              {tag}
            </span>
          )}
        </div>

        <div className="mt-4 text-[0.875em] text-zinc-400 relative z-10 font-['Kanit'] leading-relaxed about-card-body">
          {children}
        </div>

        {/* Animated Borders */}
        <div className="bg-slate-50/5 w-full h-[1px] absolute"
          style={{ top: '24px', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, rgb(29, 31, 31) 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}>
        </div>
        <div className="bg-slate-50/5 w-[1px] h-full absolute"
          style={{ left: '24px', top: '0%', background: 'linear-gradient(rgba(116, 116, 116, 0.3) 30%, rgb(34, 36, 36) 70%)', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)' }}>
        </div>
        <div className="bg-slate-50/5 w-full h-[1px] z-[1] absolute"
          style={{ bottom: '24px', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}>
        </div>
        <div className="bg-[#ffffff]/5 w-[1px] h-full absolute"
          style={{ right: '24px', top: '0%', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)' }}>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Anime.js entrance stagger */
  useEffect(() => {
    anime.timeline({ easing: 'easeOutExpo' }).add({
      targets: '.anime-element',
      translateY: [35, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(80),
    });
  }, []);

  return (
    <div className="about-page-wrapper" ref={containerRef}>
      <Navbar />

      {/* Ambient particle field */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Antigravity
          count={260}
          magnetRadius={6}
          ringRadius={9}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#ffffff"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      <div className="about-content">
        <h1 className="hero-heading anime-element">Behind the Creator</h1>

        {/* ── Outer 2-col: Lanyard Card | Content Cards ── */}
        <div className="about-main-grid">

          {/* LEFT — Sticky interactive Lanyard badge */}
          <div className="about-lanyard-side anime-element">
            <Lanyard
              position={[0, 0, 10]}
              gravity={[0, -40, 0]}
              fov={19}
              frontImage="/MyPic.png"
              imageFit="cover"
            />
          </div>

          {/* RIGHT — Clean minimal 2-column info cards */}
          <div className="about-text-side">

            {/* Short Bio (full-width) */}
            <InfoCard label="Short Bio" tag="Overview" fullWidth>
              <p>
                Hi, I'm Shaaf — an AI Engineer and 3D Creator based in Pakistan. I specialize
                in crafting intelligent agents, autonomous pipelines, and building immersive
                digital experiences that bridge the gap between design and complex engineering.
              </p>
            </InfoCard>

            {/* Core Skills */}
            <InfoCard label="Core Skills" tag="Stack">
              <ul className="about-skills-list">
                <li><span className="skill-bullet">✦</span> Artificial Intelligence & ML</li>
                <li><span className="skill-bullet">✦</span> Frontend — React, Three.js</li>
                <li><span className="skill-bullet">✦</span> 3D Modeling & Animation</li>
                <li><span className="skill-bullet">✦</span> Workflow Automation</li>
                <li><span className="skill-bullet">✦</span> Intelligent Agent Systems</li>
              </ul>
            </InfoCard>

            {/* How I Work */}
            <InfoCard label="How I Work" tag="Process">
              <p>
                Collaborative and iterative. I start by deeply understanding the core problem,
                move into rapid prototyping, then refine until the result is both functionally
                robust and visually stunning.
              </p>
            </InfoCard>

            {/* Experience */}
            <InfoCard label="Experience" tag="History">
              <p>
                Developed custom AI models, RAG pipelines, and deployed highly interactive
                web applications for forward-thinking clients worldwide.
              </p>
              <div className="about-action-row">
                <a href="#contact" className="about-link-action">
                  <span>View full resume</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </InfoCard>

            {/* Passions & Values */}
            <InfoCard label="Passions & Values" tag="Drive">
              <p>
                Driven by the belief that technology should empower human creativity. I thrive
                on pushing the boundaries of what's possible on the modern web.
              </p>
            </InfoCard>

            {/* Fun Facts */}
            <InfoCard label="Fun Facts" tag="Personal">
              <p>
                When not training neural nets or coding shaders, I'm experimenting with
                generative art, exploring interactive 3D physics, or hunting for the ultimate coffee.
              </p>
            </InfoCard>

            {/* Let's Connect */}
            <InfoCard label="Let's Connect" tag="Available">
              <p style={{ marginBottom: '1rem' }}>
                Always open to new projects, ambitious ideas, and opportunities.
              </p>
              <a href="mailto:hello@example.com" className="about-connect-btn">
                <span>hello@example.com</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </InfoCard>

          </div>
        </div>

        {/* ── TextLoop Wave Banner ── */}
        <div className="about-textloop-section anime-element">
          <TextLoop
            text="AI Engineer ✦ 3D Creator ✦ Automation ✦ Shaaf"
            shape="wave"
            speed={80}
            direction="forward"
            separator="✦"
            curviness={60}
            fontSize={42}
            fontWeight={800}
            letterSpacing={3}
            uppercase
            color="#D7E2EA"
            ribbon
            ribbonColor="#141822"
            ribbonWidth={90}
            pauseOnHover={false}
          />
        </div>
      </div>
    </div>
  );
}