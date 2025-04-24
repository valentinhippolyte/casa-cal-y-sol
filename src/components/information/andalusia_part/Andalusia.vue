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
    <div class="w-full lg:w-1/2 p-8 lg:p-20 flex items-center justify-center">
      <img
        @click="openLightbox"
        src="../../../assets/images/map_olvera.png"
        class="rounded-md w-full h-auto object-cover cursor-pointer max-w-[500px]"
        alt="Map of Andalusia"
      />
    </div>
  </div>

  <!-- Lightbox -->
  <vue-easy-lightbox
    :visible="visible"
    :imgs="[images.olvera]"
    :index="selectedIndex"
    @hide="visible = false"
  />
</template>

<script setup>
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Image source for the Lightbox
const images = ref({
  olvera: new URL("../../../assets/images/map_olvera.png", import.meta.url)
    .href,
});

// Lightbox states
const visible = ref(false);
const selectedIndex = ref(0);

// Function to open the Lightbox
const openLightbox = () => {
  visible.value = true;
};
</script>
