import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    // Load translation files from /public/locales/{lng}/{ns}.json
    .use(Backend)

    // Automatically detect user's language (from localStorage, cookie, etc.)
    .use(LanguageDetector)

    // Connect i18n instance to React
    .use(initReactI18next)

    .init({
        debug: false, // Set to true to debug language loading in dev

        // Fallback language if detection fails or translation is missing
        fallbackLng: 'fr',

        // Only allow these two languages
        supportedLngs: ['en', 'fr'],

        interpolation: {
            escapeValue: false, // React already protects from XSS
        },

        detection: {
            // Detection order (from most reliable to fallback)
            order: ['localStorage', 'cookie', 'querystring', 'navigator', 'htmlTag'],

            // Where to store the detected language
            caches: ['localStorage'],

            // Key name used in localStorage (default is 'i18nextLng')
            lookupLocalStorage: 'i18nextLng',

            // Normalize language code (e.g., 'en-US' → 'en')
            convertDetectedLanguage: (lng) => lng?.split('-')[0]
        },

        backend: {
            // Translation files path (inside /public)
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    });

export default i18n;