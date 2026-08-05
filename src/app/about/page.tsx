'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import GlassCard from '@components/ui/GlassCard';
import { company } from '@data/index';

export default function AboutPage() {
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
              <span className="text-brand-navy/60">{t('nav.about')}</span>
            </motion.nav>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-navy"
            >
              {t('nav.about')}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 w-12 h-1 bg-brand-photon rounded-full origin-left"
            />
          </div>
        </section>

        {/* Company introduction */}
        <section className="py-20 lg:py-28 bg-surface-white">
          <div className="max-w-3xl mx-auto px-[--container-padding]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-brand-navy">
                {t('enterprise.title')}
              </h2>
              <p className="mt-3 font-sans text-sm lg:text-base text-brand-navy/45">
                {t('enterprise.subtitle')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="space-y-5"
            >
              {company.intro.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-sans text-base lg:text-lg text-brand-navy/55 leading-relaxed"
                >
                  {p[lang]}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enterprise stats row */}
        <section className="py-16 lg:py-20 bg-surface-silver">
          <div className="max-w-[1920px] mx-auto px-[--container-padding]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
            >
              {company.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 lg:p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-brand-photon/[0.06]"
                >
                  <div className="font-display text-3xl lg:text-4xl font-bold text-brand-photon">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-sans text-sm lg:text-base text-brand-navy/45">
                    {stat.label[lang]}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Honors / Awards */}
        <section className="py-20 lg:py-28 bg-surface-white">
          <div className="max-w-[1920px] mx-auto px-[--container-padding]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
                {lang === 'zh' ? '荣誉资质' : 'Honors & Awards'}
              </h2>
              <div className="mx-auto mt-4 w-12 h-1 bg-brand-photon rounded-full" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {company.awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
                >
                  <GlassCard className="h-full flex flex-col">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-photon/10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L14.5 8H21L15.5 12L18 18L12 14.5L6 18L8.5 12L3 8H9.5L12 2Z"
                          stroke="#0B6CFF"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-display text-2xl font-bold text-brand-photon mb-3">
                      {award.year}
                    </span>
                    <p className="font-sans text-sm lg:text-base text-brand-navy/55 leading-relaxed">
                      {award.desc[lang]}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission statement */}
        <section className="py-20 lg:py-28 bg-surface-silver relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-brand-photon blur-[100px]" />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-brand-crystal blur-[80px]" />
          </div>
          <div className="relative max-w-3xl mx-auto px-[--container-padding]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
                {lang === 'zh' ? '企业使命' : 'Our Mission'}
              </h2>
              <div className="mx-auto mt-4 w-12 h-1 bg-brand-photon rounded-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="p-8 lg:p-10 rounded-2xl bg-white/70 backdrop-blur-[20px] border border-brand-photon/[0.08]"
            >
              <p className="font-sans text-base lg:text-lg text-brand-photon leading-relaxed text-center">
                {company.mission[lang]}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
