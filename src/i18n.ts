/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ptBR from './locales/pt_BR.json';

export const defaultNS = 'translations';
export const resources = {
  en_US: {
    translations: en,
  },
  pt_BR: {
    translations: ptBR,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en_US',
  ns: ['translations'],
  defaultNS,
  resources,
});

export const t = i18n.t.bind(i18n);

export default i18n;
