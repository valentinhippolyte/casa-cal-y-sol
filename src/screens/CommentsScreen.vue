<template>
  <div class="container mx-auto px-4 pb-6">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl font-roca-light mb-8 mt-10">
        {{ t("comments.title") }}
      </h2>
    </div>

    <div v-if="isLoading" class="flex justify-center items-center py-10">
      <svg
        class="animate-spin h-8 w-8 text-app-red"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
    </div>

    <div v-else-if="showWidget">
      <div
        v-if="locale === 'en'"
        class="trust-widget-container bg-white p-4 rounded-lg shadow-md"
        src="https://cdn.trustindex.io/loader.js?cfeee0625234620d8e164d1e4c8"
      ></div>

      <div
        v-else-if="locale === 'fr'"
        class="trust-widget-container bg-white p-4 rounded-lg shadow-md"
        src="https://cdn.trustindex.io/loader.js?4be5ca225a5f6190dc962c833fe"
      ></div>

      <div
        v-else-if="locale === 'es'"
        class="trust-widget-container bg-white p-4 rounded-lg shadow-md"
        src="https://cdn.trustindex.io/loader.js?6bbe58c25c4e620e57068cee342"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const showWidget = ref(true);
const isLoading = ref(true);

const loadTrustIndexScript = async () => {
  isLoading.value = true;
  showWidget.value = false;

  await nextTick();

  document
    .querySelectorAll('script[src*="trustindex.io"]')
    .forEach((el) => el.remove());
  document
    .querySelectorAll(".trust-widget-container")
    .forEach((el) => (el.innerHTML = ""));

  await nextTick();

  showWidget.value = true;

  await nextTick();

  const script = document.createElement("script");
  script.src = "https://cdn.trustindex.io/loader.js";
  script.defer = true;
  script.async = true;

  script.onload = () => {
    isLoading.value = false;
  };

  document.body.appendChild(script);
};

onMounted(() => {
  loadTrustIndexScript();
});

watch(
  () => locale.value,
  async () => {
    await loadTrustIndexScript();
  }
);
</script>
