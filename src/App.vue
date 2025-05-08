<template>
  <Canonical />
  <Motion
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 0.6 }"
  >
    <Navbar />
  </Motion>

  <Motion
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 0.6 }"
  >
    <RouterView
  /></Motion>

  <Motion
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 0.6 }"
  >
    <Footer />
  </Motion>
</template>

<script setup>
import Canonical from "./components/Canonical.vue";
import { Motion } from "@motionone/vue";
import Footer from "./components/layout/footer/Footer.vue";
import Navbar from "./components/layout/navbar/Navbar.vue";

import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

function updateMetaDescription() {
  const description = t("meta.description");
  let metaTag = document.head.querySelector('meta[name="description"]');

  if (metaTag) {
    metaTag.setAttribute("content", description);
  } else {
    metaTag = document.createElement("meta");
    metaTag.name = "description";
    metaTag.content = description;
    document.head.appendChild(metaTag);
  }
}

function updatePageTitle() {
  document.title = t("meta.title");
}

function updateHtmlLang() {
  document.documentElement.lang = locale.value;
}

function updateHreflangs() {
  const head = document.head;
  const baseUrl = "https://casacalysol.com";

  document
    .querySelectorAll('link[rel="alternate"]')
    .forEach((el) => el.remove());

  const langs = ["fr", "en", "es"];
  const currentPath =
    window.location.pathname.replace(/^\/[a-z]{2}/, "") || "/";

  langs.forEach((code) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", code);
    link.setAttribute("href", `${baseUrl}/${code}${currentPath}`);
    head.appendChild(link);
  });
}

function updateHeadTags() {
  updateHtmlLang();
  updateMetaDescription();
  updatePageTitle();
  updateHreflangs();
}

onMounted(updateHeadTags);
watch(locale, updateHeadTags);
</script>
