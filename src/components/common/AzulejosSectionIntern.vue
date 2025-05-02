<template>
  <section class="w-full relative h-80">
    <!-- Fond style azulejos avec le logo -->
    <div
      class="absolute inset-0 bg-repeat bg-center z-0"
      :style="{
        backgroundImage: `url('${imageUrls.logo.src}')`,
        backgroundSize: '80px 80px',
        opacity: 0.4,
      }"
    ></div>

    <!-- Contenu centré verticalement, aligné sur le côté -->
    <div
      class="absolute top-1/2 left-10 transform -translate-y-1/2 ml-6 bg-white py-6 px-10 md:py-12 md:px-20 rounded-xl shadow-lg max-w-md z-10"
    >
      <h2 class="text-2xl font-montserrat font-bold mb-4">
        {{ title }}
      </h2>
      <SeeMoreButton :link="link" :text="text" />
    </div>
  </section>
</template>

<script setup>
import { imageUrls } from "../../assets/images/images.js";
import SeeMoreButton from "./SeeMoreButton.vue";

defineProps(["title", "text", "link", "isExtern"]);
</script>
