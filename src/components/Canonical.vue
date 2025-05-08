<!-- src/components/Canonical.vue -->
<template></template>
<script setup>
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";

const route = useRoute();

function setCanonical() {
  const canonical = document.querySelector("link[rel='canonical']");
  const canonicalUrl = `https://casacalysol.com${route.fullPath}`;

  if (canonical) {
    canonical.setAttribute("href", canonicalUrl);
  } else {
    const link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", canonicalUrl);
    document.head.appendChild(link);
  }
}

onMounted(setCanonical);
watch(() => route.fullPath, setCanonical);
</script>
