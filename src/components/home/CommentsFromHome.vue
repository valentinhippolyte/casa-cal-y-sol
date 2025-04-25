<template>
  <div class="flex flex-col items-center px-4 pb-6">
    <div class="h-1.5 w-18 bg-app-red mt-10 mb-3"></div>
    <h2 class="text-2xl font-roca-light mb-8">
      {{ t("home.comments.title") }}
    </h2>

    <div v-if="showWidget" class="w-full max-w-6xl mb-3 font-montserrat">
      <div
        v-if="locale === 'en'"
        class="trust-carousel-widget bg-white p-4 rounded-lg shadow-md"
        src="https://cdn.trustindex.io/loader.js?9c8406e45476276d7f86c621fac"
      ></div>

      <div
        v-else-if="locale === 'fr'"
        class="trust-carousel-widget bg-white p-4 rounded-lg shadow-md"
        src="https://cdn.trustindex.io/loader.js?34321ea25c15619a6316d22781b"
      ></div>

      <div
        v-else-if="locale === 'es'"
        class="trust-carousel-widget bg-white p-4 rounded-lg shadow-md"
        src="https://cdn.trustindex.io/loader.js?f70b26b4508a27642966da3994f"
      ></div>
    </div>
    <div class="mb-3">
      <SeeMoreButton link="/comments" :text="t('commonButton.seeMore')" />
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import SeeMoreButton from "../common/SeeMoreButton.vue";

const { t, locale } = useI18n();
const showWidget = ref(true);

const loadTrustCarouselScript = async () => {
  showWidget.value = false;

  await nextTick();

  // Supprimer les anciens scripts TrustIndex
  document
    .querySelectorAll('script[src*="trustindex.io"]')
    .forEach((el) => el.remove());

  // Nettoyer les anciens widgets
  document
    .querySelectorAll(".trust-carousel-widget")
    .forEach((el) => (el.innerHTML = ""));

  await nextTick();

  showWidget.value = true;

  await nextTick();

  const script = document.createElement("script");
  script.src = "https://cdn.trustindex.io/loader.js";
  script.defer = true;
  script.async = true;

  document.body.appendChild(script);
};

onMounted(() => {
  loadTrustCarouselScript();
});

watch(
  () => locale.value,
  async () => {
    await loadTrustCarouselScript();
  }
);
</script>
