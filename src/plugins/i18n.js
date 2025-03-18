import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";

const i18n = createI18n({
  locale: localStorage.getItem("lang") || "fr",
  fallbackLocale: "en",
  messages: {
    fr,
    en,
    es,
  },
});

export default i18n;
