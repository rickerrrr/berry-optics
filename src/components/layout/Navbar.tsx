'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'products', href: '/products' },
  { key: 'technology', href: '/technology' },
  { key: 'news', href: '/news' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentLang = i18n.language.startsWith('en') ? 'en' : 'zh';

  const toggleLang = useCallback(() => {
    i18n.changeLanguage(currentLang === 'zh' ? 'en' : 'zh');
  }, [currentLang, i18n]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = [
    'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
    scrolled
      ? 'bg-white/95 backdrop-blur-[12px] shadow-[0_1px_3px_rgba(11,108,255,0.06)] border-b border-brand-photon/[0.06]'
      : 'bg-transparent',
  ].join(' ');

  return (
    <nav className={navClasses}>
      <div className="max-w-[1920px] mx-auto px-[--container-padding] h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-semibold text-brand-photon tracking-tight shrink-0"
        >
          Berry Optics
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="font-sans text-sm font-medium text-brand-navy/80 hover:text-brand-photon transition-colors duration-200"
            >
              {t(`nav.${key}`)}
            </Link>
          ))}
        </div>

        {/* Language toggle + Mobile hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="shrink-0 w-10 h-8 flex items-center justify-center rounded-md border border-brand-photon/25 text-brand-photon font-sans text-xs font-semibold hover:bg-brand-photon/8 transition-colors"
            aria-label={t('nav.language')}
          >
            {currentLang === 'zh' ? 'EN' : '中'}
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-brand-navy rounded-sm"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[2px] bg-brand-navy rounded-sm"
              transition={{ duration: 0.15 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-brand-navy rounded-sm"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-[12px] border-b border-brand-photon/[0.06]"
          >
            <div className="px-[--container-padding] py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 font-sans text-sm font-medium text-brand-navy/80 hover:text-brand-photon transition-colors"
                >
                  {t(`nav.${key}`)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
