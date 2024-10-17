'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
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
        <Link href="/" className="text-2xl font-bold text-amber-500 dark:text-white">Hearts for Sri Lanka</Link>
        <nav className="hidden md:flex space-x-4">
          <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Contact Us</ScrollLink>
          <ScrollLink to="ways-to-give" smooth={true} duration={500} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Ways to Give</ScrollLink>
          <ScrollLink to="research" smooth={true} duration={500} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Research</ScrollLink>
          <ScrollLink to="mission" smooth={true} duration={500} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Mission</ScrollLink>
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
          <motion.nav>
            <ScrollLink to="about" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">About Us</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Contact Us</ScrollLink>
            <ScrollLink to="ways-to-give" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Ways to Give</ScrollLink>
            <ScrollLink to="research" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Research</ScrollLink>
            <ScrollLink to="mission" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Mission</ScrollLink>
            <Link href="/login" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Log In</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}