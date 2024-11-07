'use client';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HeroSection() {
  // Make sure we're using the correct namespace
  const { t, i18n } = useTranslation('hero');

  // Add a useEffect to verify translations are loading
  React.useEffect(() => {
    console.log('Current language:', i18n.language);
    console.log('Available translations:', i18n.store.data);
  }, [i18n.language, i18n.store.data]);

  return (
    <section className="relative bg-red-900 dark:bg-slate-800 text-white py-20 overflow-hidden h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 dark:from-slate-800 via-red-900/70 dark:via-slate-800/70 to-transparent z-10"></div>
      <Image
        src="/heartsforsrilanka.jpg"
        alt={t('imageAlt')}
        fill
        style={{ objectFit: 'cover' }}
        className="z-0"
      />
      <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-xl mb-6">
            {t('description')}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-blue-600 hover:bg-blue-100">
              {t('donateButton')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}