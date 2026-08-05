'use client';

import dynamic from 'next/dynamic';

const AIChatWidget = dynamic(() => import('./ai/AIChatWidget'), { ssr: false });

export default function ClientWidgets({ lang }: { lang: string }) {
  return <AIChatWidget lang={lang} />;
}
