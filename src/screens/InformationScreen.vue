<template>
  <div class="flex flex-col items-center">
    <h2 class="text-2xl font-roca-light mt-10">
      {{ t("information.title") }}
    </h2>
    <FirstTextFromInformation />
    <Regulations />
    <Olvera />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import FirstTextFromInformation from "../components/information/FirstTextFromInformation.vue";
import Regulations from "../components/information/Regulations.vue";
import Olvera from "../components/information/olvera_part/Olvera.vue";

const { t } = useI18n();
</script>
