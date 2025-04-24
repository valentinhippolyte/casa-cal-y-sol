<template>
  <div class="flex flex-col items-center">
    <h2 class="text-2xl font-roca-light mb-8 mt-10">
      {{ t("information.title") }}
    </h2>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
