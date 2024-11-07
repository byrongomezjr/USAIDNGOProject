'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export default function WaysToGive() {
  const { t } = useTranslation('waystogive');

  const donationOptions = [
    {
      key: 'oneTime',
      title: t('options.oneTime.title'),
      description: t('options.oneTime.description'),
      buttonText: t('options.oneTime.buttonText')
    },
    {
      key: 'monthly',
      title: t('options.monthly.title'),
      description: t('options.monthly.description'),
      buttonText: t('options.monthly.buttonText')
    },
    {
      key: 'corporate',
      title: t('options.corporate.title'),
      description: t('options.corporate.description'),
      buttonText: t('options.corporate.buttonText')
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donationOptions.map((option, index) => (
            <motion.div
              key={option.key}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{option.description}</p>
                  <p>{t('impactText')}</p>
                </CardContent>
                <CardFooter>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline">{option.buttonText}</Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}