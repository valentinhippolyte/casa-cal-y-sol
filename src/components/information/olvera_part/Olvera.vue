<template>
  <div class="bg-app-bg flex flex-col lg:flex-row px-6 lg:px-20">
    <!-- Bloc texte -->
    <div
      class="w-full lg:w-1/2 pb-8 lg:py-8 flex flex-col justify-center order-2"
    >
      <!-- Texte -->
      <div class="flex flex-col-reverse gap-5 lg:flex-col">
        <div>
          <p class="text-md font-montserrat mb-3">
            <span class="text-md font-montserrat font-bold">
              {{ t("information.olvera.title") }}
            </span>
            <br />
            {{ t("information.olvera.text") }}
          </p>
        </div>

        <!-- Légende -->
        <div>
          <p class="text-md font-montserrat font-bold mb-3">
            {{ t("information.olvera.legend.title") }}
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4">
            <LegendItem
              icon="ShoppingCart"
              :label="t('information.olvera.legend.1')"
            />
            <LegendItem
              icon="Croissant"
              :label="t('information.olvera.legend.2')"
            />
            <LegendItem icon="Beer" :label="t('information.olvera.legend.3')" />
            <LegendItem
              icon="Apple"
              :label="t('information.olvera.legend.4')"
            />
            <LegendItem icon="View" :label="t('information.olvera.legend.5')" />
            <LegendItem
              icon="Footprints"
              :label="t('information.olvera.legend.6')"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Bloc image -->
    <div class="w-full lg:w-1/2 p-8 lg:p-20 flex items-center justify-center">
      <img
        @click="openLightbox"
        :src="imageUrls.olvera_map.src"
        :alt="imageUrls.olvera_map.alt"
        class="rounded-md w-full h-auto object-cover cursor-pointer max-w-[500px]"
      />
    </div>
  </div>

  <!-- Lightbox -->
  <vue-easy-lightbox
    :visible="visible"
    :imgs="[imageUrls.olvera_map.src]"
    :index="selectedIndex"
    @hide="visible = false"
  />
</template>

<script setup>
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import { useI18n } from "vue-i18n";
import { imageUrls } from "../../../assets/images/images.js";
import LegendItem from "../olvera_part/LegendItem.vue";

const { t } = useI18n();

// Lightbox states
const visible = ref(false);
const selectedIndex = ref(0);

// Function to open the Lightbox
const openLightbox = () => {
  visible.value = true;
};
</script>
