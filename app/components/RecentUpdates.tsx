'use client';
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "./ui/card";
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function RecentUpdates() {
  const { t } = useTranslation('recentupdates');

  const updates = [
    {
      key: 'crisis',
      videoId: 'e0Hw83tVS2g', // No food for children in Sri Lanka
      link: 'https://www.hrw.org/news/2022/11/24/sri-lanka-brink-humanitarian-crisis'
    },
    {
      key: 'unicef',
      videoId: '5wSXQHW3xDI', // Unicef: Let's get Sri Lankan kids into school
      link: 'https://www.unicef.org/srilanka/education'
    },
    {
      key: 'fundraiser',
      videoId: 'tnf1-qQGujg',
      link: 'https://unconditionalcompassion.org/empowerment-sectors-2-2-6/'
    }
  ];

  return (
    <section id="recent-updates" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <motion.div
              key={update.key}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{t(`updates.${update.key}.title`)}</CardTitle>
                  <CardDescription>{t(`updates.${update.key}.date`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-0 pb-[56.25%] mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${update.videoId}?autoplay=1&mute=1&loop=1&playlist=${update.videoId}`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-md"
                    />
                  </div>
                  <p>{t(`updates.${update.key}.description`)}</p>
                </CardContent>
                <CardFooter>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a href={update.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">{t('readMore')}</Button>
                    </a>
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