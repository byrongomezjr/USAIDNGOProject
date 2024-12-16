'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('footer');
  
  const scrollToMission = (e: React.MouseEvent) => {
    e.preventDefault();
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFaq = (e: React.MouseEvent) => {
    e.preventDefault();
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRecentUpdates = (e: React.MouseEvent) => {
    e.preventDefault();
    const recentUpdatesSection = document.getElementById('recent-updates');
    if (recentUpdatesSection) {
      recentUpdatesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-red-900 dark:bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('aboutUs.title')}</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#mission" 
                  onClick={scrollToMission}
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  {t('aboutUs.mission')}
                </a>
              </li>
              <li>
                <Link href="/team" className="hover:text-gray-300 transition-colors">
                  {t('aboutUs.team')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('resources.title')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#recent-updates"
                  onClick={scrollToRecentUpdates}
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  {t('resources.recentUpdates')}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={scrollToFaq}
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  {t('resources.faq')}
                </a>
              </li>
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