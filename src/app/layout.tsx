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
    default:
      '成都贝瑞光电 — 中国皮米光学元件制造品牌 | Berry Optics',
    template: '%s | Berry Optics',
  },
  description:
    '成都贝瑞光电科技股份有限公司，25年专注超光滑抛光技术。表面粗糙度达40-60皮米(国际领先)，产品70%出口美欧日。极端超光滑光学元件、WDM基片、硅高反镜、PLIF诊断仪。服务半导体、航空航天、激光、光通讯。',
  keywords: [
    // --- 中文品牌词 ---
    '贝瑞光电',
    '成都贝瑞光电',
    '贝瑞光学',
    // --- 中文产品词 ---
    '超光滑光学元件',
    '皮米级光学元件',
    '精密光学元件',
    'WDM基片',
    '硅高反镜',
    'CaF2窗口',
    '红外光学元件',
    'PLIF诊断仪',
    '准分子激光器元件',
    // --- 中文行业场景词 ---
    '半导体检测光学',
    '光刻机光学元件',
    '航空航天光学',
    '激光反射镜',
    '光通讯光学元件',
    '大科学装置光学',
    // --- 中文地域词 ---
    '成都光学制造商',
    '中国光学元件厂家',
    // --- English keywords ---
    'precision optical components',
    'ultra smooth optics',
    'picometer optics China',
    'WDM substrate manufacturer',
    'silicon mirror optics',
    'infrared optics supplier',
    'PLIF diagnostic system',
    'semiconductor optical components',
    'aerospace optical components',
    'China optical manufacturer',
    'Berry Optics',
  ],
  authors: [{ name: '成都贝瑞光电科技股份有限公司', url: 'https://berry-optics.com' }],
  creator: '成都贝瑞光电科技股份有限公司',
  publisher: '成都贝瑞光电科技股份有限公司',
  openGraph: {
    title: '成都贝瑞光电 — 中国皮米光学元件制造品牌',
    description:
      '25年专注超光滑抛光技术。表面粗糙度40-60皮米(国际领先)。极端超光滑元件/WDM基片/硅高反镜/PLIF诊断仪。',
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
    siteName: 'Berry Optics',
    emails: ['kevin_zz@vip.sina.com'],
    phoneNumbers: ['+8613708083785'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berry Optics — Picometer Precision Optics Manufacturer',
    description:
      'China\'s pioneer in ultra-smooth polishing. Surface roughness down to 40-60pm. Serving semiconductor, aerospace, laser industries.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://berry-optics.com',
    languages: {
      'zh-CN': 'https://berry-optics.com',
      'en-US': 'https://berry-optics.com/en',
    },
  },
  verification: {
    // 预留搜索引擎验证
    // google: 'your-google-verification-code',
    // baidu: 'your-baidu-verification-code',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '成都贝瑞光电科技股份有限公司',
              alternateName: ['Berry Optics', '贝瑞光电'],
              url: 'https://berry-optics.com',
              description:
                '中国皮米光学元件制造品牌。25年专注超光滑抛光技术，表面粗糙度达40-60皮米(国际领先)。产品70%出口美国、德国、英国、瑞士、日本。',
              foundingDate: '2001',
              foundingLocation: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: '成都',
                  addressRegion: '四川',
                  addressCountry: 'CN',
                },
              },
              knowsAbout: [
                '超光滑光学元件',
                '皮米级光学加工',
                'WDM超光滑基片',
                '硅高反镜',
                '红外光学元件',
                'PLIF成像诊断',
                '准分子激光器光学',
                '半导体光学',
                '航空航天光学',
                '激光光学',
                '大科学装置光学',
              ],
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: '极端超光滑光学元件',
                    description: '表面粗糙度40-60pm，国际领先水平。涵盖WDM基片、硅高反镜、CaF2窗口等。',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: '高精密红外光学元件',
                    description: '最大尺寸700mm。材料涵盖锗(Ge)、硫化锌(ZnS)、硅(Si)。服务航空航天。',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'PLIF成像诊断仪',
                    description: '10kHz/20kHz高速PLIF诊断仪，国内首创。牵头国家重大科学仪器专项(11280万元)。',
                  },
                },
              ],
              areaServed: [
                { '@type': 'Country', name: 'CN' },
                { '@type': 'Country', name: 'US' },
                { '@type': 'Country', name: 'DE' },
                { '@type': 'Country', name: 'GB' },
                { '@type': 'Country', name: 'CH' },
                { '@type': 'Country', name: 'JP' },
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+86-13708083785',
                contactType: 'sales',
                availableLanguage: ['Chinese', 'English'],
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
        <ClientWidgets lang="zh" />
      </body>
    </html>
  );
}
