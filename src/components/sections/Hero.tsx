'use client';

import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const LensScene = dynamic(() => import('@components/three/LensScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-brand-photon/20 border-t-brand-photon rounded-full animate-spin" />
    </div>
  ),
});

// Animation variants
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeInItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, delay: 0.3 },
  },
};

const slideUpItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 },
  },
};

interface ParamLabel {
  i18nKey: 'hero.param1' | 'hero.param2' | 'hero.param3';
  value: string;
  className: string;
}

const paramLabels: ParamLabel[] = [
  {
    i18nKey: 'hero.param1',
    value: '632nm',
    className: 'top-[12%] left-[8%]',
  },
  {
    i18nKey: 'hero.param2',
    value: '\u00B10.01\u03BCm',
    className: 'top-[18%] right-[10%]',
  },
  {
    i18nKey: 'hero.param3',
    value: 'RMS 0.5\u00C5',
    className: 'bottom-[20%] left-1/2 -translate-x-1/2',
  },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-surface-white via-surface-white to-surface-silver/60"
    >
      {/* Ambient light scan effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-crystal/40 to-transparent animate-light-scan" />
      </div>

      <div className="relative max-w-[1920px] mx-auto px-[--container-padding] w-full grid lg:grid-cols-[40%_60%] items-center gap-12 lg:gap-0 pt-20 pb-12">
        {/* Left: Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-5 lg:pr-12 z-20"
        >
          {/* Company name */}
          <motion.p
            variants={fadeInItem}
            className="font-sans text-sm text-brand-photon/60 tracking-wider uppercase"
          >
            {t('hero.company')}
          </motion.p>

          {/* Tagline */}
          <motion.h1
            variants={fadeUpItem}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
          >
            <span className="text-brand-navy block">
              {t('hero.tagline')}
            </span>
          </motion.h1>

          {/* Photon Blue underline */}
          <motion.div
            variants={fadeUpItem}
            className="w-20 h-1 bg-brand-photon rounded-full"
          />

          {/* Subtitle */}
          <motion.p
            variants={fadeUpItem}
            className="font-sans text-base lg:text-lg text-brand-navy/55 leading-relaxed max-w-lg"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={slideUpItem}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#about"
              className="inline-flex items-center px-7 py-3 rounded-full bg-brand-photon text-white font-sans text-sm font-semibold hover:brightness-110 hover:scale-[1.03] transition-all duration-200 shadow-[0_4px_20px_rgba(11,108,255,0.25)]"
            >
              {t('hero.cta1')}
            </a>
            <a
              href="#products"
              className="inline-flex items-center px-7 py-3 rounded-full border border-brand-photon/30 text-brand-photon font-sans text-sm font-semibold hover:bg-brand-photon/6 hover:border-brand-photon/50 transition-all duration-200"
            >
              {t('hero.cta2')}
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.p
            variants={fadeInItem}
            className="hidden sm:block font-sans text-xs text-brand-navy/30 pt-8"
          >
            {t('hero.scrollHint')}
            <span className="block mx-auto mt-2 w-4 h-6 border border-brand-navy/20 rounded-full relative">
              <span className="block w-1 h-1 bg-brand-photon/60 rounded-full absolute top-1.5 left-1/2 -translate-x-1/2 animate-bounce" />
            </span>
          </motion.p>
        </motion.div>

        {/* Right: 3D Lens Scene + floating parameter labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.45 }}
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[550px] xl:h-[650px] z-10"
        >
          <LensScene />

          {/* Floating parameter labels with explanations */}
          <div className="absolute inset-0 pointer-events-none">
            {paramLabels.map((param, i) => (
              <motion.div
                key={param.i18nKey}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.8,
                }}
                className={`absolute ${param.className} flex flex-col items-start`}
              >
                <span className="font-sans text-[10px] sm:text-xs text-brand-crystal/60 tracking-wider">
                  {t(param.i18nKey)}
                </span>
                <span className="font-display text-xs sm:text-sm text-brand-crystal/85 font-semibold tracking-wider">
                  {param.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
