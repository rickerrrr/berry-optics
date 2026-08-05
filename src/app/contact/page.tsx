'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import GlassCard from '@components/ui/GlassCard';
import { company } from '@data/index';

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'zh';

  const contactItems = [
    {
      label: t('contact.company'),
      value: company.name.full[lang],
      href: undefined,
    },
    {
      label: t('contact.address'),
      value: company.location.address[lang],
      href: undefined,
    },
    {
      label: t('contact.phone'),
      value: company.contact.phone,
      href: `tel:${company.contact.phone}`,
    },
    {
      label: t('contact.tel'),
      value: company.contact.tel,
      href: `tel:${company.contact.tel}`,
    },
    {
      label: t('contact.fax'),
      value: company.contact.fax,
      href: undefined,
    },
    {
      label: t('contact.email'),
      value: company.contact.email,
      href: `mailto:${company.contact.email}`,
    },
    {
      label: t('contact.website'),
      value: company.contact.website,
      href: `https://${company.contact.website}`,
    },
    {
      label: t('contact.icp'),
      value: company.icp,
      href: undefined,
    },
  ];

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
              <span className="text-brand-navy/60">{t('nav.contact')}</span>
            </motion.nav>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-navy"
            >
              {t('contact.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 font-sans text-base lg:text-lg text-brand-navy/45 max-w-2xl"
            >
              {t('contact.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 w-12 h-1 bg-brand-photon rounded-full origin-left"
            />
          </div>
        </section>

        {/* Contact info + Map */}
        <section className="py-20 lg:py-28 bg-surface-white">
          <div className="max-w-[1920px] mx-auto px-[--container-padding]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact info card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <GlassCard hoverable={false} className="h-full">
                  <h2 className="font-display text-xl lg:text-2xl font-semibold text-brand-navy mb-8">
                    {t('contact.title')}
                  </h2>
                  <dl className="space-y-5">
                    {contactItems.map((item, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                        <dt className="sm:w-28 shrink-0 font-sans text-sm text-brand-navy/40 pt-0.5">
                          {item.label}
                        </dt>
                        <dd className="font-sans text-sm lg:text-base text-brand-navy/70 leading-relaxed flex-1">
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-brand-photon hover:text-brand-photon/80 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </GlassCard>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                className="rounded-2xl overflow-hidden border border-brand-photon/[0.08] shadow-[0_4px_30px_rgba(11,108,255,0.04)] h-[400px] lg:h-full min-h-[400px]"
              >
                <iframe
                  src="https://map.baidu.com/search/%E6%88%90%E9%83%BD%E5%B8%82%E9%AB%98%E6%96%B0%E5%8C%BA%E7%A7%91%E5%9B%AD%E5%8D%97%E8%B7%AF3%E5%8F%B7"
                  className="w-full h-full border-0"
                  style={{ minHeight: '400px' }}
                  loading="lazy"
                  title={lang === 'zh' ? '贝瑞光电地图位置' : 'Berry Optics Location'}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
