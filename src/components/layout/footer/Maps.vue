<template>
  <div class="relative w-full" style="width: 100%">
    <div
      v-if="!iframeVisible"
      class="w-full h-[600px] bg-app-red-100 flex items-center justify-center"
    >
      <!-- Bouton centré -->
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <button
          @click="iframeVisible = true"
          class="flex gap-1 bg-app-red text-white font-montserrat px-4 py-2.5 rounded-2xl hover:cursor-pointer hover:shadow-lg hover:bg-app-red-600"
        >
          {{ t("footer.map_consent") }}
        </button>
      </div>
    </div>

    <iframe
      v-else
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      loading="lazy"
      style="border: 0"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Calle%20Pe%C3%B1%C3%B3n,%2028,%2011690%20Olvera,%20C%C3%A1diz,%20Espagne+(Casa%20Cal%20Y%20Sol)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      :title="t('footer.map')"
    ></iframe>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const iframeVisible = ref(false);
const isLoading = ref(false);
</script>
