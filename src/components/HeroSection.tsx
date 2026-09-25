import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import Navbar from './Navbar';

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      <Navbar />

      {/* TOP SECTION: H1 and Tagline/Button area */}
      {/* Mobile: no top margin so text is near the top. Desktop: push down with margin */}
      <div className="mt-2 sm:mt-20 md:mt-24 px-6 sm:px-16 md:px-20 z-20 relative">
        <FadeIn delay={0.15} y={40} className="overflow-hidden">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[21vw] sm:text-[12.5vw] md:text-[13.5vw] lg:text-[14vw] text-center sm:text-left">
            <span className="block sm:inline">Hi, i&apos;m </span>
            <span className="block sm:inline">shaaf</span>
          </h1>
        </FadeIn>

        {/* Desktop Tagline & Button Row (Hidden on mobile) */}
        <div className="hidden sm:flex items-center justify-between mt-6">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[280px]"
              style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.5rem)' }}
            >
              an ai engineer specializing in automation, agents, and game ai
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>

        {/* Mobile Tagline (Hidden on desktop) */}
        <FadeIn delay={0.35} y={20} className="mt-3 sm:hidden flex justify-center">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[260px] text-center"
            style={{ fontSize: 'clamp(0.85rem, 3.5vw, 1.2rem)' }}
          >
            an ai engineer specializing in automation, agents, and game ai
          </p>
        </FadeIn>
      </div>

      {/* Hero Portrait:
          - Mobile: position from bottom so character is higher up (bottom: 12vh), centered horizontally, 85vw wide
          - Desktop: sits at the very bottom, centered, 35vw wide
          Outer div owns the absolute position. Magnet only controls the hover translate. */}
      <div
        className="sm:hidden"
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '12vh',
          zIndex: 10,
          width: '85vw',
          maxWidth: '340px',
          pointerEvents: 'none',
        }}
      >
        <Magnet
          padding={80}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full h-full pointer-events-auto"
        >
          <FadeIn delay={0.6} y={30}>
            <img
              src={PORTRAIT_URL}
              alt="Shaaf Khan portrait"
              className="w-full h-auto"
            />
          </FadeIn>
        </Magnet>
      </div>

      {/* Desktop portrait: sits at bottom center */}
      <div
        className="hidden sm:block"
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 0,
          zIndex: 10,
          width: 'clamp(320px, 35vw, 520px)',
          pointerEvents: 'none',
        }}
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full h-full pointer-events-auto"
        >
          <FadeIn delay={0.6} y={30}>
            <img
              src={PORTRAIT_URL}
              alt="Shaaf Khan portrait"
              className="w-full h-auto"
            />
          </FadeIn>
        </Magnet>
      </div>

      {/* BOTTOM ROW: Mobile Contact Button (Hidden on desktop) */}
      <div className="flex justify-center items-end pb-5 px-6 relative z-20 mt-auto sm:hidden">
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
