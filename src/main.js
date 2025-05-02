import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router/index.js";
import "./style.css";

import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

import * as lucideIcons from "lucide-vue-next";

const availableLocales = ["en", "fr", "es"];

let userLocale = localStorage.getItem("lang");

if (!userLocale) {
  const browserLang = navigator.language.slice(0, 2); // "fr-FR" => "fr"
  userLocale = availableLocales.includes(browserLang) ? browserLang : "en";
}

const i18n = createI18n({
  legacy: false,
  locale: userLocale,
  fallbackLocale: "en",
  messages: {
    en,
    fr,
    es,
  },
});

const app = createApp(App);

for (const [key, component] of Object.entries(lucideIcons)) {
  app.component(key, component);
}

app.use(i18n);
app.use(router);

app.mount("#app");
