import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import invenzaLogo from '../../assets/invenza-bg.png';

const links = [
  { label: 'Overview', href: '#features' },
  { label: 'Engineering', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Download', href: '#download' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-[#FFFFFF]/80 backdrop-blur-xl border-b border-black/[0.04]' : 'bg-transparent'
        }`}
      >
        <div className="container-safe h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={invenzaLogo} alt="Invenza" className="h-7 w-auto drop-shadow-sm" />
            <span className="font-bold text-lg tracking-tight text-[#1D1D1F]">Invenza</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-semibold tracking-wider text-[#86868B] hover:text-[#1D1D1F] uppercase transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex text-xs font-bold tracking-wider text-[#1D1D1F] hover:text-[#0071E3] transition-colors uppercase"
            >
              Contact Sales
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#E5E5EA] text-[#1D1D1F]"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 inset-x-0 z-40 bg-[#FAFAFA] border-b border-black/[0.04] md:hidden overflow-hidden shadow-sm"
          >
            <nav className="container-safe py-8 flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-bold tracking-tight text-[#1D1D1F]"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="text-2xl font-bold tracking-tight text-[#0071E3] mt-4">
                Contact Sales
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
