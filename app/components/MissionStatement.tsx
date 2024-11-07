'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const OurMission = () => {
  const { t } = useTranslation('mission');

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-50 dark:bg-slate-800 py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-emerald-900 dark:text-white mb-8 text-center"
        >
          {t('title')}
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl font-semibold text-emerald-900 dark:text-white mb-4 text-center"
          >
            {t('subtitle')}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-4 text-gray-700 dark:text-white text-center"
          >
            {t('mainDescription')}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mb-4 text-gray-700 dark:text-white"
          >
            {t('challengeDescription')}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mb-4 text-gray-700 dark:text-white"
          >
            {t('effortsList.title')}
          </motion.p>
          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="list-disc list-inside mb-4 text-gray-700 dark:text-white"
          >
            <li>{t('effortsList.items.english')}</li>
            <li>{t('effortsList.items.education')}</li>
            <li>{t('effortsList.items.ai')}</li>
            <li>{t('effortsList.items.seminars')}</li>
            <li>{t('effortsList.items.textbooks')}</li>
            <li>{t('effortsList.items.teachers')}</li>
            <li>{t('effortsList.items.meals')}</li>
            <li>{t('effortsList.items.transport')}</li>
          </motion.ul>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mb-8 text-gray-700 dark:text-white font-semibold text-center"
          >
            {t('conclusion')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="text-center"
          >
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurMission;