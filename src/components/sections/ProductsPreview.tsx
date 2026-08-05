'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { productCategories } from '@data/index';
import GlassCard from '@components/ui/GlassCard';

/** Inline SVG product category icons */
function ProductIcon({ categoryId }: { categoryId: string }) {
  const strokeColor = '#0B6CFF';
  const strokeWidth = 1.6;

  switch (categoryId) {
    case 'ultra-smooth':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10" stroke={strokeColor} strokeWidth={strokeWidth} />
          <circle cx="16" cy="16" r="4" stroke={strokeColor} strokeWidth={strokeWidth * 0.7} opacity="0.5" />
          <circle cx="16" cy="16" r="1.5" fill={strokeColor} opacity="0.4" />
        </svg>
      );
    case 'infrared':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M6 8L14 24L22 12L26 24" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 4V6M28 4V6M4 28V26M28 28V26" stroke={strokeColor} strokeWidth={strokeWidth * 0.6} strokeLinecap="round" opacity="0.35" />
        </svg>
      );
    case 'visible':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="14" cy="14" r="8" stroke={strokeColor} strokeWidth={strokeWidth} />
          <circle cx="14" cy="14" r="3" stroke={strokeColor} strokeWidth={strokeWidth * 0.7} opacity="0.5" />
          <path d="M20 14H27" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M23.5 10.5V17.5" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M12 22L6 28" stroke={strokeColor} strokeWidth={strokeWidth * 0.6} strokeLinecap="round" opacity="0.35" />
        </svg>
      );
    case 'uv':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="6" width="20" height="20" rx="2" stroke={strokeColor} strokeWidth={strokeWidth} />
          <path d="M12 8L12 12M20 8L20 12" stroke={strokeColor} strokeWidth={strokeWidth * 0.6} strokeLinecap="round" opacity="0.35" />
          <path d="M16 14C16 14 13 12 13 16C13 20 16 18 16 18C16 18 19 20 19 16C19 12 16 14 16 14Z" fill={strokeColor} opacity="0.15" stroke={strokeColor} strokeWidth={strokeWidth * 0.6} />
        </svg>
      );
    case 'custom':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M6 10L16 6L26 10V22L16 26L6 22V10Z" stroke={strokeColor} strokeWidth={strokeWidth} />
          <path d="M16 6V18" stroke={strokeColor} strokeWidth={strokeWidth * 0.5} strokeDasharray="2 2" opacity="0.4" />
          <circle cx="16" cy="13" r="2.5" stroke={strokeColor} strokeWidth={strokeWidth * 0.7} opacity="0.5" />
        </svg>
      );
    default:
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10" stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
  }
}

export default function ProductsPreview() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'zh';

  return (
    <section id="products" className="py-24 lg:py-32 bg-surface-white">
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
            {t('products.title')}
          </h2>
          <p className="mt-4 font-sans text-base lg:text-lg text-brand-navy/45 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Product category cards — responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {productCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: 'easeOut',
              }}
            >
              <GlassCard className="h-full flex flex-col gap-4">
                {/* Icon + Category name */}
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <ProductIcon categoryId={cat.id} />
                  </div>
                  <h3 className="font-display text-base lg:text-lg font-semibold text-brand-navy">
                    {cat.name[lang as 'zh' | 'en']}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-brand-navy/45 leading-relaxed flex-1">
                  {cat.description[lang as 'zh' | 'en']}
                </p>

                {/* Subcategory chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.subCategories.slice(0, 4).map((sub) => (
                    <span
                      key={sub.id}
                      className="inline-block px-2.5 py-1 rounded-md bg-brand-photon/[0.06] text-brand-photon font-sans text-xs font-medium"
                    >
                      {sub.name[lang as 'zh' | 'en']}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <a
                  href={`/products/${cat.id}`}
                  className="mt-2 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-brand-photon hover:text-brand-photon/80 transition-colors"
                >
                  {t('products.cta')}
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
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
