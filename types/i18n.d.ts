import { i18n } from 'i18next';
import 'react-i18next';
import en from '../src/locales/en.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translations';
    resources: {
      translations: typeof en;
    };
  }
}

declare global {
  namespace Express {
    export interface Request {
      i18n: i18n;
    }
  }
}
