<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script setup>
import Footer from "./components/layout/footer/Footer.vue";
import Navbar from "./components/layout/navbar/Navbar.vue";
</script>
