<template>
  <div class="bg-app-bg flex flex-col items-center">
    <div class="h-1.5 w-18 bg-app-red mt-10 mb-3"></div>
    <h2 class="text-2xl font-roca-light mb-8">
      {{ t("home.gallery.title") }}
    </h2>

    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="1"
      :space-between="12"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :loop="true"
      :breakpoints="{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
      class="w-full max-w-6xl px-4"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index" class="px-4">
        <img
          :src="img.src"
          :alt="img.alt"
          class="rounded-2xl w-full h-64 object-cover shadow-md"
        />
      </SwiperSlide>
    </Swiper>
    <div class="mt-6 mb-10">
      <SeeMoreButton link="/gallery" :text="t('commonButton.seeMore')" />
    </div>
  </div>
</template>

<script setup>
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useI18n } from "vue-i18n";

import { imageUrls } from "../../assets/images/images.js";
import SeeMoreButton from "../common/SeeMoreButton.vue";

const { t } = useI18n();

const images = [
  imageUrls.breakfast,
  imageUrls.front_house,
  imageUrls.hall,
  imageUrls.living_room,
  imageUrls.dining_room,
  imageUrls.kitchen,
  imageUrls.patio,
  imageUrls.bathroom_1,
  imageUrls.bathroom_2,
  imageUrls.bathroom_3,
  imageUrls.bedroom_1,
  imageUrls.bedroom_2,
  imageUrls.bedroom_3,
  imageUrls.bedroom_4,
  imageUrls.terrace1_1,
  imageUrls.pool_1,
  imageUrls.rooftop,
];
</script>
