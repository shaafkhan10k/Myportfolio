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
  images: {
    col1: [string, string];
    col2: string;
  };
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    github: 'https://github.com/shaafkhan10k',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    github: 'https://github.com/shaafkhan10k',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    github: 'https://github.com/shaafkhan10k',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
  {
    number: '04',
    category: 'Personal',
    name: 'Kidney Stone Detection',
    github: 'https://github.com/shaafkhan10k',
    images: {
      col1: [
        'https://placehold.co/600x400/1a1a1a/D7E2EA?text=Screenshot',
        'https://placehold.co/600x500/1a1a1a/D7E2EA?text=Screenshot',
      ],
      col2: 'https://placehold.co/800x900/1a1a1a/D7E2EA?text=Screenshot',
    },
  },
  {
    number: '05',
    category: 'FYP',
    name: 'The Rise of Machines',
    github: 'https://github.com/shaafkhan10k',
    images: {
      col1: [
        'https://placehold.co/600x400/1a1a1a/D7E2EA?text=Screenshot',
        'https://placehold.co/600x500/1a1a1a/D7E2EA?text=Screenshot',
      ],
      col2: 'https://placehold.co/800x900/1a1a1a/D7E2EA?text=Screenshot',
    },
  },
];

function ProjectCardInner({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="project-card w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
      style={{
        background: '#0C0C0C',
        transformOrigin: 'top center',
        willChange: 'transform',
        /* offset each card down so they visually stack */
        marginTop: `${index * 28}px`,
      }}
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
            <span className="text-[#D7E2EA] font-medium uppercase tracking-wide text-lg sm:text-2xl md:text-3xl">
              {project.name}
            </span>
          </div>
        </div>
        <GitHubButton href={project.github} />
      </div>

      {/* Image grid */}
      <div className="flex gap-3">
        <div className="flex flex-col gap-3" style={{ width: '40%' }}>
          <img
            src={project.images.col1[0]}
            alt={`${project.name} preview 1`}
            loading="lazy"
            className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: 'clamp(130px, 16vw, 230px)' }}
          />
          <img
            src={project.images.col1[1]}
            alt={`${project.name} preview 2`}
            loading="lazy"
            className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: 'clamp(160px, 22vw, 340px)' }}
          />
        </div>
        <div style={{ width: '60%' }}>
          <img
            src={project.images.col2}
            alt={`${project.name} main preview`}
            loading="lazy"
            className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
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

    // Wait a tick for ScrollSmoother to be ready
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.project-item');

      items.forEach((item, i) => {
        const card = item.querySelector<HTMLElement>('.project-card');
        if (!card) return;

        // Pin each item so the card stacks on top of the previous ones
        ScrollTrigger.create({
          trigger: item,
          start: `top ${96 + i * 28}px`, // 96px = ~top-24 in px
          endTrigger: section,
          end: 'bottom bottom',
          pin: card,
          pinSpacing: false,
        });

        // Scale this card down as the NEXT card slides over it
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
                end: `top ${96 + i * 28}px`,
                scrub: true,
              },
            }
          );
        }
      });
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

      {/* Each item wrapper gives ScrollTrigger a trigger element with real height */}
      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <div
            key={project.number}
            className="project-item"
            /* 85vh height so each card occupies a screen before the next pin triggers */
            style={{ height: '85vh', display: 'flex', alignItems: 'center' }}
          >
            <ProjectCardInner project={project} index={i} />
          </div>
        ))}
      </div>

      {/* Extra scroll space so last card stays visible */}
      <div style={{ height: '40vh' }} />

   
    </section>
  );
}
