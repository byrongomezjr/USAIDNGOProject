'use client';
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NewsletterSignup() {
  const { t } = useTranslation('newsletter');

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-red-800 dark:bg-slate-800 py-16 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t('title')}
        </h2>
        <p className="text-center mb-8">
          {t('description')}
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <Input 
            type="email" 
            placeholder={t('emailPlaceholder')} 
            className="flex-grow" 
          />
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button type="submit">
              {t('subscribeButton')}
            </Button>
          </motion.div>
        </form>
      </div>
    </motion.section>
  );
}