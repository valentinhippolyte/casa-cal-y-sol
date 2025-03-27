<template>
  <div class="container mx-auto px-4 py-6">
    <div v-if="showWidget">
      <!-- Widget Smoobu pour la langue anglaise -->
      <div
        v-if="locale === 'en'"
        id="smoobuApartment149157de"
        class="calendarWidget"
      >
        <div
          class="calendarContent"
          :data-load-calendar-url="'https://login.smoobu.com/en/cockpit/widget/single-calendar/149157'"
          :data-verification="'c8f3b76743b521a38c1190ce5815e10a43d0e97780a6aace1f5cbd941c32a535'"
          :data-baseUrl="'https://login.smoobu.com'"
          :data-disable-css="'false'"
        ></div>
      </div>

      <!-- Widget Smoobu pour la langue française -->
      <div
        v-else-if="locale === 'fr'"
        id="smoobuApartment149157de"
        class="calendarWidget"
      >
        <div
          class="calendarContent"
          :data-load-calendar-url="'https://login.smoobu.com/fr/cockpit/widget/single-calendar/149157'"
          :data-verification="'c8f3b76743b521a38c1190ce5815e10a43d0e97780a6aace1f5cbd941c32a535'"
          :data-baseUrl="'https://login.smoobu.com'"
          :data-disable-css="'false'"
        ></div>
      </div>

      <!-- Widget Smoobu pour la langue espagnole -->
      <div
        v-else-if="locale === 'es'"
        id="smoobuApartment149157de"
        class="calendarWidget"
      >
        <div
          class="calendarContent"
          :data-load-calendar-url="'https://login.smoobu.com/es/cockpit/widget/single-calendar/149157'"
          :data-verification="'c8f3b76743b521a38c1190ce5815e10a43d0e97780a6aace1f5cbd941c32a535'"
          :data-baseUrl="'https://login.smoobu.com'"
          :data-disable-css="'false'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const showWidget = ref(true);

// Fonction pour charger le script Smoobu dynamiquement
const loadSmoobuScript = async () => {
  console.log("🔄 Rechargement du widget Smoobu...");

  // Désactiver temporairement l'affichage du widget
  showWidget.value = false;

  await nextTick(); // Attendre que le DOM soit mis à jour

  // Supprimer les anciens scripts Smoobu
  document
    .querySelectorAll('script[src*="smoobu.com"]')
    .forEach((el) => el.remove());

  // Supprimer les anciens widgets
  document
    .querySelectorAll(".calendarWidget")
    .forEach((el) => (el.innerHTML = ""));

  await nextTick(); // Assurer que le DOM est bien nettoyé

  // Réactiver le widget
  showWidget.value = true;

  await nextTick(); // Attendre encore avant d'ajouter le script

  // Ajouter le script Smoobu
  const script = document.createElement("script");
  script.src = "https://login.smoobu.com/js/Apartment/CalendarWidget.js";
  script.defer = true;
  script.async = true;

  document.body.appendChild(script);

  script.onload = () => console.log("✅ Smoobu script chargé !");
};

// Charger le script au montage
onMounted(() => {
  loadSmoobuScript();
});

// Observer les changements de langue et recharger le script proprement
watch(
  () => locale.value,
  async (newLocale, oldLocale) => {
    console.log(`🌍 Changement de langue : ${oldLocale} → ${newLocale}`);

    await loadSmoobuScript();
  }
);
</script>
