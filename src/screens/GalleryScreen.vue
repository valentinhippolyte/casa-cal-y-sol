<template>
  <div class="container mx-auto px-4 py-6">
    <h2 class="text-2xl font-bold mb-4">{{ t("gallery.title") }}</h2>
    <div ref="masonryGrid" class="grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="grid-item"
        @click="openLightbox(index)"
      >
        <img :src="image" class="cursor-pointer" loading="lazy" />
      </div>
    </div>

    <!-- Lightbox avec navigation -->
    <vue-easy-lightbox
      :visible="visible"
      :imgs="images"
      :index="selectedIndex"
      @hide="visible = false"
    />
  </div>
</template>

<script setup>
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import { nextTick, onMounted, ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

// Références
const masonryGrid = ref(null);
const selectedIndex = ref(0);
const visible = ref(false);

// Liste des images
const images = ref([
  new URL("../assets/images/breakfast.jpg", import.meta.url).href,
  new URL("../assets/images/house_front.jpeg", import.meta.url).href,
  new URL("../assets/images/living_room.jpg", import.meta.url).href,
  new URL("../assets/images/breakfast.jpg", import.meta.url).href,
  new URL("../assets/images/house_front.jpeg", import.meta.url).href,
  new URL("../assets/images/living_room.jpg", import.meta.url).href,
  new URL("../assets/images/night.jpg", import.meta.url).href,
  new URL("../assets/images/paragliding.jpg", import.meta.url).href,
  new URL("../assets/images/patio.jpg", import.meta.url).href,
  new URL("../assets/images/terrace_1.jpeg", import.meta.url).href,
  new URL("../assets/images/terrace_2.jpeg", import.meta.url).href,
  new URL("../assets/images/village_front.jpeg", import.meta.url).href,
  new URL("../assets/images/night.jpg", import.meta.url).href,
  new URL("../assets/images/paragliding.jpg", import.meta.url).href,
  new URL("../assets/images/patio.jpg", import.meta.url).href,
  new URL("../assets/images/terrace_1.jpeg", import.meta.url).href,
  new URL("../assets/images/terrace_2.jpeg", import.meta.url).href,
  new URL("../assets/images/village_front.jpeg", import.meta.url).href,
]);

// Fonction pour ouvrir le lightbox
const openLightbox = (index) => {
  selectedIndex.value = index;
  visible.value = true;
};

// Initialisation de Masonry après le chargement des images
const initializeMasonry = () => {
  const grid = masonryGrid.value;
  imagesLoaded(grid, () => {
    new Masonry(grid, {
      itemSelector: ".grid-item",
      columnWidth: 200,
      gutter: 10,
    });
  });
};

onMounted(async () => {
  await nextTick(); // Assure-toi que tout le DOM est chargé
  initializeMasonry();
});
</script>

<style scoped>
.grid {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.grid-item {
  width: 200px;
  margin-bottom: 10px;
}

.grid-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
}

.grid-item img:hover {
  transform: scale(1.05);
}
</style>
