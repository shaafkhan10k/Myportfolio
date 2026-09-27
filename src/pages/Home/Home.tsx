import HeroSection from '../../components/HeroSection';
import MarqueeSection from '../../components/MarqueeSection';
import AboutSection from '../../components/AboutSection';
import ServicesSection from '../../components/ServicesSection';
import ProjectsSection from '../../components/ProjectsSection';
import SocialLinks from '../../components/SocialLinks';


export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
       <div
        className="flex justify-center py-16"
        style={{ background: '#0C0C0C', position: 'relative', zIndex: 20 }}
      >
        <SocialLinks iconSize={22} />
      </div>
    </>
  );
}
