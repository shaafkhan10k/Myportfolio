import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GitHubButton from './LiveProjectButton';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  number: string;
  category: string;
  name: string;
  github: string;
  role?: string;
  description?: string;
  images: {
    col1: [string, string];
    col2: string;
  };
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Computer Vision',
    name: 'Kidney Stone Detection',
    role: 'Developer',
    description: 'YOLOv5 computer-vision project including front-end and back-end work.',
    github: 'https://github.com/anas-rajpout07/Kidney-Stone-Detection',
    images: {
      col1: [
        '/projects/kidney-stone-detection/Image1.png',
        '/projects/kidney-stone-detection/Image2.png',
      ],
      col2: '/projects/kidney-stone-detection/Image3.png',
    },
  },
  {
    number: '02',
    category: 'Game / AI (In Progress)',
    name: 'The Rise of Machines',
    role: 'Developer',
    description: 'AI-driven 3D survival game featuring AI/ML and reinforcement-learning enemy behavior.',
    github: '',
    images: {
      col1: [
        '/projects/the-rise-of-machines/Image1.jpeg',
        '/projects/the-rise-of-machines/Image2.jpeg',
      ],
      col2: '/projects/the-rise-of-machines/Image3.jpeg',
    },
  },
  {
    number: '03',
    category: 'Web / Client',
    name: 'Shakir Bridal Couture',
    role: 'Web Developer',
    description: 'WordPress website build.',
    github: 'https://shakirbridalcouture.com/',
    images: {
      col1: [
        '/projects/shakir-bridal-couture/Image1.png',
        '/projects/shakir-bridal-couture/Image2.png',
      ],
      col2: '/projects/shakir-bridal-couture/Image3.png',
    },
  },
  {
    number: '04',
    category: 'Computer Vision',
    name: 'Cartoon Emotion Detection',
    role: 'Developer',
    description: 'Emotion detection system.',
    github: 'https://github.com/shaafkhan10k/Cartoon_Emotion_Detection',
    images: {
      col1: [
        '/projects/cartoon-emotion-detection/Image1.png',
        '/projects/cartoon-emotion-detection/Image2.png',
      ],
      col2: '/projects/cartoon-emotion-detection/Image3.png',
    },
  },
  {
    number: '05',
    category: 'Workflow Automation',
    name: 'HR Recruitment Automation',
    role: 'Automation Developer',
    description: 'n8n workflow with Google Form input, shortlisting, email, and a human-in-the-loop voice agent.',
    github: 'https://github.com/shaafkhan10k/N8N_Workflows/tree/main/HR%20Recruitment%20Workflow',
    images: {
      col1: [
        '/projects/hr-recruitment-automation/Image1.png',
        '/projects/hr-recruitment-automation/Image2.png',
      ],
      col2: '/projects/hr-recruitment-automation/Image3.png',
    },
  },
];

// This offset is used for BOTH the ScrollTrigger "start" position AND the
// card's maxHeight — they MUST stay in sync, or the crop bug comes back.
// It only works because the card sits flush at the top of its wrapper
// (no vertical centering) — see ".project-item" below.
const BASE_TOP = 72;
const STACK_STEP = 24;
const MAX_STACK_INDEX = 3; // stop increasing the offset after a few cards
const BOTTOM_GAP = 32; // breathing room at the bottom of the viewport

function getPinTop(index: number) {
  return BASE_TOP + Math.min(index, MAX_STACK_INDEX) * STACK_STEP;
}

function ProjectCardInner({ project, index }: { project: Project; index: number }) {
  const pinTop = getPinTop(index);

  return (
    <div
      className="project-card w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col"
      style={{
        background: '#0C0C0C',
        transformOrigin: 'top center',
        willChange: 'transform',
        height: `calc(100dvh - ${pinTop}px - ${BOTTOM_GAP}px)`,
        overflow: 'hidden',
      }}
    >
      {/* Header — fixed height, never shrinks */}
      <div className="flex items-center justify-between gap-4 mb-4 md:mb-6 flex-wrap flex-shrink-0">
        <div className="flex items-center gap-3 md:gap-6">
          <span
            className="font-black text-[#D7E2EA] leading-none"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 90px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col gap-1">
            <span className="uppercase tracking-widest text-[#D7E2EA]/60 text-xs sm:text-sm">
              {project.category}
            </span>
            <span className="text-[#D7E2EA] font-medium uppercase tracking-wide text-lg sm:text-2xl md:text-3xl">
              {project.name}
            </span>
            {project.description && (
              <p className="text-[#D7E2EA]/80 text-sm mt-1 max-w-md hidden sm:block">
                {project.role && <span className="font-semibold text-[#D7E2EA]">{project.role} &middot; </span>}
                {project.description}
              </p>
            )}
          </div>
        </div>
        <GitHubButton href={project.github} label={project.github?.includes('github.com') ? 'GitHub' : 'Website'} />
      </div>

      {/* Image grid — flexes to fill whatever height remains under the
          header. flex-1 + min-h-0 lets it shrink instead of overflowing
          the card's maxHeight. */}
      <div className="flex gap-3 flex-1 min-h-0">
        <div className="flex flex-col gap-3 h-full min-h-0" style={{ width: '40%' }}>
          <img
            src={project.images.col1[0]}
            alt={`${project.name} preview 1`}
            loading="lazy"
            className="w-full flex-1 min-h-0 object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px]"
          />
          <img
            src={project.images.col1[1]}
            alt={`${project.name} preview 2`}
            loading="lazy"
            className="w-full flex-[1.4] min-h-0 object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px]"
          />
        </div>
        <div className="h-full min-h-0" style={{ width: '60%' }}>
          <img
            src={project.images.col2}
            alt={`${project.name} main preview`}
            loading="lazy"
            className="w-full h-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px]"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.project-item');

      items.forEach((item, i) => {
        const card = item.querySelector<HTMLElement>('.project-card');
        if (!card) return;

        const pinTop = getPinTop(i);

        ScrollTrigger.create({
          trigger: item,
          start: `top ${pinTop}px`,
          endTrigger: section,
          end: 'bottom bottom',
          pin: card,
          pinSpacing: false,
        });

        const targetScale = 1 - (items.length - 1 - i) * 0.03;
        if (i < items.length - 1) {
          gsap.fromTo(
            card,
            { scale: 1 },
            {
              scale: targetScale,
              ease: 'none',
              scrollTrigger: {
                trigger: items[i + 1],
                start: 'top bottom',
                end: `top ${pinTop}px`,
                scrub: true,
              },
            }
          );
        }
      });

      // Safety net: recalc pin positions once lazy images have actually
      // loaded, in case anything shifts layout after the first pass.
      const imgs = Array.from(section.querySelectorAll('img'));
      Promise.all(
        imgs.map(img =>
          img.complete
            ? Promise.resolve()
            : new Promise<void>(resolve => {
                img.addEventListener('load', () => resolve(), { once: true });
                img.addEventListener('error', () => resolve(), { once: true });
              })
        )
      ).then(() => ScrollTrigger.refresh());
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20"
      style={{ background: '#0C0C0C' }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <div
            key={project.number}
            className="project-item"
            /* NOTE: no flex/alignItems centering here anymore. The card
               must sit flush at the top of this box so its on-screen
               pinned position is exactly `pinTop` — that's what makes
               the maxHeight calc in ProjectCardInner actually correct. */
            style={{ height: '75vh', position: 'relative' }}
          >
            <ProjectCardInner project={project} index={i} />
          </div>
        ))}
      </div>

      <div style={{ height: '30vh' }} />
    </section>
  );
}