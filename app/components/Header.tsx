'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu } from 'lucide-react'

// removed unused interface HeaderProps

export default function Header({ isDarkMode }: { isDarkMode: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(isDarkMode)

  const toggleDarkMode = useCallback(() => {
    if (typeof window !== 'undefined') {
      const newMode = !darkMode
      setDarkMode(newMode)
      document.documentElement.classList.toggle('dark', newMode)
      localStorage.setItem('darkMode', JSON.stringify(newMode))
    }
  }, [darkMode])

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-500 dark:text-white">SINHALA Smiles</Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About Us</Link>
          <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact Us</Link>
          <Link href="/ways-to-give" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Ways to Give</Link>
          <Link href="/research" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Research</Link>
          <Link href="/mission" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Mission</Link>
          <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Log In</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode} 
            // main color for light/dark mode sun and moon icon
            className="p-2 rounded-full bg-amber-500 dark:bg-gray-700"
          >
            {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 py-2"
          >
            <Link href="/about" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">About Us</Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Contact Us</Link>
            <Link href="/ways-to-give" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Ways to Give</Link>
            <Link href="/research" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Research</Link>
            <Link href="/mission" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Mission</Link>
            <Link href="/login" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Log In</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}