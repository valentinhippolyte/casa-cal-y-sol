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
          :src="img"
          alt="carousel"
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
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useI18n } from "vue-i18n";

import "swiper/css";
import "swiper/css/autoplay";
import SeeMoreButton from "../common/SeeMoreButton.vue";

const { t } = useI18n();

// Remplace par tes vraies images
const images = {
  home_photo: new URL("../../assets/images/home_photo.jpg", import.meta.url)
    .href,
  house_front: new URL("../../assets/images/house_front.jpeg", import.meta.url)
    .href,
  living_room: new URL("../../assets/images/living_room.jpg", import.meta.url)
    .href,
  terrace2: new URL("../../assets/images/terrace_2.jpeg", import.meta.url).href,
  night: new URL("../../assets/images/night.jpg", import.meta.url).href,
  paragliding: new URL("../../assets/images/paragliding.jpg", import.meta.url)
    .href,
  patio: new URL("../../assets/images/patio.jpg", import.meta.url).href,
  terrace1: new URL("../../assets/images/terrace_1.jpeg", import.meta.url).href,
};
</script>
