<template>
  <div class="container mx-auto px-4 py-6">
    <h2 class="text-2xl font-bold mb-4">{{ t("comments.title") }}</h2>

    <div v-if="showWidget">
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

const loadTrustIndexScript = async () => {
  console.log("🔄 Rechargement du widget TrustIndex...");

  // Désactiver temporairement l'affichage du widget
  showWidget.value = false;

  await nextTick(); // Attendre que le DOM soit mis à jour

  // Supprimer les scripts existants TrustIndex
  document
    .querySelectorAll('script[src*="trustindex.io"]')
    .forEach((el) => el.remove());

  // Supprimer les anciens widgets
  document
    .querySelectorAll(".trust-widget-container")
    .forEach((el) => (el.innerHTML = ""));

  await nextTick(); // Assurer que le DOM est bien nettoyé

  // Réactiver le widget
  showWidget.value = true;

  await nextTick(); // Attendre encore avant d'ajouter le script

  // Ajouter le script
  const script = document.createElement("script");
  script.src = "https://cdn.trustindex.io/loader.js";
  script.defer = true;
  script.async = true;

  document.body.appendChild(script);

  script.onload = () => console.log("✅ TrustIndex script chargé !");
};

// Charger le script au montage
onMounted(() => {
  loadTrustIndexScript();
});

// Observer les changements de langue et recharger le script proprement
watch(
  () => locale.value,
  async (newLocale, oldLocale) => {
    console.log(`🌍 Changement de langue : ${oldLocale} → ${newLocale}`);

    await loadTrustIndexScript();
  }
);
</script>
