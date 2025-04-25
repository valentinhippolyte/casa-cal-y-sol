<template>
  <Motion
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 0.6 }"
  >
    <Navbar />
  </Motion>

  <Motion
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 0.6 }"
  >
    <RouterView
  /></Motion>

  <Motion
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 0.6 }"
  >
    <Footer />
  </Motion>
</template>

<script setup>
import { Motion } from "@motionone/vue";
import Footer from "./components/layout/footer/Footer.vue";
import Navbar from "./components/layout/navbar/Navbar.vue";
</script>
