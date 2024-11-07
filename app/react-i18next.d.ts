import 'react-i18next';

// Define the structure of your translations
interface TranslationKeys {
    "Sri Lanka Flag": string;
    "Hearts for Sri Lanka": string;
    "Our Mission": string;
    "Ways to Give": string;
    "Research": string;
    "Contact Us": string;
    "Log In": string;
    "Mission": string;
}

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        resources: {
            translation: TranslationKeys;
        };
    }
}