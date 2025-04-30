<template>
  <Motion
    :initial="{ opacity: 0, y: 30 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5 }"
  >
    <div class="max-w-[1200px] mx-auto px-4 mb-12">
      <div class="flex flex-col items-center">
        <h2 class="text-2xl font-roca-light mb-8 mt-10">
          {{ t("gallery.title") }}
        </h2>
      </div>
      <masonry-wall :items="images" :column-width="250" :gap="10">
        <template #default="{ item, index }">
          <div
            class="relative cursor-pointer transition-transform duration-200 hover:scale-101"
            @click="openLightbox(index)"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              class="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </template>
      </masonry-wall>
    </div>
  </Motion>
  <!-- Lightbox -->
  <vue-easy-lightbox
    :visible="visible"
    :imgs="images.map((img) => img.src)"
    :index="selectedIndex"
    @hide="visible = false"
  />
</template>

<script setup>
import { Motion } from "@motionone/vue";
import MasonryWall from "@yeger/vue-masonry-wall";
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import { useI18n } from "vue-i18n";
import { imageUrls } from "../assets/images/images.js";

const { t } = useI18n();

const images = [
  imageUrls.front_house,
  imageUrls.hall,
  imageUrls.living_room,
  imageUrls.dining_room,
  imageUrls.kitchen,
  imageUrls.patio,
  imageUrls.bedroom_1,
  imageUrls.bedroom_2,
  imageUrls.bedroom_3,
  imageUrls.bedroom_4,
  imageUrls.bathroom_1,
  imageUrls.bathroom_2,
  imageUrls.bathroom_3,
  imageUrls.terrace1_1,
  imageUrls.terrace1_2,
  imageUrls.terrace1_3,
  imageUrls.pool_1,
  imageUrls.pool_2,
  imageUrls.pool_3,
  imageUrls.church,
  imageUrls.castle,
  imageUrls.night_view,
];

const selectedIndex = ref(0);
const visible = ref(false);

const openLightbox = (index) => {
  selectedIndex.value = index;
  visible.value = true;
};
</script>
