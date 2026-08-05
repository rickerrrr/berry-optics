'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import GlassCard from '@components/ui/GlassCard';
import { company } from '@data/index';

export default function NewsPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'zh';

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    if (lang === 'zh') {
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    }
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative pt-[120px] pb-16 lg:pt-[140px] lg:pb-20 overflow-hidden bg-gradient-to-br from-surface-white via-surface-white to-surface-silver/60">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-brand-photon blur-[100px]" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-brand-crystal blur-[80px]" />
          </div>
          <div className="relative max-w-[1920px] mx-auto px-[--container-padding]">
            <motion.nav
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 font-sans text-xs text-brand-navy/40 mb-6"
            >
              <a href="/" className="hover:text-brand-photon transition-colors">
                {t('nav.home')}
              </a>
              <span>/</span>
              <span className="text-brand-navy/60">{t('nav.news')}</span>
            </motion.nav>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-navy"
            >
              {t('news.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 font-sans text-base lg:text-lg text-brand-navy/45 max-w-2xl"
            >
              {t('news.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 w-12 h-1 bg-brand-photon rounded-full origin-left"
            />
          </div>
        </section>

        {/* News list */}
        <section className="py-20 lg:py-28 bg-surface-white">
          <div className="max-w-[1920px] mx-auto px-[--container-padding]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {company.news.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                >
                  <GlassCard className="h-full flex flex-col" hoverable={false}>
                    {/* Date */}
                    <span className="font-sans text-xs text-brand-photon/60 tracking-wide">
                      {formatDate(item.date)}
                    </span>
                    {/* Title */}
                    <h3 className="mt-3 font-display text-base font-semibold text-brand-navy leading-snug">
                      {item.title[lang]}
                    </h3>
                    {/* Summary */}
                    <p className="mt-3 font-sans text-sm text-brand-navy/45 leading-relaxed flex-1">
                      {item.summary[lang]}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
