import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";
import SocialFlipButton, { type SocialItem } from "./SocialFlipButton";
import GlassIcons, { type GlassIconsItem } from "./GlassIcons";

const items: SocialItem[] = [
  { letter: "H", icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/shaafkhan" },
  { letter: "I", icon: <FaGithub />, label: "GitHub", href: "https://github.com/shaafkhan10k" },
  { letter: "R", icon: <FaFileAlt />, label: "Resume", href: "/resume.pdf" },
  { letter: "E", icon: <FaEnvelope />, label: "Email", href: "mailto:shaafkhan10@gmail.com" },
];

const mobileItems: GlassIconsItem[] = [
  { icon: <FaLinkedin className="w-6 h-6" />, color: 'blue', label: 'LinkedIn', href: "https://linkedin.com/in/shaafkhan" },
  { icon: <FaGithub className="w-6 h-6" />, color: 'purple', label: 'GitHub', href: "https://github.com/shaafkhan10k" },
  { icon: <FaFileAlt className="w-6 h-6" />, color: 'orange', label: 'Resume', href: "/resume.pdf" },
  { icon: <FaEnvelope className="w-6 h-6" />, color: 'red', label: 'Email', href: "mailto:shaafkhan10@gmail.com" },
];

export default function SocialFooter() {
  return (
    <div className="flex justify-center py-12 relative z-10 w-full">
      {/* Desktop view (mouse hover works) */}
      <div className="hidden sm:block">
        <SocialFlipButton items={items} />
      </div>
      
      {/* Mobile view (touch-friendly icons) */}
      <div className="block sm:hidden w-full">
        {/* We use text-[10px] to scale down the entire em-based component, and flex to put them in one line */}
        <GlassIcons items={mobileItems} colorful className="!flex !flex-row !justify-center !gap-4 !p-0 text-[11px]" />
      </div>
    </div>
  );
}