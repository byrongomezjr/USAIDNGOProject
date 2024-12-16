'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { Moon, Sun, Menu, Globe } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Header({ isDarkMode }: { isDarkMode: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(isDarkMode)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const { t, i18n } = useTranslation()
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Language menu state changed:', isLangMenuOpen);
  }, [isLangMenuOpen]);

  const toggleDarkMode = useCallback(() => {
    if (typeof window !== 'undefined') {
      const newMode = !darkMode
      setDarkMode(newMode)
      document.documentElement.classList.toggle('dark', newMode)
      localStorage.setItem('darkMode', JSON.stringify(newMode))
    }
  }, [darkMode])

  const toggleLanguageMenu = () => {
    console.log('Before toggle - isLangMenuOpen:', isLangMenuOpen);
    setIsLangMenuOpen(!isLangMenuOpen);
    console.log('After toggle - isLangMenuOpen:', !isLangMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    console.log('Changing language to:', lng);
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    setIsLangMenuOpen(false);
    localStorage.setItem('language', lng);
    console.log('Language changed successfully');
  }

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language')
    if (savedLang) {
      i18n.changeLanguage(savedLang)
      setCurrentLanguage(savedLang)
    }
  }, [i18n]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'si', label: 'සිංහල' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' }
  ]

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/flag.png" 
            alt={t('Sri Lanka Flag')} 
            width={32} 
            height={32} 
            className="mr-2"
          />
          <span className="text-2xl font-bold text-amber-500 dark:text-white">
            {t('Hearts for Sri Lanka')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <ScrollLink 
            to="mission" 
            smooth={true} 
            duration={500} 
            className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer"
          >
            {t('Our Mission')}
          </ScrollLink>
          <ScrollLink 
            to="ways-to-give" 
            smooth={true} 
            duration={500} 
            className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer"
          >
            {t('Ways to Give')}
          </ScrollLink>
          <ScrollLink 
            to="research" 
            smooth={true} 
            duration={500} 
            className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer"
          >
            {t('Research')}
          </ScrollLink>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer"
          >
            {t('Become a Supporter')}
          </ScrollLink>
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="relative header-dropdown" ref={languageMenuRef}>
            <button
              onClick={toggleLanguageMenu}
              className="p-2 rounded-full bg-amber-500 dark:bg-gray-700 flex items-center space-x-2"
            >
              <Globe className="w-5 h-5 text-white" />
              <span className="text-white text-sm hidden sm:inline">
                {currentLanguage.toUpperCase()}
              </span>
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 dropdown-menu">
                {languages.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      currentLanguage === code
                        ? 'bg-gray-100 dark:bg-gray-700 text-amber-500'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-amber-500 dark:bg-gray-700"
          >
            {darkMode ? 
              <Sun className="w-5 h-5 text-white" /> : 
              <Moon className="w-5 h-5 text-white" />
            }
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden">
          <ScrollLink 
            to="mission" 
            smooth={true} 
            duration={500} 
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            {t('Mission')}
          </ScrollLink>
          <ScrollLink 
            to="ways-to-give" 
            smooth={true} 
            duration={500} 
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            {t('Ways to Give')}
          </ScrollLink>
          <ScrollLink 
            to="research" 
            smooth={true} 
            duration={500} 
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            {t('Research')}
          </ScrollLink>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            {t('Become a Supporter')}
          </ScrollLink>
        </nav>
      )}
    </header>
  )
}