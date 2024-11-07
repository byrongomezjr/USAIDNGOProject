'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('footer');
  
  return (
    <footer className="bg-red-900 dark:bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('aboutUs.title')}</h3>
            <ul className="space-y-2">
              <li><Link href="/mission">{t('aboutUs.mission')}</Link></li>
              <li><Link href="/history">{t('aboutUs.history')}</Link></li>
              <li><Link href="/team">{t('aboutUs.team')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('getInvolved.title')}</h3>
            <ul className="space-y-2">
              <li><Link href="/volunteer">{t('getInvolved.volunteer')}</Link></li>
              <li><Link href="/careers">{t('getInvolved.careers')}</Link></li>
              <li><Link href="/partner">{t('getInvolved.partner')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('resources.title')}</h3>
            <ul className="space-y-2">
              <li><Link href="/research">{t('resources.research')}</Link></li>
              <li><Link href="/publications">{t('resources.publications')}</Link></li>
              <li><Link href="/faq">{t('resources.faq')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <p>{t('contact.address')}</p>
            <p>{t('contact.phone')}</p>
            <p>{t('contact.email')}</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}