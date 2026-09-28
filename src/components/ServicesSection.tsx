import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'AI & RAG Applications',
    description:
      'Plan and build retrieval and language-model features around a clear source of information and a defined user need. Tools include LangChain, ChromaDB, and Hugging Face.',
  },
  {
    number: '02',
    name: 'Workflow Automation',
    description:
      'Connect forms, review steps, and email actions with n8n. Keep people involved where a decision needs human judgment.',
  },
  {
    number: '03',
    name: 'Computer Vision',
    description:
      'Build image-detection and analysis projects using YOLOv5 and OpenCV. Each project should explain its data source and limits.',
  },
  {
    number: '04',
    name: 'Web Development',
    description:
      'Create web experiences with React or WordPress based on the project needs. See the Shakir Bridal Couture project for a live WordPress example.',
  },
  {
    number: '05',
    name: 'Game AI',
    description:
      'AI and reinforcement-learning systems in Unity. Currently applied in the final-year project The Rise of Machines.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Areas I work in
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i !== SERVICES.length - 1
                    ? '1px solid rgba(12, 12, 12, 0.15)'
                    : 'none',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
              }}
            >
              <span
                className="font-black flex-shrink-0"
                style={{
                  color: '#0C0C0C',
                  fontSize: 'clamp(3rem, 10vw, 140px)',
                  lineHeight: 1,
                }}
              >
                {service.number}
              </span>

              <div className="flex flex-col gap-3 md:gap-4 pt-2 md:pt-4">
                <h3
                  className="font-medium uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.6,
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
