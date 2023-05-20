import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationsEN from './translationsEN.json';
import enumsEN from './enumsEN.json';
import commonEN from './commonEN.json';

import translationsES from './translationsES.json';
import enumsES from './enumsES.json';
import commonES from './commonES.json';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {...translationsEN, ...enumsEN, ...commonEN},
    es: {...translationsES, ...enumsES, ...commonES},
  },
  fallbackLng: 'es',
  debug: true,

  // have a common namespace used around the full app
  //ns: ['translations'],
  //defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
});

export default i18n;