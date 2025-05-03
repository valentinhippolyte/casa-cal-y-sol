import { createRouter, createWebHistory } from "vue-router";
import i18n from "../plugins/i18n"; // adapte le chemin si besoin
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

// Synchroniser langue <-> URL
router.beforeEach((to, from, next) => {
  const locale = to.params.locale;

  const supported = ["fr", "en", "es"];
  if (!supported.includes(locale)) {
    return next("/fr"); // fallback
  }

  if (i18n.global.locale !== locale) {
    i18n.global.locale = locale;
    localStorage.setItem("lang", locale);
  }

  next();
});

export default router;
