// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpBackend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

// i18n
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "en",
//     supportedLngs: ["en", "hy", "ru"],
//     interpolation: { escapeValue: false },
//     backend: { loadPath: "/locales/{{lng}}.json" },
//     react: { useSuspense: false },
//     detection: {
//       order: ["localStorage", "cookie", "navigator"],
//       caches: ["localStorage", "cookie"],
//     },
//   });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import JSON translations directly
import en from '../../public/locales/en.json';
import hy from "../../public/locales/hy.json";
import ru from "../../public/locales/ru.json";

const resources = {
  en: { translation: en },
  hy: { translation: hy },
  ru: { translation: ru },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "hy", "ru"],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
