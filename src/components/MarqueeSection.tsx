import { useEffect, useRef, useState } from 'react';

// All project images – served from /public so they work in both dev and prod
const ALL_IMAGES = [
  '/projects/kidney-stone-detection/Image1.png',
  '/projects/kidney-stone-detection/Image2.png',
  '/projects/kidney-stone-detection/Image3.png',
  '/projects/the-rise-of-machines/Image1.jpeg',
  '/projects/the-rise-of-machines/Image2.jpeg',
  '/projects/the-rise-of-machines/Image3.jpeg',
  '/projects/shakir-bridal-couture/Image1.png',
  '/projects/shakir-bridal-couture/Image2.png',
  '/projects/shakir-bridal-couture/Image3.png',
  '/projects/cartoon-emotion-detection/Image1.png',
  '/projects/cartoon-emotion-detection/Image2.png',
  '/projects/cartoon-emotion-detection/Image3.png',
  '/projects/hr-recruitment-automation/Image1.png',
  '/projects/hr-recruitment-automation/Image2.png',
  '/projects/hr-recruitment-automation/Image3.png',
];

const ROW_1 = ALL_IMAGES.slice(0, 8);
const ROW_2 = ALL_IMAGES.slice(7);

const ROW_1_TRIPLED = [...ROW_1, ...ROW_1, ...ROW_1];
const ROW_2_TRIPLED = [...ROW_2, ...ROW_2, ...ROW_2];

function Row({
  images,
  offset,
  direction,
}: {
  images: string[];
  offset: number;
  direction: 1 | -1;
}) {
  const translate = direction === 1 ? offset - 200 : -(offset - 200);

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${translate}px)`,
          willChange: 'transform',
        }}
      >
        {images.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: '420px', height: '270px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const value =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        <Row images={ROW_1_TRIPLED} offset={offset} direction={1} />
        <Row images={ROW_2_TRIPLED} offset={offset} direction={-1} />
      </div>
    </section>
  );
}
