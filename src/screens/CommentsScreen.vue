<template>
  <div v-if="locale == 'fr'">c'est en fr</div>
  <div v-if="locale == 'es'">c'est en es</div>
  <div v-if="locale == 'en'">c'est en en</div>
  <div class="container mx-auto px-4 py-6">
    <h2 class="text-2xl font-bold mb-4">{{ t("comments.title") }}</h2>
    <!-- en -->
    <div
      v-if="locale == 'en'"
      class="trust-widget-container bg-white p-4 rounded-lg shadow-md"
      src="https://cdn.trustindex.io/loader.js?cfeee0625234620d8e164d1e4c8"
    ></div>

    <!-- fr -->
    <div
      v-if="locale === 'fr'"
      class="trust-widget-container bg-white p-4 rounded-lg shadow-md"
      src="https://cdn.trustindex.io/loader.js?4be5ca225a5f6190dc962c833fe"
    ></div>

    <!-- es -->
    <div
      v-if="locale === 'es'"
      class="trust-widget-container bg-white p-4 rounded-lg shadow-md"
      src="https://cdn.trustindex.io/loader.js?6bbe58c25c4e620e57068cee342"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

// Fonction pour charger le script Trustindex
const loadTrustIndexScript = () => {
  const script = document.createElement("script");
  script.src = "https://cdn.trustindex.io/loader.js";
  script.defer = true;
  script.async = true;

  document.head.appendChild(script);

  script.onload = () => {
    console.log("Trustindex script loaded");
  };
};

// Charger le script initialement au montage du composant
onMounted(() => {
  loadTrustIndexScript();
});

// Observer les changements de locale
watch(
  () => locale.value,
  (newLocale, oldLocale) => {
    console.log(`La langue a changé de ${oldLocale} à ${newLocale}`);

    // Si tu veux recharger le script à chaque changement de langue
    loadTrustIndexScript();
  }
);
</script>
