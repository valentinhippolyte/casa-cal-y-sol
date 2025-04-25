<template>
  <section class="w-full relative">
    <!-- Fond style azulejos avec le logo -->
    <div
      class="w-full h-80 bg-repeat bg-center"
      :style="{
        backgroundImage: `url('${logo}')`,
        backgroundSize: '80px 80px',
      }"
    >
      <!-- Contenu centré verticalement, aligné sur le côté -->
      <div
        class="absolute top-1/2 left-10 transform -translate-y-1/2 ml-6 bg-white py-12 px-20 rounded-xl shadow-lg max-w-md"
      >
        <h2 class="text-2xl font-montserrat font-bold mb-4">
          {{ title }}
        </h2>
        <SeeMoreButton :link="link" :text="text" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SeeMoreButton from "./SeeMoreButton.vue";

// Pas besoin de ref ici, c’est juste une string
const logo = new URL("../../assets/Logo_couleur.svg", import.meta.url).href;

defineProps(["title", "text", "link"]);
</script>
