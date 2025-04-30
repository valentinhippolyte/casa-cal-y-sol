<template>
  <RouterLink to="/booking" aria-label="Booking">
    <button
      class="flex gap-1 bg-app-red text-white font-montserrat px-4 py-2.5 rounded-2xl hover:cursor-pointer hover:shadow-lg hover:bg-app-red-600"
    >
      {{ t("navbar.booking") }}
      <span v-if="locale === 'en'" class="hidden lg:block">now</span>
    </button>
  </RouterLink>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
const { t, locale } = useI18n();
</script>
