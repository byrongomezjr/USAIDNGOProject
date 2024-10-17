'use client'

import { useState, useCallback } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MissionStatement from './components/MissionStatement'
import WaysToGive from './components/WaysToGive'
import RecentUpdates from './components/RecentUpdates'
import NewsletterSignup from './components/NewsletterSignup'
import Footer from './components/Footer'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = useCallback((newDarkMode: boolean) => {
    setIsDarkMode(newDarkMode)
    document.documentElement.classList.toggle('dark', newDarkMode)
  }, [])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
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
    </div>
  )
}