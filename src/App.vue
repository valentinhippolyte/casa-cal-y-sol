<template>
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
import { Motion } from "@motionone/vue";
import Footer from "./components/layout/footer/Footer.vue";
import Navbar from "./components/layout/navbar/Navbar.vue";

import { useI18n } from "vue-i18n";
import { watch, onMounted } from "vue";

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

onMounted(updateMetaDescription);

watch(locale, () => {
  updateMetaDescription();
});
</script>
