<template>
  <router-link :to="localePath(link)" :aria-label="text">
    <button
      class="font-montserrat px-4 py-1 rounded-2xl hover:cursor-pointer hover:shadow-sm border text-app-red border-app-red text-sm"
    >
      {{ text }}
    </button>
  </router-link>
</template>

<script setup>
import { useRoute } from "vue-router";

const localePath = (path) => {
  const route = useRoute();
  return `/${route.params.locale}${path}`;
};

defineProps(["link", "text"]);
</script>
