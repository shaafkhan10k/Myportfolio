import Seo from '../../components/Seo';
import HeroSection from '../../components/HeroSection';
import MarqueeSection from '../../components/MarqueeSection';
import AboutSection from '../../components/AboutSection';
import ServicesSection from '../../components/ServicesSection';
import ProjectsSection from '../../components/ProjectsSection';
import SocialFooter from '../../components/SocialFooter';

export default function Home() {
  return (
    <>
      <Seo path="/" />

      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SocialFooter />
    </>
  );
}
