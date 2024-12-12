'use client';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DonationForm from './DonationForm'

export default function HeroSection() {
  const { t } = useTranslation('hero');
  const [isDonationFormOpen, setIsDonationFormOpen] = useState(false);

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
            <Button 
              className="bg-white text-stone-800 hover:bg-stone-100"
              onClick={() => setIsDonationFormOpen(true)}
            >
              {t('donateButton')}
            </Button>
          </motion.div>

          {/* Updated DonationForm implementation */}
          <DonationForm 
            isOpen={isDonationFormOpen}
            onClose={() => setIsDonationFormOpen(false)}
          />
        </motion.div>
      </div>
    </section>
  )
}