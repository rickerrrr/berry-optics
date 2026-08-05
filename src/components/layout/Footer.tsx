'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { company } from '@data/index';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-brand-navy text-white">
      <div className="max-w-[1920px] mx-auto px-[--container-padding] py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-lg font-semibold text-white mb-3">
              Berry Optics
            </h3>
            <p className="font-sans text-sm text-white/50 leading-relaxed">
              {company.name.full.zh}
            </p>
            <p className="mt-2 font-sans text-xs text-white/35">
              {company.tagline.zh}
            </p>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-sm font-semibold text-white/70 mb-3">
              {t('contact.title')}
            </h4>
            <div className="space-y-2">
              <p className="font-sans text-sm text-white/45">
                <span className="text-white/55">{t('contact.phone')}: </span>
                {company.contact.phone}
              </p>
              <p className="font-sans text-sm text-white/45">
                <span className="text-white/55">{t('contact.tel')}: </span>
                {company.contact.tel}
              </p>
              <p className="font-sans text-sm text-white/45">
                <span className="text-white/55">{t('contact.fax')}: </span>
                {company.contact.fax}
              </p>
              <p className="font-sans text-sm text-white/45">
                <span className="text-white/55">{t('contact.email')}: </span>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="hover:text-brand-crystal transition-colors"
                >
                  {company.contact.email}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-sm font-semibold text-white/70 mb-3">
              {t('contact.address')}
            </h4>
            <p className="font-sans text-sm text-white/45 leading-relaxed">
              {company.location.address.zh}
            </p>
            <p className="mt-2 font-sans text-xs text-white/35">
              {t('contact.website')}: {company.contact.website}
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-sm font-semibold text-white/70 mb-3">
              {t('nav.products')}
            </h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block font-sans text-sm text-white/45 hover:text-brand-crystal transition-colors"
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/about"
                className="block font-sans text-sm text-white/45 hover:text-brand-crystal transition-colors"
              >
                {t('nav.about')}
              </Link>
              <Link
                href="/technology"
                className="block font-sans text-sm text-white/45 hover:text-brand-crystal transition-colors"
              >
                {t('nav.technology')}
              </Link>
              <Link
                href="/products"
                className="block font-sans text-sm text-white/45 hover:text-brand-crystal transition-colors"
              >
                {t('nav.products')}
              </Link>
              <Link
                href="/contact"
                className="block font-sans text-sm text-white/45 hover:text-brand-crystal transition-colors"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-sans text-xs text-white/30">
            &copy; {year} {company.name.full.zh} {t('footer.rights')} {company.icp}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              {t('footer.links.privacy')}
            </a>
            <a
              href="#"
              className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              {t('footer.links.terms')}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
