import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  return (
    <FadeIn delay={0} y={-20} as="nav" className="relative z-50">
      <div className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-50">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </FadeIn>
  );
}
