<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Make a comment"
  >
    <button
      class="font-montserrat px-4 py-1 rounded-2xl hover:cursor-pointer hover:shadow-sm border text-app-red border-app-red text-sm"
    >
      {{ text }}
    </button>
  </a>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps(["link", "text"]);
</script>
