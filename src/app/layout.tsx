import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import I18nProvider from '@components/providers/I18nProvider';
import ClientWidgets from '@components/ClientWidgets';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Berry Optics — Precision Optical Technology',
    template: '%s | Berry Optics',
  },
  description:
    'Berry Optics — Advanced optical solutions for semiconductor manufacturing, precision machining, and international supply chains.',
  keywords: [
    'precision optics',
    'optical lenses',
    'optical coatings',
    'semiconductor optics',
    'aspheric lenses',
    'optical mirrors',
    'optical prisms',
    'optical filters',
    'precision machining',
    'Berry Optics',
  ],
  authors: [{ name: 'Berry Optics Co., Ltd.' }],
  openGraph: {
    title: 'Berry Optics — Precision Optical Technology',
    description: 'Advanced optical solutions for semiconductor manufacturing and precision machining.',
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0066FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <I18nProvider>{children}</I18nProvider>
        <ClientWidgets lang="zh" />
      </body>
    </html>
  );
}
