'use client';

import '@/i18n/config';
import { type ReactNode } from 'react';

export default function I18nProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
