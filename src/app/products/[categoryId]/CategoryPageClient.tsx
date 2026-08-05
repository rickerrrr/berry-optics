'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import GlassCard from '@components/ui/GlassCard';
import { productCategories } from '@data/index';

/** Inline SVG product category icons */
function ProductIcon({ categoryId }: { categoryId: string }) {
  const strokeColor = '#0B6CFF';
  const strokeWidth = 1.6;

  switch (categoryId) {
    case 'ultra-smooth':
      return (
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10" stroke={strokeColor} strokeWidth={strokeWidth} />
          <circle cx="16" cy="16" r="4" stroke={strokeColor} strokeWidth={strokeWidth * 0.7} opacity="0.5" />
          <circle cx="16" cy="16" r="1.5" fill={strokeColor} opacity="0.4" />
        </svg>
      );
    case 'infrared':
      return (
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
          <path d="M6 8L14 24L22 12L26 24" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 4V6M28 4V6M4 28V26M28 28V26" stroke={strokeColor} strokeWidth={strokeWidth * 0.6} strokeLinecap="round" opacity="0.35" />
        </svg>
      );
    case 'visible':
      return (
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
          <circle cx="14" cy="14" r="8" stroke={strokeColor} strokeWidth={strokeWidth} />
          <circle cx="14" cy="14" r="3" stroke={strokeColor} strokeWidth={strokeWidth * 0.7} opacity="0.5" />
          <path d="M20 14H27" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M23.5 10.5V17.5" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M12 22L6 28" stroke={strokeColor} strokeWidth={strokeWidth * 0.6} strokeLinecap="round" opacity="0.35" />
        </svg>
      );
    case 'uv':
      return (
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="6" width="20" height="20" rx="2" stroke={strokeColor} strokeWidth={strokeWidth} />
          <path d="M12 8L12 12M20 8L20 12" stroke={strokeColor} strokeWidth={strokeWidth * 0.6} strokeLinecap="round" opacity="0.35" />
          <path d="M16 14C16 14 13 12 13 16C13 20 16 18 16 18C16 18 19 20 19 16C19 12 16 14 16 14Z" fill={strokeColor} opacity="0.15" stroke={strokeColor} strokeWidth={strokeWidth * 0.6} />
        </svg>
      );
    default:
      return (
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10" stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
  }
}

export default function ProductCategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'zh';

  const category = productCategories.find((c) => c.id === params.categoryId);

  if (!category) {
    notFound();
  }

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
              <a href="/products" className="hover:text-brand-photon transition-colors">
                {t('nav.products')}
              </a>
              <span>/</span>
              <span className="text-brand-navy/60">{category.name[lang]}</span>
            </motion.nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex items-center gap-4"
            >
              <ProductIcon categoryId={category.id} />
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-navy">
                {category.name[lang]}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 w-12 h-1 bg-brand-photon rounded-full origin-left"
            />
          </div>
        </section>

        {/* Category description */}
        <section className="py-20 lg:py-28 bg-surface-white">
          <div className="max-w-3xl mx-auto px-[--container-padding]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="font-display text-2xl sm:text-3xl text-brand-navy mb-6">
                {t('products.subtitle')}
              </h2>
              <p className="font-sans text-base lg:text-lg text-brand-navy/55 leading-relaxed">
                {category.description[lang]}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Subcategory cards */}
        <section className="py-20 lg:py-28 bg-surface-silver">
          <div className="max-w-[1920px] mx-auto px-[--container-padding]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-brand-navy">
                {lang === 'zh' ? '产品分类' : 'Subcategories'}
              </h2>
              <div className="mx-auto mt-4 w-12 h-1 bg-brand-photon rounded-full" />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {category.subCategories.map((sub, index) => (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                >
                  <GlassCard className="h-full flex items-center gap-4">
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-brand-photon/10">
                      <span className="font-display text-sm font-bold text-brand-photon">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-display text-lg lg:text-xl font-semibold text-brand-navy">
                      {sub.name[lang]}
                    </h3>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Back to products */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <a
                href="/products"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-brand-photon hover:text-brand-photon/80 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M9 3L5 7L9 11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {lang === 'zh' ? '返回产品中心' : 'Back to Products'}
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
