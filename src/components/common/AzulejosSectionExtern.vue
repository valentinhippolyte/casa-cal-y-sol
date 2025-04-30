<template>
  <section class="w-full relative h-80">
    <!-- Div de fond avec opacité -->
    <div
      class="absolute inset-0 bg-repeat bg-center z-0"
      :style="{
        backgroundImage: `url('${logo}')`,
        backgroundSize: '80px 80px',
        opacity: 0.4,
      }"
    ></div>

    <!-- Contenu au-dessus -->
    <div
      class="absolute top-1/2 left-10 transform -translate-y-1/2 bg-white py-6 px-10 md:py-12 md:px-20 rounded-xl shadow-lg max-w-md z-10"
    >
      <h2 class="text-2xl font-montserrat font-bold mb-4">
        {{ title }}
      </h2>
      <CommentsButton :link="link" :text="text" />
    </div>
  </section>
</template>

<script setup>
import CommentsButton from "./CommentsButton .vue";

// Pas besoin de ref ici, c’est juste une string
const logo = new URL("../../assets/Logo_couleur.svg", import.meta.url).href;

defineProps(["title", "text", "link", "isExtern"]);
</script>
