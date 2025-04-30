<template>
  <div class="flex flex-col-reverse lg-flex-col lg:flex-row px-6 lg:px-20">
    <!-- Bloc texte -->
    <div class="w-full lg:w-1/2 pb-8 lg:py-8 flex flex-col justify-center">
      <!-- Texte -->
      <div class="flex flex-col-reverse gap-0 lg-gap-5 lg:flex-col">
        <div>
          <p class="text-md font-montserrat mb-3">
            <span class="text-md font-montserrat font-bold">
              {{ t("information.andalusia.title") }}
            </span>
            <br />
            {{ t("information.andalusia.text") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Bloc image -->
    <div class="w-full lg:w-1/2 p-8 flex items-center justify-center">
      <img
        @click="openLightbox"
        :src="imageUrls.olvera_map.src"
        :alt="imageUrls.olvera_map.alt"
        class="rounded-md w-full h-auto object-cover cursor-pointer max-w-sm"
        loading="lazy"
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

const { t } = useI18n();

// Lightbox states
const visible = ref(false);
const selectedIndex = ref(0);

// Function to open the Lightbox
const openLightbox = () => {
  visible.value = true;
};
</script>
