import { createRouter, createWebHistory } from "vue-router";
import { i18n } from "../plugins/i18n";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const locale = to.params.locale;
  const supported = ["fr", "en", "es"];

  if (!supported.includes(locale)) {
    return next("/"); // fallback
  }

  if (i18n.global.locale.value !== locale) {
    i18n.global.locale.value = locale;
    localStorage.setItem("lang", locale);
  }

  next();
});

export default router;
