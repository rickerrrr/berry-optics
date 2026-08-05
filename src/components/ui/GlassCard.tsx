'use client';

import { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  hoverable?: boolean;
}

export default function GlassCard({
  children,
  hoverable = true,
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`
        rounded-2xl
        bg-white/70
        backdrop-blur-[20px]
        border border-brand-photon/[0.08]
        shadow-[0_4px_30px_rgba(11,108,255,0.04)]
        p-8
        transition-colors
        ${hoverable ? 'cursor-pointer' : ''}
        ${className}
      `.trim()}
      whileHover={
        hoverable
          ? {
              y: -4,
              borderColor: 'rgba(11,108,255,0.25)',
              shadow: '0 8px 40px rgba(11,108,255,0.08)',
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
