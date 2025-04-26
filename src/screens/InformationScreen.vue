<template>
  <div class="flex flex-col items-center">
    <Motion
      :initial="{ opacity: 0, y: 30 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5 }"
      ><h2 class="text-2xl font-roca-light mt-10">
        {{ t("information.title") }}
      </h2></Motion
    >
    <Motion
      :initial="{ opacity: 0, y: 30 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5 }"
    >
      <FirstTextFromInformation />
      <Description />
      <Regulations />
    </Motion>
    <Olvera />
    <Andalusia />
    <AzulejosSectionIntern
      :title="t('commonButton.booking.title')"
      :text="t('commonButton.booking.text')"
      link="/booking"
    />
  </div>
</template>

<script setup>
import { Motion } from "@motionone/vue";
import { useI18n } from "vue-i18n";
import AzulejosSectionIntern from "../components/common/AzulejosSectionIntern.vue";
import FirstTextFromInformation from "../components/information/FirstTextFromInformation.vue";
import Regulations from "../components/information/Regulations.vue";
import Andalusia from "../components/information/andalusia_part/Andalusia.vue";
import Description from "../components/information/description_part/Description.vue";
import Olvera from "../components/information/olvera_part/Olvera.vue";

const { t } = useI18n();
</script>
