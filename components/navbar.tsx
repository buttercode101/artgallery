'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Artists', '/artists'],
  ['Exhibitions', '/exhibitions'],
  ['Visit', '/visit'],
  ['Contact', '/contact']
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'glass py-4' : 'py-6'}`}>
        <div className="mx-auto flex w-[min(1100px,92vw)] items-center justify-between">
          <Link href="/" className="text-sm uppercase tracking-[0.35em]">ark. contemporary</Link>
          <nav className="hidden gap-8 md:flex">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm hover:text-terracotta transition-colors">{label}</Link>
            ))}
          </nav>
          <button className="md:hidden text-sm" onClick={() => setOpen((v) => !v)}>Menu</button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/95 text-bg md:hidden"
          >
            <div className="pt-28 px-10 flex flex-col gap-6">
              {links.map(([label, href], i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={href} className="text-3xl font-serif italic" onClick={() => setOpen(false)}>{label}</Link>
                </motion.div>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
