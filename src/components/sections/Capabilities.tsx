'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { capabilities } from '@data/index';
import GlassCard from '@components/ui/GlassCard';

type IconKey = string;

/** Inline SVG icons — Photon Blue stroke, 48x48 */
function CapabilityIcon({ iconKey }: { iconKey: IconKey }) {
  const strokeColor = '#0B6CFF';
  const strokeWidth = 1.8;

  switch (iconKey) {
    case 'research':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Lab flask */}
          <path
            d="M14 8V20C14 26 16 28 18 30V38H30V30C32 28 34 26 34 20V8H14Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          {/* Liquid level */}
          <path
            d="M18 24C18 24 22 22 24 22C26 22 30 24 30 24"
            stroke={strokeColor}
            strokeWidth={strokeWidth * 0.7}
            strokeLinecap="round"
            opacity="0.5"
          />
          {/* Neck */}
          <rect x="20" y="4" width="8" height="6" rx="1" stroke={strokeColor} strokeWidth={strokeWidth} />
          {/* Bubbles */}
          <circle cx="22" cy="28" r="1.2" fill={strokeColor} opacity="0.35" />
          <circle cx="26" cy="26" r="0.8" fill={strokeColor} opacity="0.3" />
          <circle cx="24" cy="30" r="1" fill={strokeColor} opacity="0.3" />
        </svg>
      );

    case 'inspection':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Magnifying glass */}
          <circle cx="22" cy="22" r="10" stroke={strokeColor} strokeWidth={strokeWidth} />
          {/* Handle */}
          <path
            d="M30 30L38 38"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Measurement crosshair inside lens */}
          <path
            d="M19 22H25M22 19V25"
            stroke={strokeColor}
            strokeWidth={strokeWidth * 0.8}
            strokeLinecap="round"
            opacity="0.5"
          />
          {/* Measurement scale marks */}
          <path d="M7 22H11" stroke={strokeColor} strokeWidth={strokeWidth * 0.4} strokeLinecap="round" opacity="0.25" />
          <path d="M33 22H37" stroke={strokeColor} strokeWidth={strokeWidth * 0.4} strokeLinecap="round" opacity="0.25" />
          <path d="M22 7V11" stroke={strokeColor} strokeWidth={strokeWidth * 0.4} strokeLinecap="round" opacity="0.25" />
          <path d="M22 33V37" stroke={strokeColor} strokeWidth={strokeWidth * 0.4} strokeLinecap="round" opacity="0.25" />
        </svg>
      );

    case 'production':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Gear base */}
          <circle cx="24" cy="24" r="7" stroke={strokeColor} strokeWidth={strokeWidth} />
          {/* Gear teeth */}
          <path d="M24 12V14M24 34V36" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M12 24H14M34 24H36" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M15.5 15.5L16.9 16.9" stroke={strokeColor} strokeWidth={strokeWidth * 0.7} strokeLinecap="round" opacity="0.5" />
          <path d="M31.1 31.1L32.5 32.5" stroke={strokeColor} strokeWidth={strokeWidth * 0.7} strokeLinecap="round" opacity="0.5" />
          <path d="M31.1 16.9L32.5 15.5" stroke={strokeColor} strokeWidth={strokeWidth * 0.7} strokeLinecap="round" opacity="0.5" />
          <path d="M15.5 32.5L16.9 31.1" stroke={strokeColor} strokeWidth={strokeWidth * 0.7} strokeLinecap="round" opacity="0.5" />
          {/* Center hub */}
          <circle cx="24" cy="24" r="3" stroke={strokeColor} strokeWidth={strokeWidth * 0.8} />
          <circle cx="24" cy="24" r="1.2" fill={strokeColor} opacity="0.35" />
          {/* Axis lines */}
          <path d="M4 24H9" stroke={strokeColor} strokeWidth={strokeWidth * 0.5} strokeLinecap="round" opacity="0.25" />
          <path d="M39 24H44" stroke={strokeColor} strokeWidth={strokeWidth * 0.5} strokeLinecap="round" opacity="0.25" />
        </svg>
      );

    default:
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="14" stroke={strokeColor} strokeWidth={strokeWidth} />
          <circle cx="24" cy="24" r="4" fill={strokeColor} opacity="0.3" />
        </svg>
      );
  }
}

export default function Capabilities() {
  const { t } = useTranslation();

  return (
    <section id="technology" className="py-24 lg:py-32 bg-surface-silver">
      <div className="max-w-[1920px] mx-auto px-[--container-padding]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            {t('capabilities.title')}
          </h2>
          <p className="mt-4 font-sans text-base lg:text-lg text-brand-navy/45 max-w-2xl mx-auto">
            {t('capabilities.subtitle')}
          </p>
        </motion.div>

        {/* Cards grid: 3 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: 'easeOut',
              }}
            >
              <GlassCard className="h-full flex flex-col">
                {/* Icon */}
                <div className="mb-5">
                  <CapabilityIcon iconKey={cap.iconKey} />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg lg:text-xl font-semibold text-brand-navy mb-2">
                  {t(`${cap.i18nKey}.title`)}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm lg:text-base text-brand-navy/50 leading-relaxed flex-1">
                  {t(`${cap.i18nKey}.desc`)}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Enterprise stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {[
            { key: 'founded', value: '2001' },
            { key: 'patents', value: '13+' },
            { key: 'categories', value: '4' },
            { key: 'areas', value: '5' },
          ].map((stat) => (
            <div
              key={stat.key}
              className="text-center p-5 rounded-xl bg-white/50 backdrop-blur-sm border border-brand-photon/[0.06]"
            >
              <div className="font-display text-2xl lg:text-3xl font-bold text-brand-photon">
                {stat.value}
              </div>
              <div className="mt-1 font-sans text-xs lg:text-sm text-brand-navy/45">
                {t(`enterprise.stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
