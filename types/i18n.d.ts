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
