'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Existing imports
import enTranslations from '../public/locales/en/translation.json';
import deTranslations from '../public/locales/de/translation.json';
import frTranslations from '../public/locales/fr/translation.json';
import siTranslations from '../public/locales/si/translation.json';
import taTranslations from '../public/locales/ta/translation.json';

// Existing namespace imports
import enHero from '../public/locales/en/hero.json';
import enFooter from '../public/locales/en/footer.json';
import deHero from '../public/locales/de/hero.json';
import deFooter from '../public/locales/de/footer.json';
import frHero from '../public/locales/fr/hero.json';
import frFooter from '../public/locales/fr/footer.json';
import siHero from '../public/locales/si/hero.json';
import siFooter from '../public/locales/si/footer.json';
import taHero from '../public/locales/ta/hero.json';
import taFooter from '../public/locales/ta/footer.json';

// Add mission namespace imports
import enMission from '../public/locales/en/mission.json';
import deMission from '../public/locales/de/mission.json';
import frMission from '../public/locales/fr/mission.json';
import siMission from '../public/locales/si/mission.json';
import taMission from '../public/locales/ta/mission.json';

// Add newsletter namespace imports
import enNewsletter from '../public/locales/en/newsletter.json';
import deNewsletter from '../public/locales/de/newsletter.json';
import frNewsletter from '../public/locales/fr/newsletter.json';
import siNewsletter from '../public/locales/si/newsletter.json';
import taNewsletter from '../public/locales/ta/newsletter.json';

// Add ways-to-give namespace imports
import enWaysToGive from '../public/locales/en/waystogive.json';
import deWaysToGive from '../public/locales/de/waystogive.json';
import frWaysToGive from '../public/locales/fr/waystogive.json';
import siWaysToGive from '../public/locales/si/waystogive.json';
import taWaysToGive from '../public/locales/ta/waystogive.json';

// Add recent-updates namespace imports
import enRecentUpdates from '../public/locales/en/recentupdates.json';
import deRecentUpdates from '../public/locales/de/recentupdates.json';
import frRecentUpdates from '../public/locales/fr/recentupdates.json';
import siRecentUpdates from '../public/locales/si/recentupdates.json';
import taRecentUpdates from '../public/locales/ta/recentupdates.json';

import enDonation from '../public/locales/en/donation.json';
import deDonation from '../public/locales/de/donation.json';
import frDonation from '../public/locales/fr/donation.json';
import siDonation from '../public/locales/si/donation.json';
import taDonation from '../public/locales/ta/donation.json';

import enTeam from '../public/locales/en/team.json';
import deTeam from '../public/locales/de/team.json';
import frTeam from '../public/locales/fr/team.json';
import siTeam from '../public/locales/si/team.json';
import taTeam from '../public/locales/ta/team.json';

const i18nInstance = i18next.createInstance();

i18nInstance
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: enTranslations,
                hero: enHero,
                footer: enFooter,
                mission: enMission,
                newsletter: enNewsletter,
                waystogive: enWaysToGive,
                recentupdates: enRecentUpdates,
                donation: enDonation,
                team: enTeam
            },
            de: {
                translation: deTranslations,
                hero: deHero,
                footer: deFooter,
                mission: deMission,
                newsletter: deNewsletter,
                waystogive: deWaysToGive,
                recentupdates: deRecentUpdates,
                donation: deDonation,
                team: deTeam
            },
            fr: {
                translation: frTranslations,
                hero: frHero,
                footer: frFooter,
                mission: frMission,
                newsletter: frNewsletter,
                waystogive: frWaysToGive,
                recentupdates: frRecentUpdates,
                donation: frDonation,
                team: frTeam
            },
            si: {
                translation: siTranslations,
                hero: siHero,
                footer: siFooter,
                mission: siMission,
                newsletter: siNewsletter,
                waystogive: siWaysToGive,
                recentupdates: siRecentUpdates,
                donation: siDonation,
                team: siTeam
            },
            ta: {
                translation: taTranslations,
                hero: taHero,
                footer: taFooter,
                mission: taMission,
                newsletter: taNewsletter,
                waystogive: taWaysToGive,
                recentupdates: taRecentUpdates,
                donation: taDonation,
                team: taTeam
            }
        },
        fallbackLng: 'en',
        supportedLngs: ['en', 'de', 'fr', 'si', 'ta'],
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        },
        lng: 'en'
    });

export default i18nInstance;