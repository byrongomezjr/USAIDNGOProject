'use client';

import { I18nextProvider } from 'react-i18next';
import { useState, useEffect } from 'react';
import i18next from '../../i18n';

// Add all namespaces for your components
const namespaces = [
  'common',
  'header',
  'footer',
  'hero',
  'mission',
  'newsletter',
  'updates',
  'ways'
];

// Preload all namespaces
namespaces.forEach(ns => {
  i18next.loadNamespaces(ns);
});

export default function TranslationProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  );
}