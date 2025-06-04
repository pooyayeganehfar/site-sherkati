'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link
      href={href}
      className={`
        relative px-4 py-2 rounded-xl transition-all duration-300
        ${isActive 
          ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
          : 'hover:bg-white/5 text-gray-300 hover:text-white'
        }
      `}
    >
      {children}
      {isActive && (
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-500/20 animate-pulse" />
      )}
    </Link>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
      >
        <span className="sr-only">منو</span>
        <div className="w-6 flex flex-col gap-1">
          <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-2 bg-white/5 p-1.5 rounded-2xl backdrop-blur">
        {[
          ['خانه', '/'],
          ['درباره ما', '/about'],
          ['خدمات', '/services'],
          ['تماس', '/contact'],
        ].map(([title, url]) => (
          <NavLink key={url} href={url}>{title}</NavLink>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" 
               style={{ top: '64px' }}
               onClick={() => setIsOpen(false)} 
          />
          <div className="fixed left-4 right-4 top-[4.5rem] z-50 bg-gray-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-4 transform transition-all duration-300">
            <div className="flex flex-col gap-2">
              {[
                ['خانه', '/'],
                ['درباره ما', '/about'],
                ['خدمات', '/services'],
                ['تماس', '/contact'],
              ].map(([title, url]) => (
                <NavLink key={url} href={url}>
                  <span onClick={() => setIsOpen(false)} className="block w-full text-center py-2">
                    {title}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
