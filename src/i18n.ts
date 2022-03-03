/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ptBR from './locales/pt_BR.json';

export const defaultNS = 'translations';
export const resources = {
  'en-US': {
    translations: en,
  },
  'pt-BR': {
    translations: ptBR,
  },
} as const;

const languageDetectionOptions = {
  order: [
    'querystring',
    'navigator',
    'localStorage',
    'sessionStorage',
    'htmlTag',
    'path',
    'subdomain',
  ],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: [],
  excludeCacheFor: ['cimode'],
};

const languageDetector = new LanguageDetector();
languageDetector.init(null, languageDetectionOptions);

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    fallbackLng: 'en-US',
    supportedLngs: ['en-US', 'pt-BR'],
    ns: ['translations'],
    defaultNS,
    resources,
  });

export const t = i18n.t.bind(i18n);

export default i18n;
