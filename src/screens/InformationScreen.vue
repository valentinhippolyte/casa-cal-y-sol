<template>
  <div class="flex flex-col items-center">
    <h2 class="text-2xl font-roca-light mt-10">
      {{ t("information.title") }}
    </h2>
    <FirstTextFromInformation />
    <Regulations />
    <Olvera />
    <Andalusia />
    <AzulejosSection
      :title="t('commonButton.booking.title')"
      :text="t('commonButton.booking.text')"
      link="/booking"
    />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import AzulejosSection from "../components/common/AzulejosSection.vue";
import FirstTextFromInformation from "../components/information/FirstTextFromInformation.vue";
import Regulations from "../components/information/Regulations.vue";
import Andalusia from "../components/information/andalusia_part/Andalusia.vue";
import Olvera from "../components/information/olvera_part/Olvera.vue";

const { t } = useI18n();
</script>
