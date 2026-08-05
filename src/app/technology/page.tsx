'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import GlassCard from '@components/ui/GlassCard';
import { company } from '@data/index';

export default function TechnologyPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'zh';

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
              <span className="text-brand-navy/60">{t('nav.technology')}</span>
            </motion.nav>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-navy"
            >
              {t('capabilities.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 font-sans text-base lg:text-lg text-brand-navy/45 max-w-2xl"
            >
              {t('capabilities.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 w-12 h-1 bg-brand-photon rounded-full origin-left"
            />
          </div>
        </section>

        {/* R&D Center */}
        <section className="py-20 lg:py-28 bg-surface-white">
          <div className="max-w-[1920px] mx-auto px-[--container-padding]">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-photon/10 mb-6">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M14 8V20C14 26 16 28 18 30V38H30V30C32 28 34 26 34 20V8H14Z"
                      stroke="#0B6CFF"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <rect x="20" y="4" width="8" height="6" rx="1" stroke="#0B6CFF" strokeWidth="1.8" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-brand-navy mb-4">
                  {t('capabilities.items.research.title')}
                </h2>
                <div className="w-10 h-1 bg-brand-photon rounded-full mb-6" />
                <p className="font-sans text-base lg:text-lg text-brand-navy/55 leading-relaxed">
                  {company.researchCenter[lang]}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                className="space-y-4"
              >
                {company.researchCenters.map((center, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 lg:p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-brand-photon/[0.06]"
                  >
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-brand-photon/10">
                      <span className="font-display text-sm font-bold text-brand-photon">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="font-sans text-sm lg:text-base text-brand-navy/65 leading-relaxed pt-2">
                      {center[lang]}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Inspection Center */}
        <section className="py-20 lg:py-28 bg-surface-silver">
          <div className="max-w-[1920px] mx-auto px-[--container-padding]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-photon/10 mb-6">
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                  <circle cx="22" cy="22" r="10" stroke="#0B6CFF" strokeWidth="1.8" />
                  <path d="M30 30L38 38" stroke="#0B6CFF" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-brand-navy">
                {t('capabilities.items.inspection.title')}
              </h2>
              <div className="mx-auto mt-4 w-12 h-1 bg-brand-photon rounded-full" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-3xl mx-auto text-center font-sans text-base lg:text-lg text-brand-navy/55 leading-relaxed mb-16"
            >
              {company.inspection.intro[lang]}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {company.inspection.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <GlassCard className="h-full flex flex-col">
                    <h3 className="font-display text-lg lg:text-xl font-semibold text-brand-navy mb-3">
                      {item[lang]}
                    </h3>
                    <p className="font-sans text-sm lg:text-base text-brand-navy/50 leading-relaxed">
                      {item.desc[lang]}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Center */}
        <section className="py-20 lg:py-28 bg-surface-white">
          <div className="max-w-[1920px] mx-auto px-[--container-padding]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-photon/10 mb-6">
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="7" stroke="#0B6CFF" strokeWidth="1.8" />
                  <path d="M24 12V14M24 34V36" stroke="#0B6CFF" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M12 24H14M34 24H36" stroke="#0B6CFF" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="24" cy="24" r="3" stroke="#0B6CFF" strokeWidth="1.4" />
                </svg>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-brand-navy">
                {t('capabilities.items.production.title')}
              </h2>
              <div className="mx-auto mt-4 w-12 h-1 bg-brand-photon rounded-full" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-3xl mx-auto text-center font-sans text-base lg:text-lg text-brand-navy/55 leading-relaxed mb-16"
            >
              {company.production.intro[lang]}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {company.production.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <GlassCard className="h-full flex flex-col">
                    <h3 className="font-display text-lg lg:text-xl font-semibold text-brand-navy mb-3">
                      {item[lang]}
                    </h3>
                    <p className="font-sans text-sm lg:text-base text-brand-navy/50 leading-relaxed">
                      {item.desc[lang]}
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
