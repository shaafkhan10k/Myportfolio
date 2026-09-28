import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";
import SocialFlipButton, { type SocialItem } from "./SocialFlipButton";

const items: SocialItem[] = [
  { letter: "H", icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/shaafkhan" },
  { letter: "I", icon: <FaGithub />, label: "GitHub", href: "https://github.com/shaafkhan10k" },
  { letter: "R", icon: <FaFileAlt />, label: "Resume", href: "/resume.pdf" },
  { letter: "E", icon: <FaEnvelope />, label: "Email", href: "mailto:shaafkhan10@gmail.com" },
];

export default function SocialFooter() {
  return (
    <div className="flex justify-center py-12 relative z-10">
      <SocialFlipButton items={items} />
    </div>
  );
}