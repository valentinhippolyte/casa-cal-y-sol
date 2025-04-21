<template>
  <RouterLink :to="link">
    <button
      class="font-montserrat px-4 py-1 rounded-2xl hover:cursor-pointer hover:shadow-sm border text-app-red border-app-red text-sm"
    >
      {{ t("seeMoreButton") }}
    </button>
  </RouterLink>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps(["link"]);
</script>
