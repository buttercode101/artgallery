'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export function AnimatedSection({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
}
