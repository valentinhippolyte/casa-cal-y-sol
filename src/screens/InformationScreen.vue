<template>
  <div class="container mx-auto px-4">
    <h2 class="text-2xl font-bold mb-4">{{ t("information.title") }}</h2>
    <TextInformation />
    <Recommendation />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import Recommendation from "../components/Recommendation.vue";
import TextInformation from "../components/TextInformation.vue";

const { t } = useI18n();
</script>
