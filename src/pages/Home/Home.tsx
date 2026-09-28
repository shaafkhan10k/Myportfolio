import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/HeroSection';
import MarqueeSection from '../../components/MarqueeSection';
import AboutSection from '../../components/AboutSection';
import ServicesSection from '../../components/ServicesSection';
import ProjectsSection from '../../components/ProjectsSection';
import SocialFooter from '../../components/SocialFooter';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shaaf Khan | AI Engineer &amp; Automation Developer</title>
        <meta
          name="description"
          content="Shaaf Khan builds RAG applications, n8n workflows, and computer-vision projects in Pakistan. Open to AI and automation roles in Islamabad/Rawalpindi and remote freelance work."
        />
        <link rel="canonical" href="https://shaafkhan.vercel.app/" />
        <meta property="og:title" content="Shaaf Khan | AI Engineer & Automation Developer" />
        <meta property="og:description" content="Shaaf Khan builds RAG applications, n8n workflows, and computer-vision projects. Open to AI/automation roles and remote freelance projects." />
        <meta property="og:url" content="https://shaafkhan.vercel.app/" />
      </Helmet>

      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SocialFooter />
    </>
  );
}
