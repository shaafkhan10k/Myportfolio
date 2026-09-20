import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  images: {
    col1: [string, string];
    col2: string;
  };
}

// NOTE: placeholder images below -- swap these for real screenshots of each project.
const PLACEHOLDER_1 = 'https://placehold.co/600x400/1a1a1a/D7E2EA?text=Screenshot';
const PLACEHOLDER_2 = 'https://placehold.co/600x500/1a1a1a/D7E2EA?text=Screenshot';
const PLACEHOLDER_3 = 'https://placehold.co/800x900/1a1a1a/D7E2EA?text=Screenshot';

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Personal',
    name: 'Context-Aware RAG Chatbot',
    images: {
      col1: [PLACEHOLDER_1, PLACEHOLDER_2],
      col2: PLACEHOLDER_3,
    },
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Customer Churn Prediction',
    images: {
      col1: [PLACEHOLDER_1, PLACEHOLDER_2],
      col2: PLACEHOLDER_3,
    },
  },
  {
    number: '03',
    category: 'Personal',
    name: 'Mental Health Support Chatbot',
    images: {
      col1: [PLACEHOLDER_1, PLACEHOLDER_2],
      col2: PLACEHOLDER_3,
    },
  },
  {
    number: '04',
    category: 'Personal',
    name: 'Kidney Stone Detection System',
    images: {
      col1: [PLACEHOLDER_1, PLACEHOLDER_2],
      col2: PLACEHOLDER_3,
    },
  },
  {
    number: '05',
    category: 'FYP',
    name: 'The Rise of Machines',
    images: {
      col1: [PLACEHOLDER_1, PLACEHOLDER_2],
      col2: PLACEHOLDER_3,
    },
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project;
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="h-[85vh] flex items-center sticky"
      style={{ top: `${24 + index * 28}px` }}
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
          background: '#0C0C0C',
          border: '2px solid #D7E2EA',
        }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 mb-6 md:mb-10 flex-wrap">
          <div className="flex items-center gap-4 md:gap-8">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="uppercase tracking-widest text-[#D7E2EA]/60 text-xs sm:text-sm">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </span>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        {/* Bottom row: image grid */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3" style={{ width: '40%' }}>
            <img
              src={project.images.col1[0]}
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images.col1[1]}
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div style={{ width: '60%' }}>
            <img
              src={project.images.col2}
              alt={`${project.name} main preview`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20"
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
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
