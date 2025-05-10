<template>
  <Motion
    :initial="{ opacity: 0, y: 30 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5 }"
  >
    <HeroSection />
    <InformationFromHome />
    <Characteristic />
    <GalleryFromHome />
    <CommentsFromHome />
  </Motion>
</template>

<script setup>
import { Motion } from "@motionone/vue";
import { onMounted } from "vue";
import Characteristic from "../components/home/Characteristic.vue";
import CommentsFromHome from "../components/home/CommentsFromHome.vue";
import GalleryFromHome from "../components/home/GalleryFromHome.vue";
import HeroSection from "../components/home/HeroSection.vue";
import InformationFromHome from "../components/home/InformationFromHome.vue";

onMounted(() => {
  fetch(`${import.meta.env.VITE_API_URL}/ping`).catch(() => {});
});
</script>
