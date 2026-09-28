interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shaafkhan',
    icon: (size: number) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/shaafkhan10k',
    icon: (size: number) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },

  {
    label: 'Email',
    href: 'mailto:shaafkhan10@gmail.com',
    icon: (size: number) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function SocialLinks({ className = '', iconSize = 20 }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 sm:gap-6 ${className}`}>
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="group flex items-center gap-2 text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-all duration-300"
          title={link.label}
        >
          <span className="group-hover:scale-110 transition-transform duration-300 block">
            {link.icon(iconSize)}
          </span>
          <span className="text-xs uppercase tracking-widest font-medium hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 transition-transform">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
}
