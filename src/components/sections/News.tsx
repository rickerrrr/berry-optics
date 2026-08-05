'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { company } from '@data/index';
import GlassCard from '@components/ui/GlassCard';

export default function News() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'zh';

  const newsItems = company.news.slice(0, 4);

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
    <section id="news" className="py-24 lg:py-32 bg-surface-white">
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
            {t('news.title')}
          </h2>
          <p className="mt-4 font-sans text-base lg:text-lg text-brand-navy/45 max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </motion.div>

        {/* News grid: 4 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
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
                <h3 className="mt-3 font-display text-base font-semibold text-brand-navy leading-snug line-clamp-2">
                  {item.title[lang]}
                </h3>

                {/* Summary */}
                <p className="mt-2 font-sans text-sm text-brand-navy/45 leading-relaxed line-clamp-3 flex-1">
                  {item.summary[lang]}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
