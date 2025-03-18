import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router/index.js";
import "./style.css";

import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    fr,
    es,
  },
});

const app = createApp(App);

app.use(i18n);
app.use(router);

app.mount("#app");
