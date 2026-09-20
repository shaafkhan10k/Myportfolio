import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'AI & LLM Development',
    description:
      'RAG chatbots, multi-agent systems, and LLM integrations built with LangChain, ChromaDB, and the Anthropic and OpenAI APIs.',
  },
  {
    number: '02',
    name: 'Automation & Workflows',
    description:
      'n8n pipelines and API integrations that streamline content generation, reporting, and business processes for clients.',
  },
  {
    number: '03',
    name: 'Computer Vision',
    description:
      'Object detection and image analysis pipelines using YOLOv5 and OpenCV, from data preprocessing to model evaluation.',
  },
  {
    number: '04',
    name: 'Machine Learning & MLOps',
    description:
      'End-to-end ML pipelines with Scikit-learn and PyTorch, deployed with Docker, DVC, and AWS for production use.',
  },
  {
    number: '05',
    name: 'Game AI & Web Development',
    description:
      'Unity-based AI systems with reinforcement learning agents, plus custom WordPress and code-based websites.',
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
          Services
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
