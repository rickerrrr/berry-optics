'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { company } from '@data/index';

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'zh';

  const paragraphs = company.intro.paragraphs;
  const showParagraphs = paragraphs.slice(0, 2);

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-surface-white relative overflow-hidden"
    >
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-brand-photon blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-brand-crystal blur-[80px]" />
      </div>

      <div className="relative max-w-[1920px] mx-auto px-[--container-padding]">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
              {t('nav.about')}
            </h2>
            <div className="mx-auto mt-4 w-12 h-1 bg-brand-photon rounded-full" />
          </motion.div>

          {/* Intro paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="space-y-4"
          >
            {showParagraphs.map((p, i) => (
              <p
                key={i}
                className="font-sans text-base lg:text-lg text-brand-navy/55 leading-relaxed"
              >
                {p[lang]}
              </p>
            ))}
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 p-6 rounded-xl bg-brand-photon/[0.04] border border-brand-photon/[0.08]"
          >
            <p className="font-sans text-sm lg:text-base text-brand-photon leading-relaxed">
              {company.mission[lang]}
            </p>
          </motion.div>

          {/* Link to full about page */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
            className="mt-10 text-center"
          >
            <a
              href="/about"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-brand-photon hover:text-brand-photon/80 transition-colors"
            >
              {lang === 'zh' ? '了解更多' : 'Learn More'}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 3L9 7L5 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
