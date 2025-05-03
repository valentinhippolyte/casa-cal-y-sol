import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";

const availableLocales = ["en", "fr", "es"];
let userLocale = localStorage.getItem("lang");

if (!userLocale) {
  const browserLang = navigator.language.slice(0, 2);
  userLocale = availableLocales.includes(browserLang) ? browserLang : "en";
}

export const i18n = createI18n({
  legacy: false,
  locale: userLocale,
  fallbackLocale: "en",
  messages: { fr, en, es },
});
