'use client';

import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from './components/HeroSection';
import MissionStatement from './components/MissionStatement';
import WaysToGive from './components/WaysToGive';
import RecentUpdates from './components/RecentUpdates';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import DialogFlow from './components/DialogFlow';

export default function Home() {
  const [isDarkMode] = useState(false);
  const { t } = useTranslation();
  console.log(t);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <DialogFlow />
        <HeroSection />
        <section id="mission">
          <MissionStatement />
        </section>
        <section id="ways-to-give">
          <WaysToGive />
        </section>
        <section id="research">
          <RecentUpdates />
        </section>
        <section id="contact">
          <NewsletterSignup />
        </section>
      </main>
      <Footer />
      <DialogFlow />
    </div>
  );
}