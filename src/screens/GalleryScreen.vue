<script setup>
import MasonryWall from "@yeger/vue-masonry-wall";
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const images = ref([
  {
    src: new URL("../assets/images/breakfast.jpg", import.meta.url).href,
    height: 400,
  },
  {
    src: new URL("../assets/images/house_front.jpg", import.meta.url).href,
    height: 250,
  },
  {
    src: new URL("../assets/images/living_room.jpg", import.meta.url).href,
    height: 250,
  },
  {
    src: new URL("../assets/images/night.jpg", import.meta.url).href,
    height: 200,
  },
  {
    src: new URL("../assets/images/paragliding.jpg", import.meta.url).href,
    height: 300,
  },
  {
    src: new URL("../assets/images/patio.jpg", import.meta.url).href,
    height: 300,
  },
  {
    src: new URL("../assets/images/terrace_1.jpg", import.meta.url).href,
    height: 500,
  },
  {
    src: new URL("../assets/images/terrace_2.jpg", import.meta.url).href,
    height: 250,
  },
  {
    src: new URL("../assets/images/village_front.jpg", import.meta.url).href,
    height: 250,
  },
  {
    src: new URL("../assets/images/breakfast.jpg", import.meta.url).href,
    height: 350,
  },
]);

const selectedIndex = ref(0);
const visible = ref(false);

const openLightbox = (index) => {
  selectedIndex.value = index;
  visible.value = true;
};
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-4 mt-8 mb-12">
    <h2 class="text-2xl font-bold mb-4">{{ t("gallery.title") }}</h2>
    <masonry-wall :items="images" :column-width="250" :gap="10">
      <template #default="{ item, index }">
        <div
          :style="{ height: `${item.height}px` }"
          class="relative cursor-pointer transition-transform duration-200 hover:scale-101"
          @click="openLightbox(index)"
        >
          <img
            :src="item.src"
            class="w-full h-full object-cover rounded-lg"
            loading="lazy"
            alt=""
          />
        </div>
      </template>
    </masonry-wall>
  </div>

  <!-- Lightbox -->
  <vue-easy-lightbox
    :visible="visible"
    :imgs="images.map((img) => img.src)"
    :index="selectedIndex"
    @hide="visible = false"
  />
</template>
