'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/',          label: 'Dashboard' },
  { href: '/groups',   label: 'Groups' },
  { href: '/matches',  label: 'Matches' },
  { href: '/players',  label: 'Top Scorers' },
  { href: '/scorrito', label: '⚽ Scorrito' },
];

export default function Nav() {
  const path = usePathname();
  return (
    <header style={{ borderBottom: '1px solid #1a4027', background: '#0a1a0f' }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 flex-wrap">
        <span className="text-green-400 font-bold text-lg mr-4">
          🏆 WC26
        </span>
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav-link${path === l.href ? ' active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
