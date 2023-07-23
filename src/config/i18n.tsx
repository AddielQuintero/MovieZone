import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { global_en, global_es } from '@locales'

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
})

export default i18next
